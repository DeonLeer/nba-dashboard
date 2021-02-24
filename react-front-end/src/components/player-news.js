import React from 'react'


export default function PlayerNews(props) {

  console.log(props)

  return(
    <div className="player-stats" style={{display: 'flex', alignItems: 'center', flexDirection: 'column', paddingBottom: '2em'}}>
      <h1>Player News</h1>
      <h2 style={{display: 'flex', justifyContent: 'center'}}>{props.news[0].headline}</h2>
      <div>
        <a href={props.news[0].links.web.href} target="_blank"><img src={props.news[0].images[0].url} alt="image" style={{ width: '100%'}}/></a>
      </div>
      <article>{props.news[0].description}</article>
      <hr/>
      <h2 style={{display: 'flex', justifyContent: 'center'}}>{props.news[1].headline}</h2>
      <div>
        <a href={props.news[1].links.web.href} target="_blank"><img src={props.news[1].images[0].url} alt="image" style={{ width: '100%'}}/></a>
      </div>
      <article>{props.news[1].description}</article>
      <hr/>
      <h2 style={{display: 'flex', justifyContent: 'center'}}>{props.news[2].headline}</h2>
      <div>
        <a href={props.news[2].links.web.href} target="_blank"><img src={props.news[2].images[0].url} alt="image" style={{ width: '100%'}}/></a>
      </div>
      <article>{props.news[2].description}</article>
    </div>
  )
}