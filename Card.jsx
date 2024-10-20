import { useWeather } from "../Context/WeatherContext";
const Card = () => {
  const weather = useWeather();
  return (
    <div className="card">
      <img src={weather.data?.current?.condition.icon} alt="" />
      <p>{weather.data?.current?.condition.text}</p>
      <h2>
        {weather.data?.location?.name}, {weather.data?.location?.country}
      </h2>
      <h3>{weather.data?.current?.temp_c} °C</h3>
      <p>Humidity {weather.data?.current?.humidity}</p>
      <p>Cloud {weather.data?.current?.cloud}%</p>
    </div>
  );
};
export default Card;
