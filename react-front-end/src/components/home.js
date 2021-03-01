import React, { useEffect, useState } from "react";
import { CSSTransition } from "react-transition-group";

import Paper from '@material-ui/core/Paper';
import Tilt from 'react-tilt';
//Buttons
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import {
  Link
} from "react-router-dom";

import './home.css'

export default function Home(props) {

  const stories = [props.news.feed[0], props.news.feed[1], props.news.feed[2]];
  console.log(stories)

  const views = [];

  const [counter, setCounter] = useState(0);
  
  stories.map((story, index) => {
    views.push(
      <a style={{textDecoration: 'none', color: "white"}} href={`${story.data.now[0].links.web.href}`} target="_blank">
        <div style={ (index === counter) ? {height: '90%', width: '550px', paddingTop: '40px', paddingBottom: '40px', zIndex: 1} : { opacity: 1,  height: '70%', width: '400px'} }>
        <Tilt className="Tilt" options={{ max : 25 }} style={{ height: '100%', width: '100%' }} >
            <Paper  style={{backgroundImage: `url(${story.data.now[0].images[0].url})`, height: '400', backgroundSize: '100% 100%', backgroundRepeat: 'no-repeat'}}>
              <div style={{height: '400px', color: 'white', display: 'flex', flexDirection: 'row', alignItems: 'flex-end'}}>
                <p style={{backgroundColor: `rgba(108, 122, 137, 0.7)`, fontWeight: 'bold', padding: '10px 10px', display: 'flex', alignContent: 'center'}}>{(story.data.now[0].description) ? (story.data.now[0].description) : (story.data.now[0].headline)}</p>
              </div>
            </Paper>
        </Tilt>
        </div>
      </a>
      )
  });

  const view = views[counter];
  const prevView = views[counter === 0 ? (views.length - 1) : (counter - 1)];
  const nextView = views[counter === 2 ? 0 : (counter + 1)];

  console.log(views)

  useEffect(() => {
    const interval = window.setInterval(() => {
      if(counter === 2){
        setCounter(0)
      } else {
        setCounter(counter + 1)
      };
    }, 2500);
    return () => clearInterval(interval);

  });
  
  return (
    <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', paddingTop: '20px', paddingBottom: '20px'}}>

      <div style={{display: 'flex', position: 'relative', justifyContent: 'center', alignItems: 'center', flexDirection: 'row', transformStyle: 'preserve-3d'}}>

      <Link to='/players' style={{textDecoration: 'none'}}>
        <Tilt button key={'Players'} className="Tilt" options={{ max : 20, perspective: 2000, scale: 1.02 }} style={{ height: '100%', width: '100%', textDecoration: 'none'}} >
          <Paper  style={{backgroundColor: 'blue', width: '200px', height: '200px', margin: '1px 30px', borderRadius: '160px', zIndex: 1, border: 'solid black 3px'}}>
              <div style={{height: '100%', color: 'white', display: 'flex', flexDirection: 'column'}}>
                <p style={{position: "relative", left: "6%", top: "35%", textEmphasis: 'bold', fontSize: '15px', textShadow:
  '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'}}>Player Stats</p>
                <img src={"/images/curry.png"} style={{height: '320px', width: '250px', position: 'relative', transition: '0.5s', zIndex: 11, transformStyle: 'preserve-3d', transform: 'translate3d(2%,-30%,0px)'}} />
              </div>
          </Paper>
        </Tilt>
      </Link>

      <Link to='/standings' style={{textDecoration: 'none'}}>
        <Tilt button key={'Standings'} className="Tilt" options={{ max : 20, perspective: 2000, scale: 1.02 }} style={{ height: '100%', width: '100%' }} >
          <Paper  style={{backgroundColor: 'gold', width: '200px', height: '200px', margin: '1px 30px', borderRadius: '160px', zIndex: 1, border: 'solid black 3px'}}>
              <div style={{height: '100%', color: 'purple', display: 'flex', flexDirection: 'column'}}>
                <p style={{position: "relative", left: "60%", top: "55%", textEmphasis: 'bold', fontSize: '14px', textShadow:
  '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'}}>Standings</p>
                <img src={"/images/lebron.png"} style={{height: '290px', width: '140px', position: 'relative', transition: '0.5s', zIndex: 11, transformStyle: 'preserve-3d', transform: 'translate3d(20%,-30%,0px)'}} />
              </div>
          </Paper>
        </Tilt>
      </Link>

      <Link to='/leaders' style={{textDecoration: 'none'}}>
        <Tilt button key={'Leaders'} className="Tilt" options={{ max : 20, perspective: 2000, scale: 1.02 }} style={{ height: '100%', width: '100%' }} >
          <Paper  style={{backgroundColor: 'red', width: '200px', height: '200px', margin: '15px 30px', borderRadius: '160px', zIndex: 1, border: 'solid black 3px'}}>
              <div style={{height: '100%', color: 'black', display: 'flex', flexDirection: 'column'}}>
                <p style={{position: "relative", left: "7%", top: "25%", textShadow:
  '-1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000'}}>League Leaders</p>
                <img src={"/images/jimmy.png"} style={{height: '320px', width: '250px', position: 'relative', transition: '0.5s', zIndex: 11, transformStyle: 'preserve-3d', transform: 'translate3d(0%,-25%,0px)'}} />
              </div>
          </Paper>
        </Tilt>
      </Link>
      </div>

      <div style={{display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'center', backgroundColor: 'white', marginTop: 17}}>
        <CSSTransition in={counter} appear timeout={2500} classNames="fade">
          <div  style={{opacity: 0.7}}>{prevView}</div>
        </CSSTransition>
        <ChevronLeftIcon onClick={() => setCounter(counter === 0 ? (views.length - 1) : (counter - 1))} style={{fontSize: '50px', marginRight: '40px', marginLeft: '20px', backgroundColor: '#242428', color: 'white', borderRadius: '90px', zIndex: 1, cursor: 'pointer'}}></ChevronLeftIcon>
        <CSSTransition in={counter} appear timeout={2500} classNames="fade">
          <div>{view}</div>
        </CSSTransition>
        <ChevronRightIcon onClick={() => setCounter((counter + 1) % views.length)} style={{fontSize: '50px', marginLeft: '40px', marginRight: '20px', backgroundColor: '#242428', color: 'white', borderRadius: '90px', zIndex: 1, cursor: 'pointer'}}></ChevronRightIcon>
        <CSSTransition in={counter} appear timeout={2500} classNames="fade">
          <div style={{opacity: 0.7}}>{nextView}</div>
        </CSSTransition>
      </div>

      <footer>
        <p style={{color: 'black', textShadow: 'none'}}>@ 2020 NBA Dashboard</p>
      </footer>

    </div>
  );
}