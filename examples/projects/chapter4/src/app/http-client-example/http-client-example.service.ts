import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { pluck, tap, catchError, retry } from 'rxjs/operators';
import { UserProfile } from './UserProfile.model';
import { of, throwError } from 'rxjs';

@Injectable()
export class HttpClientExampleService {
    constructor(private httpClient: HttpClient) {
    }

    fetchWithSuccess$() {
        return this.httpClient.get<UserProfile>('http://localhost:3000/profile/nn605g').pipe(
            pluck<UserProfile, Pick<UserProfile, 'username'>>('username'),
        );
    }

    fetchWithError$() {
        return this.httpClient.get<UserProfile>('http://localhost:3000/profile/error');
    }

    fetchMaybe$() {
        return this.httpClient.get<UserProfile>('http://localhost:3000/profile/ice-cream').pipe(
            retry(1),
            pluck<UserProfile, Pick<UserProfile, 'username'>>('username'),
        );
    }
}
