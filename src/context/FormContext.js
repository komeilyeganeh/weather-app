import { createContext } from "react";

const FormContext = createContext({
    city: "",
    cityName: (city) => {}
});

export default FormContext;