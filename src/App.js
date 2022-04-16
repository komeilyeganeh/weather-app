import { useContext, useEffect, useState } from "react";
import Card from "./components/Card/Card";
import Form from "./components/Form/Form";
import FormContext from "./context/FormContext";
import { apiConfig } from "./service/config";
import { SpinnerRoundFilled, SpinnerCircularSplit } from "spinners-react";
import Footer from "./components/Footer/Footer";

import WeatherContext from "./context/WeatherContext";
import "./App.css";

function App() {
  const [isFoundCity, setIsFoundCity] = useState(false);
  const [isLoadingCard, setIsLoadingCard] = useState(false);
  const [preloadDom, setPreloadDom] = useState(true);
  const formCtx = useContext(FormContext);
  const weatherCtx = useContext(WeatherContext);

  useEffect(() => {
    setTimeout(() => {
      setPreloadDom(false);
    }, 1800);
  }, []);

  const formSubmitHandler = (e, ref) => {
    e.preventDefault();
    formCtx.cityName(ref.current.value);
    setIsLoadingCard(true);
    fetch(
      `${apiConfig.base}forecast?q=${ref.current.value}&cnt=5&appid=${apiConfig.key}`
    )
      .then((res) => res.json())
      .then((result) => {
        if (result.cod === "200") {
          weatherCtx.setInfo(result);
          setIsLoadingCard(false);
          setIsFoundCity(true);
        } else {
          setIsFoundCity(false);
          setIsLoadingCard(false);
        }
      });
    ref.current.value = "";
  };

  return (
    <>
      <div className={`preloader ${!preloadDom ? "hide" : ""}`}>
        <SpinnerCircularSplit />
      </div>

      <div className="app">
        <h1 className="title__app">Weather App</h1>
        <Form onSubmit={formSubmitHandler} />
        {isLoadingCard && <SpinnerRoundFilled style={{ marginTop: "3rem" }} />}
        {isFoundCity ? (
          <Card />
        ) : (
          <div className="error__message">
            <p>There is no such location</p>
          </div>
        )}
        <Footer />
      </div>
    </>
  );
}

export default App;
