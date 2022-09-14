import { weatherApi } from "../../interfaces/weather";
import Card from "../shared/card/card";
import styles from "./currentWeather.module.scss";

type Props = {
  weather: weatherApi;
};

const CurrentWeather = ({ weather }: Props) => {
  return (
    <Card>
      <div className={styles.currentWeather}>
        <div className={styles.currentWeather__now}>
          <img
            src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
            alt={weather.weather[0].description}
            title={weather.weather[0].description}
            width={125}
            height={125}
          />
          <span className={styles.currentWeather__now__description}>
            {weather.weather[0].description}
          </span>
          <span className={styles.currentWeather__now__temp}>
            {Math.round(weather.main.temp)}°
          </span>
        </div>
        <div className={styles.currentWeather__description}>
          <h1>{`${weather.name}, ${weather.sys.country}`}</h1>
          <span className={styles.currentWeather__description__temps}>
            <strong>Max:</strong> {Math.round(weather.main.temp_max)}° /{" "}
            <strong>Min:</strong> {Math.round(weather.main.temp_min)}°
          </span>
          <span className={styles.currentWeather__description__extras}>
            <strong>Humedad:</strong> {weather.main.humidity} %
            <strong>Viento:</strong> {Math.round(weather.wind.speed)} km/h
          </span>
        </div>
      </div>
    </Card>
  );
};

export default CurrentWeather;
