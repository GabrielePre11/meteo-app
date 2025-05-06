import { useState } from "react";
import { SearchIcon, type SearchProps } from "../index";

const Search = ({ setCitySearch }: SearchProps) => {
    const [input, setInput] = useState<string>('');

    const handleInput = (): void => {
        // It sets the input value to setCitySearch after trimming any leading/trailing spaces.
        // CitySearch will be called in the API to get the weather data for the entered city.
        setCitySearch(input.trim());

        // Clear the input
        setInput('');
    }

    return (
        <div className="container mx-auto my-5 flex max-w-[400px] flex-col gap-2 md:flex-row">
            <input
                type="text"
                onChange={(e) => { setInput(e.target.value) }}
                onKeyDown={(e) => {
                    // If the user presses 'Enter' it calls the handleInput function
                    if (e.key === 'Enter') {
                        handleInput();
                    }
                }}
                value={input}
                placeholder="Search for a city"
                className="w-full rounded-xl border border-white/20 bg-white/10 px-3 py-2 text-amber-50 shadow-lg backdrop-blur-md outline-0"
            />

            <button
                onClick={handleInput}
                className="flex w-full items-center justify-center gap-1.5 rounded-xl border border-white/20 bg-white/10 py-2 text-[1rem] font-lexend text-amber-50 shadow-lg backdrop-blur-md md:w-max md:p-3 cursor-pointer hover:bg-white/20 transition-colors duration-300">
                <span className="md:hidden">Search</span>
                <SearchIcon />
            </button>
        </div>
    );
};

export default Search;