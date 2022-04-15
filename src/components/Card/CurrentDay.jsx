import classes from "./CurrentDay.module.css";
import {GrLocation} from "react-icons/gr";

const CurrentDay = () => {
    return <div className={classes.current}>
        <div className={classes.top__info}>
            <h2 className={classes.day}>Friday</h2>
            <h4 className={classes.date}>Apr 15th</h4>
            <p className={classes.location}><GrLocation className={classes.location__icon}/> Tehran</p>
        </div>
        <div className={classes.bottom__info}>
            <span className={classes.degree}>16D</span>
            <p>Light Cloud</p>
        </div>
    </div>
}

export default CurrentDay;