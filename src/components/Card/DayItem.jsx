import {BsFillCloudSunFill} from "react-icons/bs";
import classes from "./DayItem.module.css";

const DayItem = () => {
    return <div className={classes.day__item}>
        <BsFillCloudSunFill className={classes.cloud__icon}/>
        <p>sat</p>
        <span>16D</span>
    </div>
}

export default DayItem;