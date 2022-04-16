import { useContext, useState } from "react";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import FormContext from "./context/FormContext";
import { apiConfig } from "./service/config";
import { SpinnerRoundFilled } from "spinners-react";

import WeatherContext from "./context/WeatherContext";
import "./App.css";

function App() {
  const [isFoundCity, setIsFoundCity] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const formCtx = useContext(FormContext);
  const weatherCtx = useContext(WeatherContext);

  const formSubmitHandler = (e, ref) => {
    e.preventDefault();
    formCtx.cityName(ref.current.value);
    setIsLoading(true);
    fetch(
      `${apiConfig.base}forecast?q=${ref.current.value}&cnt=5&appid=${apiConfig.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        console.log(result);
        if (result.cod === "200") {
          weatherCtx.setInfo(result);
          setIsLoading(false);
          setIsFoundCity(true);
        } else {
          setIsFoundCity(false);
          setIsLoading(false);
        }
      });
      ref.current.value = "";
  };

  return (
    <div className="app">
      <h1 className="title__app">Weather App</h1>
      <Form onSubmit={formSubmitHandler} />
      {isLoading && <SpinnerRoundFilled style={{ marginTop: "3rem" }} />}
      {isFoundCity ? (
        <Card />
      ) : (
        <div className="error__message">
          <p>There is no such location</p>
        </div>
      )}
    </div>
  );
}

export default App;
