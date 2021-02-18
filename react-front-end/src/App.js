import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './components/navbar'
import Search from './components/search'
import Leaders from './components/leaders'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import ShotChart from './components/ShotChart'
import Player from './components/player'
import Standings from './components/standings'
import Players from './components/players'


export default function App(props) {

  const [loading, setLoading] = useState(true)

  const [state, setState] = useState({
    lebron_shots: [],
    curry_shots: [],
    lebron_stats: [],
    curry_stats: [],
    leaders: [],
    players: []
  })

  useEffect(() => {
    const url0 = axios.get('/api/shots?name=lebron')
    const url1 = axios.get('/api/shots?name=curry')
    const url2 = axios.get('/api/stats?name=lebron')
    const url3 = axios.get('/api/stats?name=curry')
    const url4 = axios.get('/api/leaders')
  
    Promise.all([
      Promise.resolve(url0),
      Promise.resolve(url1),
      Promise.resolve(url2),
      Promise.resolve(url3),
      Promise.resolve(url4),
    ])
    .then((all) => {
      setState(prev => ({
        ...prev,
        lebron_shots: all[0].data,
        curry_shots: all[1].data,
        lebron_stats: all[2].data,
        curry_stats: all[3].data,
        leaders: all[4].data
      }))
      setLoading(false)
    })
  }, [])

  let curry_shots_object = state.curry_shots.shots;
  let curry_shots_array = [];

  for (let s in curry_shots_object) {
    curry_shots_array.push(curry_shots_object[s])
  }
  
  if (loading){
    return (null)
  }
  return (
    <Router>
      <div>
        <div className="App">
          <Navbar />
        </div>
        <Switch>
          <Route exact path="/">
            <Search/>
          </Route>
          <Route path="/leaders">
            <Leaders 
              leaders={state.leaders}
            />
          </Route>
          <Route path="/shotchart">
            <ShotChart />
          </Route>
          <Route path='/player/:id'>
            <Player />
          </Route>
          <Route path='/players'>
            <Players />
          </Route>
          <Route path='/standings'>
            <Standings
              standings={state.standings}
            />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

