import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, Input } from '@angular/core';


@Component({
    selector: 'app-lifecycle-header',
    templateUrl: './lifecycle-header.component.html'
})
export class LifecycleHeaderComponent implements OnInit, OnChanges, OnDestroy {
    @Input() title: string;

    ngOnInit() {
        console.log('🎉 Mazal Tov! component was born!');
    }


    ngOnChanges(changes: SimpleChanges) {
        console.log('♻️ one of the inputs chaned: ', changes);
    }

    ngOnDestroy() {
        console.log('💀 💀 💀');
    }
}
