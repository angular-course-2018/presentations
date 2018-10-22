import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClientExampleService } from './http-client-example.service';
import { HttpErrorResponse } from '@angular/common/http';

describe('HttpClientExampleService', () => {
    let myService: HttpClientExampleService;
    let httpMock: HttpTestingController;

    beforeEach(() => {
        TestBed.configureTestingModule({
            imports: [
                HttpClientTestingModule
            ],
            providers: [
                HttpClientExampleService
            ]
        });

        myService = TestBed.get(HttpClientExampleService);
        httpMock = TestBed.get(HttpTestingController);
    });

    it('should extract username from response when profile exists', (done) => {
        expect.assertions(1);

        myService.fetchWithSuccess$().subscribe(res => {
            expect(res).toEqual('test123');
            done();
        });

        const countryRequest = httpMock.expectOne('http://localhost:3000/profile/nn605g');
        countryRequest.flush({username: 'test123', age: 21});

        httpMock.verify();
    });

    it('should emit failure when server respond with 404 not found', (done) => {
        expect.assertions(1);

        myService.fetchWithError$().subscribe(null, err => {
            expect(err.status).toEqual(404);
            done();
        });

        const countryRequest = httpMock.expectOne('http://localhost:3000/profile/error');
        countryRequest.flush('', {status: 404, statusText: 'Not Found'});

        httpMock.verify();
    });

    it('should emit failure when something fails', (done) => {
        expect.assertions(1);

        myService.fetchWithError$().subscribe(null, (errEvent: ErrorEvent) => {
            expect(errEvent.error.type).toEqual('SOME_FAILURE');
            done();
        });

        const countryRequest = httpMock.expectOne('http://localhost:3000/profile/error');
        countryRequest.error(new ErrorEvent('SOME_FAILURE'));

        httpMock.verify();
    });


});
