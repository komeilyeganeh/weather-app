import { useContext } from "react";
import { GoLocation } from "react-icons/go";
import WeatherContext from "../../context/WeatherContext";
import WeatherMain from "./WeatherMain";
import classes from "./CurrentDay.module.css";

const CurrentDay = () => {
  const weatherCtx = useContext(WeatherContext);
  const { infoWeather } = weatherCtx;
  const dayOne = infoWeather.list[0];
  var days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "June",
    "July",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const date = new Date(dayOne.dt * 1000);
  const day = days[date.getDay()];
  const month = months[date.getMonth()];
  const dayOfMonth = date.getDate();
  const weatherTemp = dayOne.main.temp - 273.15;
  const country = infoWeather.city.country;

  return (
    <div className={classes.current}>
      <div className={classes.top__info}>
        <h2 className={classes.day}>{day}</h2>
        <h4 className={classes.date}>{month} {dayOfMonth}</h4>
        <p className={classes.location}>
          <GoLocation color="#F0A500" size="1.2rem"/>
          {infoWeather.city.name} / {country}
        </p>
      </div>
      <div className={classes.bottom__info}>
        <span className={classes.degree}>
          {Math.round(weatherTemp)} °C
        </span>
        <WeatherMain main={dayOne.weather[0].main}/>
      </div>
    </div>
  );
};

export default CurrentDay;
