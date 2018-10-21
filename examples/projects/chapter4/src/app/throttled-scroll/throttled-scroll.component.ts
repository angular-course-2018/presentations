import { Component, ViewChild, ElementRef } from '@angular/core';
import { Subscription,  Observable, fromEvent } from 'rxjs';
import { scan, takeWhile, throttleTime, tap } from 'rxjs/operators';

@Component({
    selector: 'app-throttled-scroll-component',
    styleUrls: ['./throttled-scroll.component.scss'],
    templateUrl: './throttled-scroll.component.html'
})
export class ThrottledScrollComponent {
    scrollSubscription: Subscription;
    eventsCount = 0;
    rate = 400;

    @ViewChild('scrollWrapper') scrollWrapper: ElementRef;

    start() {
        if (this.scrollSubscription) {
            this.stop();
        }

        this.scrollSubscription = fromEvent(this.scrollWrapper.nativeElement, 'scroll')
        .pipe(
            throttleTime(this.rate),
            scan((a) => a + 1, 0),
        ).subscribe(count => this.eventsCount = count);
    }

    stop() {
        this.scrollSubscription.unsubscribe();
    }
}
