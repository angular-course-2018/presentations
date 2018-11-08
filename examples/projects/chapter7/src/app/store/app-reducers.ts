import { AppActionsUnion, AppAction } from './app.actions';
import { WeatherState } from './app-state';

const initialState: WeatherState = {
  cityName: '',
  countryCode: '',
};

export function userReducer(state = initialState, action: AppActionsUnion): WeatherState {
  switch (action.type) {
    case AppAction.SET_CITY_NAME:
      return { ...state, cityName: action.payload };
    case AppAction.SET_COUTRY_CODE:
      return { ...state, countryCode: action.payload };
    case AppAction.SET_WEATHER:
      return { ...state, weather: action.payload };
    default:
      return state;
  }
}
