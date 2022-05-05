import React, { useState } from "react";
import { WiDayShowers } from "weather-icons-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {faAngleUp} from '@fortawesome/free-solid-svg-icons'
import ForecastIcon from "./ForecastIcon"
import SpinningIcon from "./SpinningIcon"


export default function WeatherForecastDay(props){
    const[show, setShow]=useState(false)
    
    
    function maxTemp(){
        let maxTemperature=Math.round(props.data.temp.max);
        return `Max temp: ${maxTemperature}°`
    }
    function minTemp(){
        let minTemperature=Math.round(props.data.temp.min);
        return `Minimum temp: ${minTemperature}°`
    }
    function feelsLikemorn(){
        let feelTemperature=Math.round(props.data.temp.morn);
        return `Morning temp: ${feelTemperature}°`
    }
    function feelsLikeevening(){
        let feelTemperature=Math.round(props.data.temp.eve);
        return `Evening temp: ${feelTemperature}°`
    }
    function feelsLikenight(){
        let feelTemperature=Math.round(props.data.temp.night);
        return `Night temp: ${feelTemperature}°`
    }
    function humidity(){
        let humidity=Math.round(props.data.humidity);
        return `Humidity: ${humidity}%`
    }
    function windSpeed(){
        let speed=Math.round(props.data.wind_speed);
        return `Wind: ${speed}km/hr`;
    }

    function uvIndex(){
        let index=Math.round(props.data.uvi);
        return `UV index: ${index}`
    }

    function sunrise(){
        let date=new Date(props.data.sunrise*1000);
        let hour=date.getHours();
        if(hour<10){
            hour=`0${hour}`
        }

        let minutes=date.getMinutes()
        if(minutes<10){
            minutes=`0${minutes}`
        }
        
        return `Sunrise: ${hour}:${minutes}HRS`
    }
    function formatDay(){
        let date=new Date(props.data.dt*1000);
        let day=date.getDay()
        let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat",];
        return days[day]
    }

    function formatdate(){
        let date=new Date(props.data.dt*1000);
        let day=date.getDay()
        let days=["Sun","Mon","Tue","Wed","Thu","Fri","Sat",];
        let theday=days[day];

        let month=date.getMonth()
        let months=["Jan","Feb","Mar","April","May","June","July","Aug","Sep","Oct","Nov","Dec"];
        let currentmonth=months[month];

        let currentdate=date.getDate()
        let currentyear=date.getFullYear()

        return `${currentmonth} ${currentdate}, ${currentyear}`

        


   
    }


    return(
        <>
        <div className="WeatherForecast">
        <div typeof="button" onClick={()=>setShow(!show)} className="weatherhighlights">
            <div>{formatDay()}</div>
            <div><span className="maxtempforecast">{maxTemp()}</span></div>
            <div><ForecastIcon code={props.data.weather[0].icon}/></div>
            <FontAwesomeIcon icon={show? faAngleDown: faAngleUp} className="arrow" />
        </div>
        <div className={show? "moreForecast" : "active"}>
            <div className="row">
                <div className="col-sm-6 forecastContent">
                    <div className="forecastDay">{formatdate()}</div>
                    <div><SpinningIcon code={props.data.weather[0].icon} /></div>
                </div>
                <div className="col-sm-6 secondaryForecast">
                    <div className="row">
                    <div className="col-6">
                    <div>{humidity()}</div>
                    <div>{windSpeed()}</div>
                    <div>{uvIndex()}</div>
                    <div>{sunrise()}</div>
                    </div>
                    <div className="col-6">
                    <div>{minTemp()}</div>
                    <div>{feelsLikemorn()}</div>
                    <div>{feelsLikeevening()}</div>
                    <div>{feelsLikenight()}</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
    
}