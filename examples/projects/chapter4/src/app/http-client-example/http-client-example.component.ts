import { Component } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Subscription, of } from 'rxjs';
import { HttpClientExampleService } from './http-client-example.service';

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

  constructor(private exampleService: HttpClientExampleService) {
    this.reset();
    this.handleError = this.handleError.bind(this);
  }

  fetchWithSuccess() {
    this.reset();
    this.isLoading = true;

    this.httpRequest = this.exampleService.fetchWithSuccess$()
      .subscribe(
        (res) => this.response = res,
        null,
        () => this.isLoading = false
      );
  }

  fetchWithError() {
    this.reset();
    this.isLoading = true;

    this.httpRequest = this.exampleService.fetchWithError$()
      .pipe(
        catchError(this.handleError),
      )
      .subscribe((res) => this.response = res, null, () => this.isLoading = false);
  }

  cancel() {
    this.httpRequest.unsubscribe();
    this.isLoading = false;
  }

  retry() {
    this.reset();
    this.isLoading = true;

    this.httpRequest = this.exampleService.fetchMaybe$()
      .pipe(
        catchError(this.handleError),
      )
      .subscribe((res) => this.response = res, null, () => this.isLoading = false);
  }

  reset() {
    if (this.httpRequest) {
      this.cancel();
    }
    this.isLoading = false;
    this.response = undefined;
    this.isError = false;
  }

  private handleError(error) {
    this.isError = true;
    // return an observable with a user-facing error message
    return of('Something bad happened; please try again later.');
  }
}
