import React, { useContext, useRef, useState } from "react"

const HeaderContext = React.createContext()

export const useHeaderContext = () => {
  return useContext(HeaderContext)
}


export const HeaderProveider = ({children}) => {
  const [navigationClass, setNavigationClass] = useState("navigation")
  const [mobileWidth, setMobileWidth] = useState(false)
  const [mobileSideBar, setMobileSideBar] = useState(false)
  const [phoneWidth, setPhoneWidth] = useState(false)
  const [arrow, setArrow] = useState(false)
  const burgerInput = useRef()
  const page = document.querySelector('body')


  const handleMobileSideBar = (e) => {
    setMobileSideBar(!mobileSideBar)
    if(!mobileSideBar) {
      burgerInput.current.checked = true
      page.classList.add('hide')
    } else {
      burgerInput.current.checked = false
      page.classList.remove('hide')
    }
  }


  const handlePhoneWidth = () => {
    if(window.innerWidth <= 680) {
      setPhoneWidth(true)
    } else {
      setPhoneWidth(false)
    }
  }


  const handleMobileWidth = () => {
    if(window.innerWidth <= 1024) {
     setMobileWidth(true)
    }
    else {
      setMobileWidth(false)
      setMobileSideBar(false)
      page.classList.remove('hide')
    }
  }


  const handleChangeNavigationClass = () => {
    if(window.pageYOffset >= 200) {
      setNavigationClass("navigation-fixed")
    } else {
      setNavigationClass("navigation")
    }
  }

  const handleAutoScrollArrow = () => {
    if (window.pageYOffset >= 2000) {
      setArrow(true)
    } else {
      setArrow(false)
    }
  }


  return (
    <HeaderContext.Provider value={{
      navigationClass, handleChangeNavigationClass,
      mobileWidth, handleMobileWidth,
      mobileSideBar, handleMobileSideBar,
      phoneWidth, setPhoneWidth, handlePhoneWidth, 
      burgerInput, arrow, handleAutoScrollArrow
    }}>{children}</HeaderContext.Provider>
  )
}
