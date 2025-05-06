// Weather Icons
import { FaSun, FaCloud, FaWind, FaQuestion } from "react-icons/fa";
import { FaCloudSun } from "react-icons/fa6";
import { IoRainySharp } from "react-icons/io5";
import { FiCloudSnow, FiCloudLightning } from "react-icons/fi";
import { TbTemperatureCelsius } from "react-icons/tb";
import { WiHumidity, WiBarometer, WiFog } from "react-icons/wi";

// I export the icons with a different name (easier to remember and write)
export {
    // Weather
    FaSun as Sunny,
    FaCloud as Cloud,
    FaCloudSun as SunCloud,
    IoRainySharp as Rain,
    FiCloudSnow as Snow,
    FiCloudLightning as Lightning,

    // Other info
    TbTemperatureCelsius as Temp,
    FaWind as Wind,
    WiHumidity as Humidity,
    WiBarometer as Barometer,
    WiFog as Fog,

    FaQuestion as NullUndefinedIcon
};

// Search Icon
import { FaSearch } from "react-icons/fa";

export { FaSearch as SearchIcon }

// Interface for the props of Search
export interface SearchProps {
    /// The function that updates the city's name (triggered when the user searches)
    // The "city" received as a parameter is a string (input value) used in the Search component.
    setCitySearch: (city: string) => void;
}

// Interface for the API's data
export interface WeatherInfo {
    name: string; // Name of the city (Rome by default)
    main: {
        // Nested objects
        temp: number; // Temperature
        pressure: number; // Atmospheric pressure
        humidity: number; // Humidity
    };
    wind: {
        speed: number; // Wind speed
    };
    visibility: number;  // Visibility
    weather: {
        icon: string; // Icon code (ex. "01d" for sunny weather)
    }[]; // <-- Array of weather conditions
}

// Interface for the props of Weather
export interface WeatherProps {
    // Weather data (which follows WeatherInfo's structure), may be null if no data is available (ex. if there's an error)
    weatherData: WeatherInfo | null;
    // Error message
    error: boolean;
}