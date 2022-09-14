import axios from "axios";

const openWeatherInstance = axios.create({
  baseURL: process.env.REACT_APP_API_ENDPOINT,
  timeout: 5000,
});

openWeatherInstance.interceptors.request.use((config) => {
  // use config.params if it has been set
  config.params = config.params || {};
  // add any client instance specific params to config
  config.params["appid"] = process.env.REACT_APP_OPEN_WEATHER_API_KEY;
  config.params["units"] = "metric";
  config.params["lang"] = "es";
  return config;
});

// TODO: manejo de errores desde el backend (Modal o redireccion)
openWeatherInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response.status === 400) {
      console.log("respondió 400");
    }
    if (error.response.status === 401) {
      console.log("respondió 401");
    }
    if (error.response.status === 403) {
      console.log("respondió 403");
    }
    if (error.response.status === 404) {
      console.log("respondió 404");
    }
    if (error.response.status === 405) {
      console.log("respondió 405");
    }
    return Promise.reject(error);
  }
);

export default openWeatherInstance;
