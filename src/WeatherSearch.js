import Forecast from "./Forecast"
import "./WeatherSearch.css"


export default function WeatherSearch(){
    


    return(
        <div className="container">
            <div className="WeatherSearch">      
        <form>
        <input type='text' placeholder="Enter a city"/>
        <button type="submit" style={{backgroundColor: "blue", color:"white", marginLeft:"2px", borderRadius:"5px", padding:"3px 10px"}}>Search</button>
        </form>
        <Forecast />
        </div>
        </div>
    )
    

      

    
 
}