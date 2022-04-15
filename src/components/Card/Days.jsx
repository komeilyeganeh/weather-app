import DayItem from "./DayItem";
import classes from "./Days.module.css";

const Days = () => {
    return <div className={classes.days}>
        <DayItem />
        <DayItem />
        <DayItem />
        <DayItem />
        <DayItem />
    </div>
}

export default Days;