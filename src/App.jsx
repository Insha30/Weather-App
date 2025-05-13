import { useState } from "react";
import "./App.css";
import search from "./assets/icons/search.svg";
import { useStateContext } from "./Context";
import { BackgroundLayout, WeatherCard, MiniCard } from "./components";
import Logo from "./assets/icons/Logo.png";

function App() {
  const [input, setInput] = useState("");
  const { weather, thisLocation, values, place, setPlace } = useStateContext();

  const submitCity = () => {
    setPlace(input);
    setInput("");
  };

  return (
    <div className="w-full h-screen text-white px-8">
      <nav className="w-full p-3 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <img src={Logo} alt="Logo_icon" className="w-9 h-9 ml-2" />
          <h1 className="font-bold tracking-wide text-3xl">Weather App</h1>
        </div>

        <div
          className="relative w-[18rem] sm:w-[20rem] group transition-all duration-300"
        >
        <div
          className="absolute inset-0 rounded-full bg-gradient-to-r from-blue-400 to-purple-500 blur opacity-50 group-hover:opacity-80 animate-pulse"
        ></div>

        <div
          className="relative z-10 flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-lg border border-gray-300
                focus-within:ring-2 focus-within:ring-blue-400 transition-all duration-300"
        >
         <img
            src={search}
            alt="search"
            className="w-[1.5rem] h-[1.5rem] opacity-60 transition-transform duration-300 hover:rotate-12"
          />
        <input
          type="text"
          placeholder="Search city..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyUp={(e) => {
            if (e.key === "Enter") submitCity();
          }}
            className="bg-transparent w-full text-gray-800 text-lg focus:outline-none placeholder-gray-500"
        />
        </div>
    </div>

      </nav>

      <br />
      <BackgroundLayout></BackgroundLayout>
      <br />

      <main className="w-full flex flex-wrap gap-8 py-4 px-[10%] items-center justify-center">
        <WeatherCard
          place={thisLocation}
          windspeed={weather.wspd}
          humidity={weather.humidity}
          temperature={weather.temp}
          heatIndex={weather.heatindex}
          iconString={weather.conditions}
          conditions={weather.conditions}
        />

        <div className="flex justify-center gap-8 flex-wrap w-[60%]">
          {values?.slice(1, 7).map((curr) => {
            return (
              <MiniCard
                key={curr.datetime}
                time={curr.datetime}
                temp={curr.temp}
                iconString={curr.conditions}
              />
            );
          })}
        </div>
      </main>
    </div>
  );
}

export default App;
