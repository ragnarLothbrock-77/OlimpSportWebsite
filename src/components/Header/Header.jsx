import React, { useEffect } from 'react'
import { useHeaderContext } from '../../context/headerContext'
import ButtonScrollToTop from '../UI/ButtonScrollToTop/ButtonScrollToTop'
import HeaderDesctopMode from './HeadeDesctopMode/HeaderDesctopMode'
import HeaderMobileMode from './HeaderMobileMode/HeaderMobileMode'

function Header() {
  const { handleChangeNavigationClass, mobileWidth, handleMobileWidth, arrow, handleAutoScrollArrow } = useHeaderContext()

  useEffect(() => {
    handleMobileWidth()
    document.addEventListener('scroll', handleChangeNavigationClass)
    document.addEventListener('scroll', handleAutoScrollArrow)
    window.addEventListener('resize', handleMobileWidth)
    return () => {
      document.removeEventListener('scroll', handleChangeNavigationClass)
      document.removeEventListener('scroll', handleAutoScrollArrow)
      window.removeEventListener('resize', handleMobileWidth)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])



  return (
    <div className="header">
      <div className="header__body">
        {
          mobileWidth 
          ? <HeaderMobileMode />
          : <HeaderDesctopMode />
        }
        {
          arrow 
          ? <ButtonScrollToTop />
          : null
        }
      </div>
    </div>
  )
}

export default Header
