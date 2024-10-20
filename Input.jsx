import { useWeather } from "../Context/WeatherContext";

const SearchCity = () => {
  const weather = useWeather();
  //console.log(weather);
  return (
    <div className="input">
      <input
        type="text"
        placeholder="Search the city.."
        value={weather.SearchCity}
        onChange={(e) => weather.setSearchCity(e.target.value)}
      />
    </div>
  );
};
export default SearchCity;
