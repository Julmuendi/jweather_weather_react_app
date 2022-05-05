import React from 'react'

export default function ForecastIcon(props){
    return(
        <img src={`https://openweathermap.org/img/wn/${props.code}@2x.png`} alt='icon' className='weather-icon spinning'></img>
    )
}