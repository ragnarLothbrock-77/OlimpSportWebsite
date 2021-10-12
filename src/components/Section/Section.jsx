import React from 'react'
import {useParams} from 'react-router-dom'
import { sectionListByEachInfomationConfig } from '../../configurations/sectionListByEachInfomationConfig'
import SectionContent from './SectionContent/SectionContent'

function Section() {
  const { id } = useParams()

  const content = sectionListByEachInfomationConfig.map(item => {
    if(item.type === id) {
      return (
        <SectionContent {...item} key={item.id}/>
      )
    }
  })


  return (
    <section className="section">
      <div className="section__body">
        {content}
      </div>
    </section>
  )
}

export default Section
