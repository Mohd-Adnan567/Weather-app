const Api_key = "/";
export const getData = async (city) => {
  const response =
    await fetch(`https://api.weatherapi.com/v1/current.json?key=${Api_key}&q=${city}&aqi=yes
`);
  return await response.json();
};

export const getCurrentUser = async (lat, lon) => {
  const response =
    await fetch(`https://api.weatherapi.com/v1/current.json?key=${Api_key}&q=${lat},${lon}&aqi=yes
`);
  return await response.json();
};
