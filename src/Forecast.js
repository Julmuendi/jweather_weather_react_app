import { useState} from "react"
import "./Forecast.css"
import { WiDayShowers } from "weather-icons-react"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faAngleDown} from '@fortawesome/free-solid-svg-icons'
import {faAngleUp} from '@fortawesome/free-solid-svg-icons'
import axios from "axios"
import { icon } from "@fortawesome/fontawesome-svg-core"



export default function Forecast({cordinates}){
   
    const[forecast,setForecast]=useState(null)
    const[show, setShow]=useState(false)
    const[change, setChange]=useState(false)
    
  
  
   
    
     const lon=cordinates.lon;
     const lat=cordinates.lat;
     const key="c60133e3aeccaa15628c36b5ff675130";
     const url=`https://api.openweathermap.org/data/2.5/onecall?lat=${lat}&lon=${lon}&appid=${key}&units=metric`;
     
     axios.get(url).then(showForecast)

   
 
    function showForecast(response){
        console.log(response.data)
        setForecast(response.data)   
    }


 
        return(
            <>
            <div className="WeatherForecast">
            <div typeof="button" onClick={()=>setShow(!show)} className="weatherhighlights">
                <div>Day</div>
                <div><span className="maxtempforecast">21°</span>/<span className="mintempforecast">18°</span></div>
                <div><WiDayShowers /></div>
                <FontAwesomeIcon onClick={()=>setChange(!change)} icon={change? faAngleDown: faAngleUp} className="arrow" />
            </div>
            <div className={show? "moreForecast" : "active"}>
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



