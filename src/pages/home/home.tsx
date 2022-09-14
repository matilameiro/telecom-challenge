import { useEffect, useState } from "react";
import CurrentWeather from "../../components/currentWeather/currentWeather";
import NextWeatherList from "../../components/nextWeatherList/nextWeatherList";
import OtherCitysWeather from "../../components/otherCitysWeather/otherCitysWeather";
import Spinner from "../../components/shared/spinner/spinner";
import { otherCitys } from "../../constants/otherCitys";
import { weatherApi } from "../../interfaces/weather";
import {
  getCurrentWeatherByCoord,
  getNextFiveDaysByCoord,
} from "../../services/openWeather";
import { getOneForecastDaily } from "../../utils/dailyForecast";
import { Position } from "../../interfaces/position";

const Home = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [currentWeather, setCurrentWeather] = useState<weatherApi>();
  const [forecast, setForecast] = useState<Array<weatherApi>>([]);
  const [currentPosition, setCurrentPosition] = useState<Position>(
    otherCitys[0].position
  );

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(function (position) {
      setCurrentPosition({
        latitude: position.coords.latitude,
        longitude: position.coords.longitude,
      });
    });
  }, []);

  useEffect(() => {
    setLoading(true);
    getCurrentWeatherByCoord(
      currentPosition.latitude,
      currentPosition.longitude
    )
      .then((weather) => {
        setLoading(false);
        setCurrentWeather(weather);
        window.scrollTo({ top: 0, behavior: "smooth" });
      })
      .catch((error) => {
        alert(error);
      });

    // TODO: no lo pongo en un promiseAll para que si falla no deje de mostrar la pagina.
    getNextFiveDaysByCoord(currentPosition.latitude, currentPosition.longitude)
      .then((forescast) => {
        // TODO hice esta función porque en openWeather en la versión free no tengo permisos para pedir los siguientes dias.
        const daily = getOneForecastDaily(forescast.list);
        // const nextThreeHours = getForecastThreeHours(forescast.list);
        setForecast(daily);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [currentPosition]);

  const changeCity = (position: Position) => {
    setCurrentPosition(position);
  };

  if (loading) {
    return <Spinner></Spinner>;
  }

  if (!currentWeather) {
    return <h3>No se encontró el clima buscado</h3>;
  }
  return (
    <>
      <CurrentWeather weather={currentWeather}></CurrentWeather>
      {forecast && forecast.length > 0 && (
        <NextWeatherList weatherList={forecast}></NextWeatherList>
      )}
      <OtherCitysWeather
        citys={otherCitys}
        onClick={changeCity}
      ></OtherCitysWeather>
    </>
  );
};

export default Home;
