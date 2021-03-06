import { CurrentWeather } from "./CurrentWeather.type";
import { Forecast } from "./Forecast.type";

export type ForecastProps = {
  forecast: Forecast;
  currentWeather: CurrentWeather;
  iconArray: string[];
  fallbackIcon: string[];
  degreeState: Function;
};
