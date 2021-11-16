import React from 'react'
import Slider from '../../components/Slider/Slider'
import { mainEventsConfig } from '../../configurations/Main/mainEventsConfig'
import MainEvents from './MainEvents/MainEvents'
import MainInfo from './MainInfo/MainInfo'
import MainNews from './MainNews/MainNews'

function Main() {
  return (
    <section className="main">
      <div className="main__body">
        <div className="main__slider">
          <Slider />
        </div>
        <div className="main__info">
          <MainInfo />
        </div>
        <div className="main__events">
          <MainEvents dataConfig={mainEventsConfig}/>
        </div>
        <div className="main__news">
          <MainNews />
        </div>
      </div>
    </section>
  )
}

export default Main
