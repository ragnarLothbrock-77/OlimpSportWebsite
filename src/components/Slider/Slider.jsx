import React, {useEffect, useRef, useState} from 'react';
import SliderItem from './SliderItem/SliderItem';
import { sliderConfig } from '../../configurations/Slider/sliderConfig';
import Icon from '../../components/Icon/Icon'


function Carousel() {
  const [activeIndex, setActiveIndex] = useState(0)
  const timer = useRef(null)
  const content = sliderConfig.map(item => <SliderItem {...item} />)
  const prevSlideIndex = activeIndex ? activeIndex - 1 : content.length - 1
  const nextSlideIndex = activeIndex === content.length - 1 ? 0 : activeIndex + 1

  
  useEffect(() => {
    timer.current = setInterval(() => {
      setActiveIndex((current) =>
        current === content.length - 1 ? 0 : current + 1
      )
    }, 5000)
    return () => clearInterval(timer.current)
  }, []) // eslint-disable-line react-hooks/exhaustive-deps


  function leftClick() {
    setActiveIndex((current) =>
        current === 0 ? content.length - 1 : current - 1
      )
  }

  function rightClick() {
    setActiveIndex((current) =>
        current === content.length - 1 ? 0 : current + 1
      )
  }

  function autoSliderStop() {
    clearInterval(timer.current)
  }

  function autoSliderStart() {
    timer.current = setInterval(() => {
      setActiveIndex((current) =>
        current === content.length - 1 ? 0 : current + 1
      )
    }, 5000)
  }


  return (
    <div className="slider" onMouseEnter={autoSliderStop} onMouseLeave={autoSliderStart}>
      <div className="slider__item slider__item_prev" key={prevSlideIndex}>{content[prevSlideIndex]}</div>
      <div className="slider__item" key={activeIndex}>{content[activeIndex]}</div>
      <div className="slider__item slider__item_next" key={nextSlideIndex}>{content[nextSlideIndex]}</div>
      <div className="slider-control _container">
        <div className="slider-control__icon  _left" onClick={leftClick}>
          <Icon name="slider-arrow-l" className="slider-item-control__icon" size="50" color="#fff" />
        </div>
        <div className="slider-control__icon _right" onClick={rightClick}>
          <Icon name="slider-arrow-r" className="slider-item-control__icon" size="50" color="#fff"/>
        </div>
      </div>
    </div>
  )
}

export default Carousel;