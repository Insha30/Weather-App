import { useContext, createContext, useState, useEffect } from "react";
import axios from 'axios'

const StateContext = createContext()

export const StateContextProvider = ({ children }) => {
    const [weather, setWeather] = useState({})
    const [values, setValues] = useState([])
    const [place, setPlace] = useState('Kanpur')
    const [thisLocation, setLocation] = useState('')

    // fetch api
    const fetchWeather = async () => {
        const options = {
            method: 'GET',
            url: 'https://world-weather-online-api1.p.rapidapi.com/weather.ashx',
            params: {
                q: place,
                num_of_days: '3',
                tp: '1',
                lang: 'en',
                aqi: 'yes',
                alerts: 'no',
                format: 'json'
            },

            headers: {
                'X-RapidAPI-Key': import.meta.env.VITE_API_KEY,
                'X-RapidAPI-Host': 'world-weather-online-api1.p.rapidapi.com'
            }
        };

        try {
            const response = await axios.request(options);
            const data = response.data.data;

            if (!data || !data.current_condition || !data.weather) {
                throw new Error("Invalid data received");
            }

            const currentCondition = data.current_condition[0];

            setLocation(data.request[0].query);
            
            setWeather({
                temp: currentCondition.temp_C,
                wspd: currentCondition.windspeedKmph,
                humidity: currentCondition.humidity,
                heatindex: currentCondition.FeelsLikeC,
                conditions: currentCondition.weatherDesc[0].value,
            });

            setValues(
                data.weather[0].hourly.map((hour) => ({
                    datetime: hour.time,
                    temp: hour.tempC,
                    conditions: hour.weatherDesc[0].value,
                }))
            );
        } catch (e) {
            console.error(e);
            alert("Failed to fetch weather data");
        }
    };

    useEffect(() => {
        fetchWeather();
    }, [place]);

    return (
        <StateContext.Provider value={{
            weather,
            setPlace,
            values,
            thisLocation,
            place
        }}>
            {children}
        </StateContext.Provider>
    )
}

export const useStateContext = () => useContext(StateContext);