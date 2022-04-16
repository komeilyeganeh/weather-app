import { WiCloudy, WiDaySunny,  WiHail} from "react-icons/wi";
import classes from "./DayItem.module.css";

const DayItem = ({ dayWeather }) => {
  let weatherIcon;
  switch (dayWeather.weather[0].main) {
    case "Clouds":
      weatherIcon = <WiCloudy size="2.2rem" className="cloud__icon" />;
      break;
    case "Clear":
      weatherIcon = <WiDaySunny size="2.2rem" className="cloud__icon" />;
      break;
      case "Rain":
      weatherIcon = <WiHail size="2.2rem" className="cloud__icon" />;
      break;
  }

  const date = new Date(dayWeather.dt * 1000);
  const time = `${date.getHours()} : ${date.getMinutes()}`;
  const weatherTemp = dayWeather.main.temp - 273.15;
  return (
    <div className={classes.day__item}>
      {weatherIcon}
      <p>{time}</p>
      <span>{Math.round(weatherTemp)} °C</span>
    </div>
  );
};

export default DayItem;
