import { useContext, useRef } from "react";
import Input from "./Input";
import FormContext from "../../context/FormContext";
import classes from "./Form.module.css";

const Form = ({onSubmit}) => {
  const inputRef = useRef();

  return (
    <div style={{ width: "100%", display: "flex", justifyContent: "center" }}>
      <form action="" className={classes.form} onSubmit={(e) => onSubmit(e, inputRef)}>
        <Input  ref={inputRef}/>
      </form>
    </div>
  );
};

export default Form;
