export interface WeatherResponse {
  id: number;
  name: string;
  coord: {
    lon: number;
    lat: number;
  };
  weather: [{
    id: number;
    main: string;
    description: string;
    icon: string;
  }];
  base: string;
  main: {
    temp: number;
    pressure: number;
    humidity: number;
    temp_min: number;
    temp_max: number;
  };
}
