import { useEffect, useState } from "react";
import Search from "./components/Search"
import Weather from "./components/Weather"

import type { WeatherInfo } from '../src/index'

const App = () => {
  // States

  // State for searching the city, by default it's Rome
  const [citySearch, setCitySearch] = useState<string>('Rome');

  // State for getting the API Info. It can both follow the stracture of the interface WeatherInfo and be null
  const [weatherData, setWeatherData] = useState<WeatherInfo | null>(null);

  // State for handling the error. If there's an error, the value changes to true.
  const [error, setError] = useState<boolean>(false);

  // It's a key provided by OpenWeatherMap for accessing their API.
  const weather_api = import.meta.env.VITE_API_KEY;

  // Async Function
  async function handleWeatherAPI(): Promise<void> {
    // If the input is void, return
    if (!citySearch) return;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch}&lang=it&units=metric&APPID=${weather_api}`;

    try {
      const response = await fetch(url);

      // If the response is not okay/valid, throw an error
      if (!response.ok) {
        throw new Error(`Failed to fetch weather data for "${citySearch}"`);
      }

      // The data follows the structure of the interface WeatherInfo
      const data: WeatherInfo = await response.json();

      setWeatherData(data);
    } catch (error: unknown) {
      console.error(error);
      // Set the value to true if there's an error.
      setError(true);
    }
  }

  // It calls the async function only when the user enters a city (citySearch).
  useEffect(() => {
    handleWeatherAPI();
  }, [citySearch]);

  // It set a 1.2 second's timeout which sets the value of the Error to false, only when the Error changes (when it's true), and then clears the timeout.
  useEffect(() => {
    // If there's not an error, return
    if (!error) return;

    const t = setTimeout(() => {
      setError(false);
    }, 1200);

    // Clear the timeout
    return () => clearTimeout(t);
  }, [error]);

  return (
    <>
      <main className="px-4">
        <Search setCitySearch={setCitySearch} />
        <Weather weatherData={weatherData} error={error} />
      </main>
    </>
  )
}

export default App