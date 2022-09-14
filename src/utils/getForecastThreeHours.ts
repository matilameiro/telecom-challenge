import { weatherApi } from "../interfaces/weather";

export const getForecastThreeHours = (forecast: Array<weatherApi>) => {
  return forecast.slice(0, 3);
};
