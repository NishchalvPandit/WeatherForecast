import { useState, useEffect } from "react";
import Searchbar from "./Searchbar";
import WeatherCard from "./components/WeatherCard";
import "./app.css";


function App() {
  const [city, setCity] = useState("kathmandu");
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);

  const apiKey = "ed3a4761fa7b8aabbf2dfc9e3f307db4";

  useEffect(() => {
    const fetchWeather = async () => {
      setLoading(true);

      try {
        const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
        const data = await response.json();
        setWeather(data);

      }
      catch (error) {
        console.log(error);
      }
      finally {
        setLoading(false);
      }

    }
    fetchWeather();


  }, [city]);

  return (
    <div className="app">
      <h1>Weather Forecast</h1>
      <Searchbar setCity={setCity} />
      {loading && <p>Loading...</p>}
      {weather && weather.main && <WeatherCard weather={weather} />}

    </div>
  )

}

export default App;
