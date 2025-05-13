import { useEffect, useState } from "react";

export const useDate = () => {

    const locale = 'en';

    const [today , setDate] = useState(new Date())

    useEffect(() => {
      const updateTime = () => setDate(new Date());
      const timer = setInterval(updateTime, 1000); // Update every second
    
      return () => clearInterval(timer);
    }, []);

    const day = today.toLocaleDateString( locale , {weekday: 'long'});

    const date = `${day}, ${today.getDate()} , ${today.toLocaleDateString(locale,{month : 'long'})}`;

    const time = today.toLocaleTimeString(locale , {hour : 'numeric', hour12 : true , minute: 'numeric'});

    return {
        date ,time
    }
}