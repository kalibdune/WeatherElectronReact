import axios from 'axios'
import React, {useEffect, useState, lazy, Suspense} from 'react'
import {BrowserRouter, Link} from 'react-router-dom'
import backArrow from '../assets/back.svg'
import api_key from '../config'
import connectionError from '../assets/connection-error-color.png'

function Weather(props){

    const [data, setData] = useState()
    const [error, setError] = useState(null);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(()=>{
        axios.get(`https://api.openweathermap.org/data/2.5/onecall?lat=${props.lat}&lon=${props.lon}&exclude=hourly,minutely&appid=${api_key}&units=metric&lang=ru`)
        .then((result)=>{
            setData(result.data)
            setIsLoaded(true)
        },
        (error)=>{
            setIsLoaded(true)
            setError(error)
        }
        ).catch((err) => {
            setError(err)
            throw(err)
        })

    }, [props.lat, props.lon])

    if (error) {
        return(
            <div className='ErrorBlock'>
                <Nav />
                <img className='Error' src={connectionError} alt='error'/>
                <div>Iternal Server Error</div>
            </div>            
        )
    } else if (!isLoaded) {
        return <div className="loader">Loading...</div>
    } else {
        const CurrentWeather = lazy(() => import('./currentWeather.js'))
        return (
            <div className='weather'>
                <Nav />
                <div className='weatherDatas' >
                    <Suspense fallback={<></>}>
                        <CurrentWeather data={data} name={props.name} />
                    </Suspense>
                </div>
            </div>
        )
    }
}

function Nav(){
    return(
        <nav>
            <Link to='/'>
                <img src={backArrow} alt='nope' className='backArrow' />
            </Link>
        </nav>
    )
}



export default Weather