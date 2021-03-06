import { CurrentWeather } from "./CurrentWeather.type";
import { Forecast } from "./Forecast.type";
import { ForecastProps } from "./ForecastProps.type";

export type GridProps = {
  currentWeather: CurrentWeather;
  forecastWeather: Forecast;
};
