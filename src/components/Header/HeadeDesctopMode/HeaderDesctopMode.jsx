import React from 'react'
import { Link } from 'react-router-dom'
import mainIcon from '../../../assets/icons/olimpMainIcon.svg'
import { useHeaderContext } from '../../../context/headerContext'
import Navigation from '../../Navigation/Navigation'
import HeaderInfoRow from './HeaderInfoRow/HeaderInfoRow'

function HeaderDesctopMode() {
  const {navigationClass} = useHeaderContext()

  return (
    <div className="header-desctop">
      <div className="header-desctop__top _container">
        <div className="header-descriptor">
          <span className="header-descriptor__text text-small">Центр спортивной жизни в Краснопахоском</span>
        </div>
        <div className="header-desctop-logo">
          <Link className="header-desctop-logo__link" to="/">
            <img className="header-desctop-logo__link_ico" src={mainIcon} alt="icon" />
          </Link>
        </div>
        <HeaderInfoRow />
      </div>
      <div className="header-desctop__bottom">
        <Navigation navigationClass={navigationClass}/>
      </div>
    </div>
  )
}

export default HeaderDesctopMode
