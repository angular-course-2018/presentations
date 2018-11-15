import { Component, Input, Output, EventEmitter, ViewChild, OnChanges, SimpleChanges } from '@angular/core';

@Component({
  template: '<input #bananaInput type="text" (keyup)="bananaTypeChange.emit(bananaInput.value)" [value]="bananaType" />',
  selector: 'app-banana'
})
export class BananaComponent {
  @ViewChild('child') bananaInput: HTMLInputElement;

  @Input() bananaType = '';
  @Output() bananaTypeChange = new EventEmitter<string>();

  // ngOnChanges(changes: SimpleChanges): void {
  //   console.log(changes['bananaType'].currentValue);
  // }

}
