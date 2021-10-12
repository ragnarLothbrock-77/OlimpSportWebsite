import React from 'react'
import { useHeaderContext } from '../../../../context/headerContext'

function BurgerMenu() {
  const {handleMobileSideBar, burgerInput} = useHeaderContext()

  return (
    <div className="burger" >
      <div className="burger__mask" onClick={handleMobileSideBar}></div>
      <input ref={burgerInput} type="checkbox" id="menu_checkbox" onChange={() => console.log('')}/>
        <label htmlFor="menu_checkbox">
          <div></div>
          <div></div>
          <div></div>
        </label>
    </div>
  )
}

export default BurgerMenu
