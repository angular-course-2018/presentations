import { Component, OnInit, OnDestroy, OnChanges, SimpleChanges, Input, Output, EventEmitter } from '@angular/core';


@Component({
    selector: 'app-lifecycle-header',
    templateUrl: './lifecycle-header.component.html'
})
export class LifecycleHeaderComponent implements OnInit, OnChanges, OnDestroy {
    @Input() title: string;
    @Output()  titleChange = new EventEmitter<string>();
    @Output() buttonClicked = new EventEmitter<void>();

    ngOnInit() {
        console.log('🎉 Mazal Tov! component was born!');
    }


    ngOnChanges(changes: SimpleChanges) {
        console.log('♻️ one of the inputs changed: ', changes);
    }


    myButtonClicked(){
      this.buttonClicked.emit();
      console.log('clicked!');
    }

    ngOnDestroy() {
        console.log('💀 💀 💀');
    }
}
