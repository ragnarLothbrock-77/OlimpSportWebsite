import React from 'react'
import PreviewMain from '../../components/PreviewPagesBlock/PreviewMain'
import AboutBanner from './About/AboutBanner/AboutBanner'
import AboutDescription from './About/AboutDescription/AboutDescription'
import AboutPagesLinks from './About/AboutPagesLinks/AboutPagesLinks'
import AboutUnification from './About/AboutUnification/AboutUnification'
import img from '../../assets/images/OLIMP-1.jpg'

function About() {
  return (
    <section className="about">
      <div className="about__body">
        <PreviewMain 
          title="СПОРТИВНЫЙ КОМПЛЕКС ОЛИМП" 
          subtitle="Центр активной и спортивной жизни в Краснопахорском. Более 10 лет воспитывает молодых спортсменов не только с Красной Пахры но и со всего ТиНАО."
          decorImage={img}
          />
        <AboutDescription /> 
        <AboutBanner />
        <AboutUnification />
        <AboutPagesLinks />
      </div>
    </section>
  )
}

export default About
