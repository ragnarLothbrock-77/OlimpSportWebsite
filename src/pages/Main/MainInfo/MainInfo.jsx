import React, {useState, useEffect} from 'react'
import { mainInfoConfig } from '../../../configurations/mainInfoConfig'
import MainInfoListItem from './MainInfoListItem/MainInfoListItem'

function MainInfo() {
  const [defaultMargin, setDefaultMargin] = useState(false)
  const list = mainInfoConfig.map(item => {
    return (
      <MainInfoListItem key={item.id} id={item.id} text={item.text} indent={item.indent} defaultMargin={defaultMargin} />
    )
  })


  const handleDefaultMargin = () => {
    if(window.innerWidth >= 954) {
      setDefaultMargin(true)
    } else {
      setDefaultMargin(false)
    }
  }


  useEffect(() => {
    handleDefaultMargin()
    window.addEventListener('resize', handleDefaultMargin)
    return () =>  {
      window.removeEventListener('resize', handleDefaultMargin)
    }
  }, [])

  
  return (
    <section className="info">
      <div className="info__body _container">
        <div className="info-preview">
          <div className="info-preview__title">
            <span className="info-preview__title_text title-large">Преимущества</span>
          </div>
          <div className="info-preview__subtitle">
            <span className="info-preview__subtitle_text text-medium">На всех наших базах работают суперопытные инструкторы, чемпионы и мастера спорта, которые с радостью научат вас всему, что знают сами. Они заслужили наше доверие, и мы точно знаем, что благодаря их профессионализму и индивидуальному подходу каждый пришедший в Силу ветра сможет достичь желаемых высот в парусном спорте. Знакомьтесь: воины Силы ветра (чтобы узнать больше о каждом, нажмите на фотографию).</span>
          </div>
        </div>
        <div className="info__content content-paddings">
          <ul className="info-list">
           {list}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default MainInfo
