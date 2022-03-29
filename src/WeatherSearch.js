import axios from "axios";
import { useState } from "react"

export default function WeatherSearch(){
    const[city,setCity]=useState('')
    const[weather,setWeather]=useState("")
    const[loaded, setLoaded]=useState(false)
function showWeather(response){
 
    console.log(response.data)
    setLoaded(true)
    setWeather({
        temperature:response.data.main.temp,
        humidity:response.data.main.humidity,
    })

}

    function onSubmit(e){
        e.preventDefault()

        let key="095a687812370a6969462f7d5666c2f5";
        let url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;
        axios.get(url).then(showWeather)
    }
    const form=
    <form onSubmit={onSubmit}>
            
    <input type='text' placeholder='Enter a city'onChange={(e)=>setCity(e.target.value)}/>
    <button type="submit" style={{backgroundColor: "blue", color:"white", marginLeft:"2px", borderRadius:"5px", padding:"3px 10px"}}>Search</button>
    </form>
    if(loaded){
    return(
    <div className="weather">
        {form}
        <ul>
            <li>Temperature:{Math.round(weather.temperature)}°C</li>
            <li>Humidity:{weather.humidity}</li>
        </ul>
        </div>
    )
    }else{
        return {form}
    }
    
 
}