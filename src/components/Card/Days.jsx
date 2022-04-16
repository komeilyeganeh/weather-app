import { useContext } from "react";
import WeatherContext from "../../context/WeatherContext";
import DayItem from "./DayItem";
import classes from "./Days.module.css";

const Days = () => {
    const weatherCtx = useContext(WeatherContext);
    const {infoWeather} = weatherCtx;
    const days = (infoWeather.list).slice(1);

    return <div className={classes.days}>
        {days.map(day => <DayItem dayWeather={day} key={day.dt}/>)}
    </div>
}

export default Days;