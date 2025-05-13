import React, { useEffect, useState } from 'react'
import { useDate } from '../Utils/useDate'
import sun from '../assets/icons/sun.png'
import cloud from '../assets/icons/cloud.png'
import fog from '../assets/icons/fog.png'
import rain from '../assets/icons/rain.png'
import snow from '../assets/icons/snow.png'
import storm from '../assets/icons/storm.png'
import wind from '../assets/icons/windy.png'
import '../index.css'

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {

  const [icon, setIcon] = useState(sun)
  const { time } = useDate()

  useEffect(() => {
    if (iconString) {
      const str = iconString.toLowerCase()
      if (str.includes('cloud')) setIcon(cloud)
      else if (str.includes('rain')) setIcon(rain)
      else if (str.includes('clear')) setIcon(sun)
      else if (str.includes('thunder')) setIcon(storm)
      else if (str.includes('fog')) setIcon(fog)
      else if (str.includes('snow')) setIcon(snow)
      else if (str.includes('wind')) setIcon(wind)
    }
  }, [iconString])

  return (
    <div className="w-[22rem] min-w-[22rem] h-[32rem] p-6 
      shadow-xl rounded-2xl text-white 
      bg-gradient-to-br from-blue-500 to-purple-600 
      transition-all duration-300 hover:scale-105 
      hover:shadow-lg hover:shadow-purple-400/50">

      <div className='flex w-full justify-center items-center gap-4 mt-10 mb-6'>
        <img src={icon} alt="weather_icon"
          className="w-[6rem] h-[6rem] transition-transform duration-300 hover:scale-110 animate-pulse"
        />
        <p className='font-bold text-4xl text-white drop-shadow-lg glow-effect'>{temperature} &deg;C</p>
      </div>

      <div className='font-bold text-center text-xl mb-2 tracking-wide'>
        {place}
      </div>

      <div className='w-full flex justify-between items-center mt-2 mb-4 text-sm'>
        <p className='flex-1 text-center p-2 bg-white/10 rounded-md'>{new Date().toDateString()}</p>
        <p className='flex-1 text-center p-2 bg-white/10 rounded-md'>{time}</p>
      </div>

      <div className='w-full flex justify-between items-center gap-4 mb-6'>
        <p className='flex-1 text-center py-3 px-2 font-bold bg-blue-600 shadow-md rounded-lg'>
          Wind Speed - <span className='font-normal'>{windspeed} km/h</span>
        </p>
        <p className='flex-1 text-center py-3 px-2 font-bold bg-green-600 shadow-md rounded-lg'>
          Humidity - <span className='font-normal'>{humidity} gm/m&#179;</span>
        </p>
      </div>

      <div className='w-full p-3 mt-2 mb-4 flex justify-between items-center bg-white/10 rounded-md'>
        <p className='font-semibold text-lg'>Heat Index</p>
        <p className='text-lg'>{heatIndex ? heatIndex : 'N/A'}</p>
      </div>

      <hr className='bg-white/20 mb-4' />

      <div className='w-full px-3 py-2 flex justify-center items-center text-2xl font-semibold bg-white/10 rounded-md'>
        {conditions}
      </div>
    </div>
  )
}

export default WeatherCard;
