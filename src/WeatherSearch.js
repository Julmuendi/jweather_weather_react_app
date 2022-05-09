import { useState } from "react";
import "./WeatherSearch.css"
import axios from 'axios'
import { RotatingSquare } from "react-loader-spinner";
import WeatherInfor from "./WeatherInfor";
import Forecast from "./Forecast";


export default function WeatherSearch(){
    const[city, setCity]=useState("")
    const[ready,setReady]=useState(false)
    const[weather,setWeather]=useState({})




function displayWeather(response){
    
    setWeather(
        {
            ready:true,
            cordinates:response.data.coord,
            date:new Date(response.data.dt*1000),
            temperature:response.data.main.temp,
            description: response.data.weather[0].description,
            name: response.data.name,
            humidity:response.data.main.humidity,
            wind:response.data.wind.speed,
            feelsLike:response.data.main.feels_like,
            iconurl:`http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
        
        }
    )
    setReady(true)
}

function Search(city){
    const key="ce735fca9b371504301605240e8fbfe8";
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric`;

    axios.get(url).then(displayWeather)
}
    
function handleSubmit(event){
    event.preventDefault()
    Search(city)


}
function updateCity(e){
    setCity(e.target.value)
    
}

if(ready){
    return(
        <div className="weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                    <div className="col-9">
                        <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on" onChange={updateCity} />
                    </div>
                    <div className="col-3">
                        <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                </div>
            </form>
            <WeatherInfor weather={weather}/>
            <Forecast cordinates={weather.cordinates} />

        </div>
    )
}else{

    Search("Amsterdam")
return <RotatingSquare
ariaLabel="rotating-square"
visible={true}
color="blue"
strokeWidth="10"
/>

}

      

    
 
}