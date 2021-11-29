import React, { useEffect } from 'react'
import MainLogo from '../../../assets/icons/olimpMainIcon.svg'
import BurgerMenu from './BurgerMenu/BurgerMenu'
import { useHeaderContext } from '../../../context/headerContext'
import Navigation from '../../Navigation/Navigation'
import HeaderMobileConect from './HeaderMobileConect/HeaderMobileConect'

function HeaderMobileMode() {
  const { mobileSideBar, phoneWidth, handlePhoneWidth } = useHeaderContext()


  useEffect(() => {
    handlePhoneWidth()
    window.addEventListener('resize', handlePhoneWidth)
    return () => {
      window.removeEventListener('resize', handlePhoneWidth)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  
  return (
    <div className="header__mobile" >
      <div className="header__mobile_body" >
        <div className="header-mobile-controller" >
          <div className="header-mobile-controller__body">
           <BurgerMenu />
          </div>
        </div>
        <div className="header-mobile-logo">
          <div className="header-mobile-logo__body">
            <img src={MainLogo} alt="" className="header-mobile-logo__img" />
          </div>
        </div>
        {
          phoneWidth
          ? null
          : <HeaderMobileConect />
        }
      </div>
      {
        mobileSideBar
        ? <div className="header-mobile-sidebar">
            <div className="header-mobile-sidebar__body">
              <Navigation navigationClass="navigation"/>
              {
                phoneWidth
                ? <HeaderMobileConect />
                : null  
              }
            </div>
          </div>
        : null
      }
    </div>
  )
}

export default HeaderMobileMode
