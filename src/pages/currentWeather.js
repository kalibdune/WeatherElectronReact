import React from 'react'


function CurrentWeather(props){

    function addZero(str){
        if(str.length === 1){
            return '0' + str
        } else{
            return str
        }
    }
    const timeUNIX = new Date(props.data.current.dt * 1000)
    const timeMinutes = timeUNIX.getMinutes().toString()
    const timeHour = timeUNIX.getHours().toString()
    const timeNow = addZero(timeHour) + ':' + addZero(timeMinutes)

    const sunriseUNIX = new Date(props.data.current.sunrise * 1000)
    const sunriseMinutes = sunriseUNIX.getMinutes().toString()
    const sunriseHour = sunriseUNIX.getHours().toString()
    const sunriseTime = addZero(sunriseHour) + ':' + addZero(sunriseMinutes)

    const sunsetUNIX = new Date(props.data.current.sunset * 1000)
    const sunsetMinutes = sunsetUNIX.getMinutes().toString()
    const sunsetHour = sunsetUNIX.getHours().toString()
    const sunsetTime = addZero(sunsetHour) + ':' + addZero(sunsetMinutes)
    return(
        <div className='currentBlock'>
            <div className='currentMain'>
                <h1>{props.name} <br/> {timeNow}</h1>
                <p>Общее: {props.data.current.weather[0].description}</p>
                <p>Температура: {props.data.current.temp}</p>
                <p>Температура по ощущениям: {props.data.current.feels_like}</p>
            </div>
            <div className='currentOthers'>
                <p>Облачность: {props.data.current.clouds}%</p>
                <p>Влажность: {props.data.current.humidity}%</p>
                <p>Атмосферное давление на уровне моря: {props.data.current.dew_point} гПа</p>
                <p>Скорость ветра: {props.data.current.wind_speed} м/с</p>
                <p>Время восхода солнца: {sunriseTime}</p>
                <p>Время заката солнца: {sunsetTime}</p>
            </div>
        </div>
    )
}

export default CurrentWeather