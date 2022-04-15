import classes from "./Card.module.css";
import CurrentDay from "./CurrentDay";
import Days from "./Days";

const Card = () => {
    return <div className={classes.card}>
        <CurrentDay />
        <Days />
    </div>
}

export default Card;