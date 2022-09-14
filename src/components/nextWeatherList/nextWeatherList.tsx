import { weatherApi } from "../../interfaces/weather";
import { getDayName } from "../../utils/getDayName";
import Card from "../shared/card/card";
import Styles from "./nextWeatherList.module.scss";

type Props = {
  weatherList: Array<weatherApi>;
};

const NextWeatherList = ({ weatherList }: Props) => {
  return (
    <>
      <h3>Pronóstico de los próximos 5 días</h3>
      <div className={Styles.nextWeatherList}>
        {weatherList.map((weather) => (
          <Card key={weather.dt}>
            <div className={Styles.nextWeatherList__weather}>
              <h4 className={Styles.nextWeatherList__weather__dayname}>
                {getDayName(weather.dt_txt)}
              </h4>
              <img
                src={`http://openweathermap.org/img/w/${weather.weather[0].icon}.png`}
                alt={weather.weather[0].description}
                title={weather.weather[0].description}
                width={100}
                height={100}
              ></img>
              <span className={Styles.nextWeatherList__weather__description}>
                {" "}
                {weather.weather[0].description}
              </span>
              <span
                className={Styles.nextWeatherList__weather__temp}
              >{`${Math.round(weather.main.temp_max)}° / ${Math.round(
                weather.main.temp_min
              )}°`}</span>
            </div>
          </Card>
        ))}
      </div>
    </>
  );
};

export default NextWeatherList;
