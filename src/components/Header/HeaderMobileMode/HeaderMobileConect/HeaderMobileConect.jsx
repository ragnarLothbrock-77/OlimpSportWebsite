import React from 'react'
import { useHeaderContext } from '../../../../context/headerContext'
import Icon from '../../../Icon/Icon'

function HeaderMobileConect() {
  const {phoneWidth} = useHeaderContext()

  return (
    <div className="header-mobile-conect">
      <div className="header-mobile-conect__body">
        <div className="header-info-item">
          <div className="header-info-item__body">
            <div className="header-info-item__icon">
              <Icon name="whatsUp" color={phoneWidth ? "#fff" : "#808080"} size={phoneWidth ? "30": "20"}/>
            </div>
            <a href="tel:+79251000000" className="header-info-item__value">
              <span className="header-info-item__value_text text-small">+ 7 925 100 00 00</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HeaderMobileConect
