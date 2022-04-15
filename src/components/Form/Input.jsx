import { forwardRef, useContext } from "react";
import FormContext from "../../context/FormContext";
import classes from "./Input.module.css";

const Input = forwardRef((props, ref) => {
  const formContext = useContext(FormContext);
  const city = formContext.city;

  return (
    <input
      type="text"
      placeholder="City..."
      defaultValue={city}
      className={classes.input}
      ref={ref}
    />
  );
});

export default Input;
