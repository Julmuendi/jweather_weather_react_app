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
    <div><span className="maxtempforecast">21°</span>/<span className="mintempforecast">18°</span></div>
            <div><WiDayShowers /></div>
            <div className="arrow"><FontAwesomeIcon icon={faAngleDown} /></div>
        </div>
    </div>
    )
}else{