import { Directive, ViewContainerRef, TemplateRef, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';

@Directive({
    selector: '[appDuplicate]'
})
export class DuplicateDirective implements OnInit, OnChanges {

    @Input() appDuplicate: number;

    constructor(
        private container: ViewContainerRef,
        private template: TemplateRef<any>,
    ) { }

    ngOnInit(): void {
        this.duplicate(this.appDuplicate);
    }

    ngOnChanges(changes: SimpleChanges) {
        this.duplicate(changes.appDuplicate.currentValue);
    }

    private duplicate(duplicateNum: number) {
        this.container.clear();
        for (let i = 0; i < duplicateNum; i++) {
            this.container.createEmbeddedView(this.template);
        }
    }
}
