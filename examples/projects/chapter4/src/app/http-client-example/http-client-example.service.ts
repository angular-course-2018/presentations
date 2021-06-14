import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { pluck, retry } from 'rxjs/operators';
import { UserProfile } from './models/UserProfile.model';

@Injectable()
export class HttpClientExampleService {
    constructor(private httpClient: HttpClient) {
    }

    fetchWithSuccess$() {
        return this.httpClient.get<UserProfile>('http://localhost:3000/profile/nn605g')
        .pipe(
            pluck<UserProfile, string>('username'),
        );
    }

    fetchWithError$() {
        return this.httpClient.get<UserProfile>('http://localhost:3000/profile/error');
    }

    fetchMaybe$() {
        return this.httpClient.get<UserProfile>('http://localhost:3000/profile/ice-cream').pipe(
            retry(4),

            pluck<UserProfile, Pick<UserProfile, 'username'>>('username'),
        );
    }
}
