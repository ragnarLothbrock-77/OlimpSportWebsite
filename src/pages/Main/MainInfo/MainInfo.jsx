import React, {useState, useEffect} from 'react'
import { mainInfoConfig } from '../../../configurations/Main/mainInfoConfig'
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
            <span className="info-preview__subtitle_text text-medium">МБУ СК Олимп один из крупнейших спортивных комплексов Новой Москвы – это современная площадка для занятий спортом, проведения крупных спортивных мероприятий, соревнований в различных видах спорта. Своей целью мы ставим развитие физических и моральных качеств детей, популяризацию здорового образа жизни и развитие массового спорта в стране. Большой выбор спортивных секций от шахмат до BMX, для детей и взрослых любого возраста. В нашем распоряжении грамотные программы развития в каждом спортивном направлении и профессиональный тренерский штаб.</span>
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
