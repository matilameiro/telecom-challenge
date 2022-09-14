export interface weatherApi {
  base: string;
  clouds: Clouds;
  cod: number;
  coord: Coord;
  dt: number;
  dt_txt?: string;
  id: number;
  main: Main;
  name: string;
  sys: Sys;
  timezone: number;
  visibility: number;
  weather: Array<Weather>;
  wind: Wind;
}

export interface Clouds {
  all: number;
}

export interface Coord {
  lon: number;
  lat: number;
}

export interface Main {
  feels_like: number;
  grnd_level: number;
  humidity: number;
  pressure: number;
  sea_level: number;
  temp: number;
  temp_max: number;
  temp_min: number;
}

export interface Sys {
  country: string;
  sunrise: number;
  sunset: number;
}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;
}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}
