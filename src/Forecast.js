
import "./Forecast.css"
import { WiDayShowers } from "weather-icons-react"
import { WiDayCloudyGusts } from "weather-icons-react"
import { WiFog } from "weather-icons-react"
import ReactAnimatedWeather from 'react-animated-weather'

export default function Forecast(){
    return(
        <div className="WeatherForecast">
            <div className="container">
            <div className="row">
                <div className="col-sm-2">
                    <h6>Mon</h6>
                    <ReactAnimatedWeather icon="CLEAR_DAY" color="goldenrod" size={30} />
                    <p>Temperature:26°C</p>
                    <p>Feels like: 28°C</p>
                    <p>Wind 13 km/hr</p>

                </div>
                <div className="col-sm-2">
                    <h6>Tue</h6>
                    <ReactAnimatedWeather icon="WIND" color="goldenrod" size={30} />
                    <p>Temperature:26°C</p>
                    <p>Feels like: 28°C</p>
                    <p>Wind 13 km/hr</p>

                </div>
                <div className="col-sm-2">
                    <h6>Wed</h6>
                    <ReactAnimatedWeather icon="PARTLY_CLOUDY_DAY" color="red" size={30} />
                    <p>Temperature:26°C</p>
                    <p>Feels like: 28°C</p>
                    <p>Wind 13 km/hr</p>

                </div>
                <div className="col-sm-2">
                    <h6>Thur</h6>
                    <WiFog size={30} name="owm" iconId="200" flip="horizontal"/>
                    <p>Temperature:26°C</p>
                    <p>Feels like: 28°C</p>
                    <p>Wind 13 km/hr</p>

                </div>
                <div className="col-sm-2">
                    <h6>Fri</h6>
                    <WiDayShowers size={30} color='#000' />
                    <p>Temperature:26°C</p>
                    <p>Feels like: 28°C</p>
                    <p>Wind 13 km/hr</p>

                </div>
                <div className="col-sm-2">
                    <h6>Sat</h6>
                    <WiDayCloudyGusts size={30} color='#000' />
                    <p>Temperature:26°C</p>
                    <p>Feels like: 28°C</p>
                    <p>Wind 13 km/hr</p>

                </div>
            </div>
            </div>
        </div>
    )
}