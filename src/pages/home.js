import React, { useState } from 'react'
import {BrowserRouter, Link} from 'react-router-dom'
import weatherLogo from '../assets/weatherLogo.png'

function Home(props) {

    const cities = [
        { 
            name: 'Москва',
            lat: 55.751244,
            lon: 37.618423
        }, 
        { 
            name: 'Санкт-Петербург', 
            lat: 59.942066,
            lon: 30.314906
        },
        {
            name: 'Калуга',
            lat: 54.5293,
            lon: 36.2754
        },
        {
            name: 'Челябинск',
            lat: 55.164538,
            lon: 61.437168
        },
        {
            name: 'Волгоград',
            lat: 48.708897,
            lon: 44.520530
        },
        {
            name: 'Тюмень',
            lat: 57.155591,
            lon: 65.531462
        },
        {
            name: 'Казань',
            lat: 55.787998,
            lon: 49.123235
        },
        {
            name: 'Воронеж',
            lat: 51.668497,
            lon: 39.191740
        }
    ]

    const [value, setValue] = useState(cities[0])

    return (
        <div className='home'>
            <img src={weatherLogo} alt='Logo' className='weatherLogo' />
            <div className='form'>
                <select onChange={(e) => setValue(cities[e.target.value])} autoFocus>
                    {cities.map((city, key) => <option key={key} value={key}>{city.name}</option>)}
                </select>
                <Link to='/weather' className='Link'>
                    <div className='buttonNext' onClick={() => props.changeDataCity(value)}>выбрать</div>
                </Link>
            </div>
        </div>
    )
}

export default Home