import { useState, useEffect} from "react"
import "./Forecast.css"
import WeatherForecastDay from "./WeatherForecastDay"

import axios from "axios"





export default function Forecast({cordinates}){
   
    const[forecast, setForecast]=useState(null)
    const[loaded, setLoaded]=useState(false)

    
  
  useEffect(()=>{
      setLoaded(false);
  },[cordinates]);
   

 
    function showForecast(response){
       
        setForecast(response.data.daily)
        setLoaded(true)
         
          
    }


 if(loaded){
   console.log(forecast)
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
            
     const lon=cordinates.lon;
     const lat=cordinates.lat;
     const key="5f472b7acba333cd8a035ea85a0d4d4c";
     const url=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
    console.log(url)
     axios.get(url).then(showForecast)

    return null;
    }


}
