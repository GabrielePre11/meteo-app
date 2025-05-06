// Weather Icons
import {
    // Main Weather Icons (for different weather conditions)
    Sunny,
    Cloud,
    SunCloud,
    Rain,
    Snow,
    Lightning,
    NullUndefinedIcon,

    // Info Icons (for weather details like temperature, wind, humidity, etc.)
    Temp,
    Wind,
    Humidity,
    Barometer,
    Fog,

    // TypeScript Interface for Weather Props
    type WeatherProps,
} from '../index';

// This function takes an `iconCode` (a string) as a parameter, which represents the weather condition code from the OpenWeatherMap API. 
// Based on the code, the function returns the appropriate weather icon component.
const getWeatherIcon = (iconCode: string) => {
    switch (iconCode) {
        // Check the icon code for clear sky (day or night)
        case "01d":
        case "01n":
            // Return the icon with a color
            return <Sunny className="text-[120px] text-yellow-500 md:text-[150px]" />;
        case "02d":
        case "02n":
            return <SunCloud className="text-[120px] text-white md:text-[150px]" />;
        case "03d":
        case "03n":
        case "04d":
        case "04n":
            return <Cloud className="text-[120px] text-gray-300 md:text-[150px]" />;
        case "09d":
        case "09n":
        case "10d":
        case "10n":
            return <Rain className="text-[120px] text-blue-500 md:text-[150px]" />;
        case "11d":
        case "11n":
            return <Lightning className="text-[120px] text-yellow-400 md:text-[150px]" />;
        case "13d":
        case "13n":
            return <Snow className="text-[120px] text-white md:text-[150px]" />;
        case "50d":
        case "50n":
            return <Fog className="text-[120px] text-gray-500 md:text-[150px]" />;
        default:
            // If the icon code doesn't match any known weather condition, return a default "null" icon
            return <NullUndefinedIcon className="text-[120px] text-gray-400 md:text-[150px]" />;
    }
};

const Weather = ({ weatherData, error }: WeatherProps) => {
    // Today's Date
    const today = new Date();

    return (
        <div className="container mx-auto max-w-[400px] rounded-xl border border-white/20 bg-white/10 p-6 shadow-lg backdrop-blur-md md:p-5 flex flex-col gap-2.5">
            {/* The optional chaining operator ?. is used here to access properties of weatherData. 
            It checks if the variable weatherData (or its nested properties) is not null / undefined before attempting to access its name property for example.*/}

            {/* City and Date */}
            <div className="mb-4.5 flex flex-col items-center gap-1 text-amber-50 font-cal-sans">
                <h2 className="text-2xl md:text-3xl">{error ? 'Insert a valid city!' : weatherData?.name}</h2>
                <p className="text-[1rem] md:text-[1.2rem] font-lexend">
                    {today.toLocaleDateString()}
                </p>
            </div>

            {/* Weather Icon & Temperature */}
            <figure className="flex items-center justify-center gap-15 rounded-xl border border-white/20 p-2.5 md:p-3">
                {weatherData?.weather[0]?.icon ? (
                    getWeatherIcon(weatherData.weather[0].icon)
                ) : (
                    <NullUndefinedIcon className="text-[120px] text-amber-300 md:text-[150px]" />
                )}

                <div className="flex flex-col items-center justify-center gap-1 text-6xl text-amber-50 font-lexend md:text-7xl">
                    <span>{weatherData?.main.temp.toFixed()}</span>
                    <Temp className="text-7xl text-amber-300" />
                </div>
            </figure>

            {/* Additional Info */}
            <ul className="mt-2.5 grid grid-cols-2 items-center gap-3 md:gap-4">
                {/*====== WIND BOX ====== */}
                <li>
                    <p className="mb-2.5 flex flex-col text-center text-3xl md:text-4xl">
                        {weatherData?.wind.speed.toFixed(1)} <span className="text-[15px] md:text-[18px]">km/h</span>
                    </p>
                    <span className="flex items-center justify-between gap-1.5 text-[1rem] font-lexend">
                        Wind <Wind className="text-3xl" />
                    </span>
                </li>

                {/*====== HUMIDITY BOX ====== */}
                <li>
                    <p className="mb-2.5 flex flex-col text-center text-3xl md:text-4xl">
                        {weatherData?.main.humidity} <span className="text-[15px] md:text-[18px]">%</span>
                    </p>
                    <span className="flex items-center justify-between gap-1.5 text-[1rem] font-lexend">
                        Humidity <Humidity className="text-3xl" />
                    </span>
                </li>

                {/*====== PRESSURE BOX ====== */}
                <li>
                    <p className="mb-2.5 flex flex-col text-center text-3xl md:text-4xl">
                        {weatherData?.main.pressure} <span className="text-[15px] md:text-[18px]">hPa</span>
                    </p>
                    <span className="flex items-center justify-between gap-1.5 text-[1rem] font-lexend">
                        Pressure <Barometer className="text-3xl" />
                    </span>
                </li>

                {/*====== VISIBILITY BOX ====== */}
                <li>
                    <p className="mb-2.5 flex flex-col text-center text-3xl md:text-4xl">
                        {(weatherData?.visibility! / 1000).toFixed(1)} <span className="text-[15px] md:text-[18px]">km</span>
                    </p>
                    <span className="flex items-center justify-between gap-1.5 text-[1rem] font-lexend">
                        Visibility <Fog className="text-3xl" />
                    </span>
                </li>
            </ul>
        </div>
    );
};

export default Weather;