import Input from "./Input";
import classes from "./Form.module.css";

const Form = () => {
    return <div style={{width: "100%", display: "flex", justifyContent: "center"}}>
        <form action="" className={classes.form}>
            <Input />
        </form>
    </div>
}

export default Form;