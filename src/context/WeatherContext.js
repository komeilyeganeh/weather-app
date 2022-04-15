import { createContext } from "react";

const WeatherContext = createContext({
  infoWeather: {},
  setInfo: (weather) => {},
});

export default WeatherContext;
