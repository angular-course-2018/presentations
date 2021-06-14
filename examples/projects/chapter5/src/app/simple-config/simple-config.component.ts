import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'app-simple-config',
    templateUrl: './simple-config.component.html',
    styleUrls: ['./simple-config.component.scss']
})
export class SimpleConfigComponent implements  OnInit {
  constructor(private activatedRoute: ActivatedRoute){

  }
  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe(params => console.log(params.get('id')));
  }

}
