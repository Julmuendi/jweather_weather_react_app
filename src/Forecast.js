import { useState} from "react"
import "./Forecast.css"
import { WiDayShowers } from "weather-icons-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {faAngleUp} from '@fortawesome/free-solid-svg-icons'



export default function Forecast(){
    const[show, setShow]=useState(true)

    function showMore(event){
        event.preventDefault()
        setShow(false)
    }
    function showLess(event){
        event.preventDefault()
        setShow(true)
    }
    if(show){
        return(
            <div className="WeatherForecast">
                <div className="weatherhighlights" typeof="button" onClick={showMore}>
                    <div>Day</div>
                    <div>21°/18°</div>
                    <div><WiDayShowers /></div>
                    <div className="arrow"><FontAwesomeIcon icon={faAngleDown} /></div>
                </div>
            </div>
                
        )
    }else{
        return(
        <>
        <div className="WeatherForecast">
        <div className="weatherhighlights" typeof="button" onClick={showLess}>
            <div>Day</div>
            <div>21°/18°</div>
            <div><WiDayShowers /></div>
            <div className="arrow"><FontAwesomeIcon icon={faAngleUp} /></div>
        </div>
        <div className="moreForecast">
            <div className="row">
                <div className="col-sm-6 forecastContent">
                    <div>Day</div>
                    <div><WiDayShowers /></div>
                    <div>Temp</div>
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


}