import React, { useEffect, useState } from 'react'
import { useHeaderContext } from '../../context/headerContext'
import HeaderDesctopMode from './HeadeDesctopMode/HeaderDesctopMode'
import HeaderMobileMode from './HeaderMobileMode/HeaderMobileMode'

function Header() {
  const { handleChangeNavigationClass, mobileWidth, handleMobileWidth} = useHeaderContext()

  useEffect(() => {
    handleMobileWidth()
    document.addEventListener('scroll', handleChangeNavigationClass)
    window.addEventListener('resize', handleMobileWidth)
    return () => {
      document.removeEventListener('scroll', handleChangeNavigationClass)
      window.removeEventListener('resize', handleMobileWidth)
    }
  }, [])



  return (
    <div className="header">
      <div className="header__body">
        {
          mobileWidth 
          ? <HeaderMobileMode />
          : <HeaderDesctopMode />
        }
      </div>
    </div>
  )
}

export default Header
