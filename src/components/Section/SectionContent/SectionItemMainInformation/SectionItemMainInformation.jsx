import React from 'react'
import Icon from '../../../Icon/Icon'
import TitleWithCorners from '../../../UI/TitleWithCorners/TitleWithCorners'
import SectionItemInformationAdvantages from './SectionItemInformationAdvantages/SectionItemInformationAdvantages'

function SectionItemMainInformation(props) {
  return (
    <div className="section-item__main-information">
      <div className="section-item__main-information_body _container">
        <div className="section-item-main-information content-paddings">
          <div className="section-item-main-information__content">
            <TitleWithCorners text={`Почему стоит обратить внимание на ${props.group}:`}/>
            <div className="section-item-main-information__info text-medium">
              <span className="section-item-main-information__info_text text-medium">{props.mainInfo}</span>
            </div>
          </div>
          <div className="section-item-main-information__decor">
            <div className="section-item-main-information__decor_image">
              <Icon className="section-item-main-information__decor_icon" name={props.type} color="#00347b"/>
            </div>
          </div>
        </div>
        <SectionItemInformationAdvantages {...props} />
      </div>
    </div>
  )
}

export default SectionItemMainInformation
