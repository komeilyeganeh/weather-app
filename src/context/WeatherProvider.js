import { useReducer } from "react";
import WeatherContext from "./WeatherContext";

const defaulState = {
  infoWeather: {},
};

const weatherReducer = (state, action) => {
    if (action.type === "SET_WEATHER") {
    return {
      infoWeather: action.payload,
    };
  }
  return state;
};

const WeatherProvider = ({ children }) => {
  const [state, dispatch] = useReducer(weatherReducer, defaulState);

  const setInfoWeatherHandler = (weather) => {
    dispatch({ type: "SET_WEATHER", payload: weather });
  };

  const valueContext = {
    infoWeather: state.infoWeather,
    setInfo: setInfoWeatherHandler,
  };

  return (
    <WeatherContext.Provider value={valueContext}>
      {children}
    </WeatherContext.Provider>
  );
};

export default WeatherProvider;
