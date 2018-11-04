import { WeatherResponse } from '../weather-response.model';

export interface AppState {
  weather: WeatherState;
}

export interface WeatherState {
  cityName: string;
  countryCode: string;
  fullAddress: string;
  weather?: WeatherResponse;
}
