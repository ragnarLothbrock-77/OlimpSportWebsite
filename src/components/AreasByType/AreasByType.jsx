import React from 'react'
import {useParams} from 'react-router-dom'
import { areasByType } from '../../configurations/Places/areasByTypeConfig'
import Areas from './Areas/Areas'

function AreasByType() {
  const { id } = useParams()

  const content = areasByType.map(item => {
    if(item.type === id) {
      return (
        <Areas {...item} key={item.id}/>
      )
    }
    return null
  })



  return (
    <div className="areas-by-type">
      <div className="areas-by-type__body">
        {content}
      </div>
    </div>
  )
}

export default AreasByType
