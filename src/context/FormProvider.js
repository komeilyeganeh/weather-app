import { useReducer } from "react";
import FormContext from "./FormContext"

const defaulState = {
    city: ""
}

const formReducer = (state, action) => {
    if (action.type === "ADD_CITY") {
        return {
            city: action.payload
        };
    }
    return state;
}

const FormProvider = ({children}) => {
    const [state, dispatch] = useReducer(formReducer, defaulState);

    const cityNameHandler = (city) => {
        dispatch({type: "ADD_CITY", payload: city});
    }

    const valueContext = {
        city: state.city,
        cityName: cityNameHandler
    }

    return <FormContext.Provider value={valueContext}>{children}</FormContext.Provider>
}

export default FormProvider;