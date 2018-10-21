import { Component } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError, pluck, retryWhen, concatMap, delay, retry, map } from 'rxjs/operators';
import { Subscription, Observable, throwError, of, interval } from 'rxjs';
import { UserProfile } from './UserProfile.model';

@Component({
    selector: 'app-http-client-example-component',
    styleUrls: ['./http-client-example.component.scss'],
    templateUrl: './http-client-example.component.html'
})
export class HttpClientExampleComponent {
    isLoading;
    isError;
    httpRequest: Subscription;
    response;

    constructor(private httpClient: HttpClient) {
        this.reset();
        this.handleError = this.handleError.bind(this);
    }

    fetchWithSuccess() {
        this.reset();

        this.isLoading = true;

        this.httpRequest = this.httpClient.get<UserProfile>('http://localhost:3000/profile/nn605g').pipe(
            pluck('username'),
            tap(() => this.isLoading = false),
        ).subscribe((res: string) => this.response = res);
    }

    fetchWithError() {
        this.reset();

        this.isLoading = true;

        this.httpRequest = this.httpClient.get<UserProfile>('http://localhost:3000/profile/error').pipe(
            catchError(this.handleError),
            tap(() => this.isLoading = false),
        ).subscribe((res: string) => this.response = res);
    }

    cancel() {
        this.httpRequest.unsubscribe();
        this.isLoading = false;
    }

    retry() {
        this.reset();

        this.isLoading = true;

    }

    reset() {
        if (this.httpRequest) {
            this.cancel();
        }
        this.isLoading = false;
        this.response = undefined;
        this.isError = false;
    }

    private handleError(error: HttpErrorResponse) {
        this.isError = true;
        // return an observable with a user-facing error message
        return of('Something bad happened; please try again later.');
    }
}
