import { useState,useEffect } from 'react';
import { useStateContext } from '../Context';
import React from 'react';


//importing all the images 
import Clear from '../assets/images/clear2.jpg';
import Fog from '../assets/images/fog1.jpg';
import Cloudy from '../assets/images/cloudy1.jpg';
import Rainy from '../assets/images/rain2.jpg';
import Snow from '../assets/images/snow2.jpg';
import Stormy from '../assets/images/storm1.jpg';


const BackgroundLayout = () => {

  const {weather} = useStateContext();
  const [image , setImage] = useState(Clear); 


  useEffect( () => {
    if (weather.conditions) {
      let imageString = weather.conditions

      if (imageString.toLowerCase().includes('clear')) {
        setImage(Clear);
      }
      else if (imageString.toLowerCase().includes('cloud')|| imageString.toLowerCase().includes('thunder')){
        setImage(Cloudy);
      }
      else if (imageString.toLowerCase().includes('rain') || imageString.toLowerCase().includes('shower') || imageString.toLowerCase().includes('Overcast')) {
        setImage(Rainy);
      }
      else if (imageString.toLowerCase().includes('snow')) {
        setImage(Snow);
      }
      else if (imageString.toLowerCase().includes('fog')) {
        setImage(Fog);
      }
      else if (imageString.toLowerCase().includes('thunder') || imageString.toLowerCase().includes('Overcast')){
        setImage(Stormy);
      }
    }
  }, [weather]);

  return (
    <img 
    src={image} alt="weather_img" 
    className='h-screen w-full fixed left-0 top-0 -z-[10] object-cover'
    />
  )
}

export default BackgroundLayout;
