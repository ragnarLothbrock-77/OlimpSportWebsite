import React from 'react'
import PreviewPagesBlock from '../../PreviewPagesBlock/PreviewPagesBlock'
import AreasCards from './AreasCards/AreasCards'
import AreasMainInfo from './AreasMainInfo/AreasMainInfo'

function Area(props) {
  const list = props.areas.map(item => {
    return (
      <div className="areas-inner" key={item.id}>
        <div className="areas-inner__body _container">
        </div>
        <AreasMainInfo {...item}/>
        <div className="areas-inner__cards">
          <AreasCards {...item}/>
        </div>
      </div>
    )
  })


  return (
    <div className="areas">
      <div className="areas__body">
        <div className="areas__preview">
          <div className="areas__preview_body _container">
            <PreviewPagesBlock 
              title={props.title} 
              subtitle={props.subtitle}
              mainColor="#0051bd"
              icon="area"
            />
          </div>
        </div>
        <div className="areas__content">
          {list}
        </div>
      </div>
    </div>
  )
}

export default Area
