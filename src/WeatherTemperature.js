import React, {useState} from "react";

export default function WeatherTemperature({temperature}){
    const[unit, setUnit]=useState("celsius");

    function showFahrenheit(event){
        event.preventDefault();
        setUnit("Fahrenheit")
    }
    function showCelsius(event){
        event.preventDefault()
        setUnit("celsius")
    }
    function fahrenheit(){
        return (temperature*9/5)+32;
    }




    if(unit==="celsius"){
    return(
        <>
        <span className="temperature">{Math.round(temperature)}</span>
        <span className="unit">°C{" "}|{" "}<a href="/" onClick={showFahrenheit}>F</a></span>
        </>
    )
    }else{
        return(
            <>
            <span className="temperature">{Math.round(fahrenheit())}</span>
            <span className="unit"><a href="/"onClick={showCelsius}>°C</a>{" "}|{" "}F</span>

            </> 
        )
    }
}