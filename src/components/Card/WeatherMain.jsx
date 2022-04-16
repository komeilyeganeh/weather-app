import {WiCloudy, WiDaySunny, WiHail, WiSnow} from "react-icons/wi";
import classes from "./CurrentDay.module.css";

const WeatherMain = (main) => {
  switch (main) {
    case "Clouds":
      return (
        <p className={classes.desc}>
          Cloudy <WiCloudy size="2.2rem" />
        </p>
      );
    case "Clear":
      return (
        <p className={classes.desc}>
          Clear <WiDaySunny size="2.2rem" />
        </p>
      );
    case "Rain":
      return (
        <p className={classes.desc}>
          Rainy <WiHail size="2.2rem" />
        </p>
      );
    case "Snow":
      return (
        <p className={classes.desc}>
          Snow <WiSnow size="2.2rem" />
        </p>
      );
  }
};

export default WeatherMain;
