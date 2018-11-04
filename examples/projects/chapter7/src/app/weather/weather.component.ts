import { Component, OnInit, Input } from '@angular/core';
import { WeatherResponse } from '../weather-response.model';

@Component({
  selector: 'app-weather',
  templateUrl: './weather.component.html',
  styleUrls: ['./weather.component.css']
})
export class WeatherComponent implements OnInit {
  @Input() weather: WeatherResponse;

  constructor() { }

  ngOnInit() {
  }

}
