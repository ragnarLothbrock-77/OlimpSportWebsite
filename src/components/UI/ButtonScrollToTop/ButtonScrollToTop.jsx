import React from 'react'
import Icon from '../../Icon/Icon';

function ButtonScrollToTop() {
  const handleScrollToTop = () => {
    if (window.pageYOffset > 0) {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    }
  } 

  

  return (
    <div className="top-button" onClick={handleScrollToTop}>
      <div className="top-button__body">
        <div className="top-button__body_icon">
          <Icon name="arrow-up" size="25" color="#0051bd"/>
        </div>
      </div>
    </div>
  )
}

export default ButtonScrollToTop
