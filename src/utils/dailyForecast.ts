import { weatherApi } from "../interfaces/weather";

export const getOneForecastDaily = (forecast: Array<weatherApi>) => {
  // TODO: Se eligió 09:00:00 arbitrariamente y falta chequear la hora.
  const daily = forecast.filter((f) => {
    return f.dt_txt?.endsWith("09:00:00");
  });
  return daily;
};
