import { ThrottledScrollComponent } from './throttled-scroll.component';
import { ElementRef } from '@angular/core';

describe('ThrottledScrollComponent', () => {
    it('should count 1 scroll event when emmiting 2 events within 100ms and the throttle rate is 500ms', (done) => {
        expect.assertions(1);

        const mockElement = document.createElement('div');
        const mockElementRef = new ElementRef(mockElement);
        const component = new ThrottledScrollComponent();
        component.scrollWrapper = mockElementRef;
        component.rate = 500;

        component.start();
        mockElement.dispatchEvent(new Event('scroll'));
        setTimeout(() => mockElement.dispatchEvent(new Event('scroll')), 100);
        setTimeout(() => {
            expect(component.eventsCount).toBe(1);
            done();
        }, 600);
    });
});
