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
          <span style={{ fontSize: "1.3rem", textTransform: "capitalize" }}>
            {weather.weather[0].description}
          </span>
          <span style={{ fontSize: "3rem" }}>{weather.main.temp}°</span>
        </div>
        <div className={styles.currentWeather__description}>
          <h1>{`${weather.name}, ${weather.sys.country}`}</h1>
          <span style={{ fontSize: "1.5rem", marginBottom: ".5rem" }}>
            <strong>Max:</strong> {weather.main.temp_max}° /{" "}
            <strong>Min:</strong> {weather.main.temp_min}
          </span>
          <span>
            <strong>Humedad:</strong> {weather.main.humidity} %
          </span>
          <span>
            <strong>Viento:</strong> {weather.wind.speed} km/h
          </span>
        </div>
      </div>
    </Card>
  );
};

export default CurrentWeather;
