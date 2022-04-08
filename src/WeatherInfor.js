import React from "react";
import FormattedDate from "./FormattedDate";


export default function WeatherInfor({weather}){
    return(
        <div className="WeatherInfor">
            <h1>{weather.name}</h1>
            <ul>
                <li>
                    <FormattedDate date={weather.date} />
                </li>
                <li className="text-capitalize">{weather.description}</li>
            </ul>
            <div className="row mt-3">
                <div className="col-6">
                    <div className="clearfix">
                        <img
                        src={weather.iconurl}
                        alt={weather.description}
                        className="float-left spinning"
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
}