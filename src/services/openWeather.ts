import openWeatherInstance from "../apis/openWeatherApi";

export const getCurrentWeatherByCoord = async (lat: number, lon: number) => {
  try {
    const { data } = await openWeatherInstance.get(
      `weather?lat=${lat}&lon=${lon}`
    );
    return data;
  } catch (error) {
    throw new Error("Error al conseguir el clima.");
  }
};

export const getCurrentWeatherByName = async (name: string) => {
  try {
    const { data } = await openWeatherInstance.get(`weather?q=${name}`);
    return data;
  } catch (error) {
    throw new Error("Error al conseguir el clima.");
  }
};

export const getNextFiveDaysByName = async (name: string) => {
  try {
    const { data } = await openWeatherInstance.get(`forecast?q=${name}`);
    return data;
  } catch (error) {
    throw new Error("Error al conseguir el clima.");
  }
};

export const getNextFiveDaysByCoord = async (lat: number, lon: number) => {
  try {
    const { data } = await openWeatherInstance.get(
      `forecast?lat=${lat}&lon=${lon}`
    );
    return data;
  } catch (error) {
    throw new Error("Error al conseguir el clima.");
  }
};
