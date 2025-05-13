import React, { useEffect, useState } from 'react';
import sun from '../assets/icons/sun.png';
import cloud from '../assets/icons/cloud.png';
import fog from '../assets/icons/fog.png';
import rain from '../assets/icons/rain.png';
import snow from '../assets/icons/snow.png';
import storm from '../assets/icons/storm.png';
import wind from '../assets/icons/windy.png';

const MiniCard = ({ time, temp, iconString }) => {
  const [icon, setIcon] = useState();

  useEffect(() => {
    if (iconString) {
      const lower = iconString.toLowerCase();
      if (lower.includes('cloud')) setIcon(cloud);
      else if (lower.includes('rain')) setIcon(rain);
      else if (lower.includes('clear')) setIcon(sun);
      else if (lower.includes('thunder')) setIcon(storm);
      else if (lower.includes('fog')) setIcon(fog);
      else if (lower.includes('snow')) setIcon(snow);
      else if (lower.includes('wind')) setIcon(wind);
    }
  }, [iconString]);

  const formatTime = (t) => {
    const padded = t.toString().padStart(4, '0');
    const hours = parseInt(padded.slice(0, 2), 10);
    const minutes = parseInt(padded.slice(2), 10);
    const date = new Date();
    date.setHours(hours);
    date.setMinutes(minutes);
    return date.toLocaleTimeString('en', { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <div className="w-[10rem] h-[10rem] p-4 flex flex-col 
      transition-transform duration-300 hover:scale-105 hover:shadow-xl 
      bg-gradient-to-br from-blue-400 to-teal-500 
      hover:shadow-blue-300/50 rounded-lg">

      <p className='text-center'>
        {formatTime(time)}
      </p>
      <hr />
      <div className='w-full flex justify-center items-center flex-1'>
        <img
          src={icon}
          alt="forecast not available"
          className="w-[4rem] h-[4rem] transition-transform duration-300 hover:scale-110 animate-pulse"
        />
      </div>
      <p className='text-center font-bold'>{temp}&deg;C</p>
    </div>
  );
};

export default MiniCard;
