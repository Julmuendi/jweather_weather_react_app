import { useState } from "react";
import "./WeatherSearch.css"
import axios from 'axios'
import { RotatingSquare } from "react-loader-spinner";


export default function WeatherSearch(){
    const[city, setCity]=useState("")
    const[ready,setReady]=useState(false)
    const[weather,setWeather]=useState({})

function displayWeather(response){
    console.log(response.data)
    
    setWeather(
        {
            ready:true,
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
                    <div className="col-sm-9">
                        <input type="search" placeholder="Enter a city.." className="form-control" autoFocus="on" onChange={updateCity} />
                    </div>
                    <div className="col-sm-3">
                        <input type="submit" value="Search" className="btn btn-primary" />
                    </div>
                </div>
            </form>
            <h1>{weather.name}</h1>
            <ul>
                <li>Monday 07:00</li>
                <li className="text-capitalize">{weather.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <img
                        src={weather.iconurl}
                        alt={weather.description}
                        className="float-left"
                         />
                        <span className="temperature">{Math.round(weather.temperature)}</span>
                        <span className="unit">°C|F</span>
                    
                    </div>
                </div>

                <div className="col-6">
                    <ul>
                        <li>Feels like:{Math.round(weather.feelsLike)}°C</li>
                        <li>Humidity:{Math.round(weather.humidity)}%</li>
                        <li>Wind: {Math.round(weather.wind)} km/hr</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}else{

    Search("Cape Town")
return <RotatingSquare
ariaLabel="rotating-square"
visible={true}
color="blue"
strokeWidth="10"
/>

}

      

    
 
}