import React, { useState } from "react";
import { WiDayShowers } from "weather-icons-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {faAngleUp} from '@fortawesome/free-solid-svg-icons'

export default function WeatherForecastDay(props){
    const[show, setShow]=useState(false)
    const[change, setChange]=useState(false)


    return(
        <>
        <div className="WeatherForecast">
        <div typeof="button" onClick={()=>setShow(!show)} className="weatherhighlights">
            <div>Day</div>
            <div><span className="maxtempforecast">{Math.round(props.data.temp.max)}</span>/<span className="mintempforecast">{Math.round(props.data.temp.min)}</span></div>
            <div><WiDayShowers /></div>
            <FontAwesomeIcon onClick={()=>setChange(!change)} icon={change? faAngleDown: faAngleUp} className="arrow" />
        </div>
        <div className={show? "moreForecast" : "active"}>
            <div className="row">
                <div className="col-sm-6 forecastContent">
                    <div>Day</div>
                    <div><WiDayShowers /></div>
                    <div>{Math.round(props.data.temp.max)}</div>
                    <div>Feels Like</div>
                </div>
                <div className="col-sm-6 secondaryForecast">
                    <div className="row">
                    <div className="col-6">
                    <div>Humidity</div>
                    <div>Wind</div>
                    <div>UV index</div>
                    <div>Sunrise</div>
                    </div>
                    <div className="col-6">
                    <div>Min Temp</div>
                    <div>Wind direction</div>
                    <div>Pressure</div>
                    <div>Sunset</div>
                    </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </>
    )
    
}