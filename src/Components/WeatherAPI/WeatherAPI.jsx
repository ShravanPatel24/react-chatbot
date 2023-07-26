import React, { useState, useEffect } from "react";
import axios from "axios";

const WeatherAPI = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          try {
            const { latitude, longitude } = position.coords;
            const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=d4713dea60464d1bf56113b5c8c54c97`;
            const response = await axios.get(url);
            setData(response.data);
          } catch (error) {
            console.error("Failed to fetch weather data.", error);
          }
        },
        (error) => {
          console.error(
            "Geolocation is not available or permission denied.",
            error
          );
        }
      );
    } else {
      console.error("Geolocation is not supported in this browser.");
    }
  }, []);

  return (
    <div>
      <h3>Today's Weather</h3>
      {data && (
        <p>
          The current temperature at your location is{" "}
          <b>{(data.main.temp - 273.15).toFixed(2)}</b> degrees Celsius.
        </p>
      )}
    </div>
  );
};

export default WeatherAPI;
