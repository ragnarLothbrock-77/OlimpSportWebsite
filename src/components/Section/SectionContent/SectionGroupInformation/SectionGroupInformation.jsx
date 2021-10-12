import React from 'react'
import TitleWithCorners from '../../../UI/TitleWithCorners/TitleWithCorners'
import SectionGroupItem from './SectionGroupItem/SectionGroupItem'

function SectionGroupInformation(props) {
  return (
    <section className="section-group">
      <div className="section-group__body _container">
        <div className="section-group-content content-paddings">
          <div className="section-group-content__title">
            <TitleWithCorners text={"Список секций"} fontColor="#fff"/>
          </div>
          <div className="section-group-content__groups">
            <ul className="section-group-content__groups_list">
              {
                props.groupInfo.map(item => {
                  return (
                    <SectionGroupItem {...item} key={item.id}/>
                  )
                })
              }
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SectionGroupInformation
