import { createContext, useContext, useState } from "react";
import { getData, getCurrentUser } from "../Api/ApiCall";
const weatherContext = createContext(null);
export const useWeather = () => {
  return useContext(weatherContext);
};
export const WeatherProvider = (props) => {
  const [searchCity, setSearchCity] = useState(null);
  const [data, setData] = useState(null);
  const FetchData = async () => {
    const response = await getData(searchCity);
    setData(response);
  };
  const getUserLocation = async () => {
    navigator.geolocation.getCurrentPosition((position) => {
      getCurrentUser(position.coords.latitude, position.coords.longitude).then(
        (res) => setData(res)
      );
    });
  };
  return (
    <weatherContext.Provider
      value={{ searchCity, data, setSearchCity, FetchData, getUserLocation }}
    >
      {props.children}
    </weatherContext.Provider>
  );
};
