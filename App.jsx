import { useEffect, useState } from "react";
import Card from "./componets/Card";
import Input from "./componets/Input";
import Button from "./componets/Button";
import { useWeather } from "./Context/WeatherContext";
import "./App.css";

function App() {
  const weather = useWeather();
  //console.log(weather);
  useEffect(() => {
    //Get User Location
    weather.getUserLocation();
  }, []);

  return (
    <>
      <h1 className="heading">Weather App</h1>
      {weather ? (
        <>
          <Input></Input>
          <Button onClick={weather.FetchData} value="Search"></Button>
          <Card></Card>
          <Button onClick={weather.getUserLocation} value="Refresh"></Button>
        </>
      ) : (
        <>Loading....</>
      )}
    </>
  );
}

export default App;
