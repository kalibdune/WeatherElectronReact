import React, { useState } from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import Home from './pages/home'
import Weather from './pages/weather'

function App() {

  const [dataCity, setDataCity] = useState({lat: 0, lon: 0})

  function changeDataCity(object){
    if(!object){
      console.log('none')
    } else{
      setDataCity(object)
    }
  }

  return (
    <Router>
      <div>
        <Switch>
          <Route exact path='/'>
            <Home changeDataCity={changeDataCity} />
          </Route>
          <Route path='/weather'>
            <Weather lat={dataCity.lat} lon={dataCity.lon} name={dataCity.name} />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App