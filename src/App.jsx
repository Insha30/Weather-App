import { useState } from "react";
import "./App.css";
import search from "./assets/icons/search.svg";
import { useStateContext } from "./Context";
import { BackgroundLayout, WeatherCard, MiniCard } from "./Components";
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
          className="bg-white w-[15rem] overflow-hidden shadow-2xl 
         rounded-full flex items-center p-2 gap-2 border border-gray-300 
        focus-within:border-blue-500 focus-within:ring-2 focus-within:ring-blue-300"
        >
          <img
            src={search}
            alt="search"
            className="w-[1.5rem] h-[1.5rem] opacity-70
          transition-transform duration-300 hover:rotate-12"
          />
          <input
            onKeyUp={(e) => {
              if (e.key === "Enter") {
                submitCity();
              }
            }}
            type="text"
            placeholder="Search city..."
            className="focus:outline-none w-full text-[#212121] text-lg bg-transparent placeholder-gray-500"
            value={input}
            onChange={(e) => setInput(e.target.value)}
          />
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
