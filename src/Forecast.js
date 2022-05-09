import { useState, useEffect} from "react"
import "./Forecast.css"
import WeatherForecastDay from "./WeatherForecastDay"

import axios from "axios"





export default function Forecast(props){
   
    const[forecast, setForecast]=useState(null)
    const[loaded, setLoaded]=useState(false)

    
  
  useEffect(()=>{
      setLoaded(false);
  },[props.cordinates]);
   

 
    function showForecast(response){
        setForecast(response.data.daily)
        setLoaded(true)
         
          
    }


 if(loaded){
   
        return(
        <div className="WeatherForecast">
            {forecast.map((dailyForecast,index)=>{
                return(
                    <WeatherForecastDay key={index} data={dailyForecast}  />
                )
            })}
        </div>
        )
    } else{
            
     const lon=props.cordinates.lon;
     const lat=props.cordinates.lat;
     const key="ce735fca9b371504301605240e8fbfe8";
     const url=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    
     axios.get(url).then(showForecast)

    return null;
    }


}
