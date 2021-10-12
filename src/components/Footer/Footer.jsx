import React from 'react'
import { footerConfig } from '../../configurations/footerConfig'
import FooterItem from './FooterItem/FooterItem'
import img from '../../assets/icons/ol10.svg'
import SocialNetworks from '../SocialNetworks/SocialNetworks'
import Icon from '../Icon/Icon'

function Footer() {
  const list = footerConfig.map(item => {
    return (
      <FooterItem {...item} key={item.id}/>
    )
  })

  
  let date = new Date()
  let year = date.getFullYear()


  return (
    <div className="footer">
      <div className="footer__body _container">
          <div className="footer-main">
            <ul className="footer-main__list">
              {list}
            </ul>
          </div>
          <div className="footer-bottom">
            <div className="footer-networks">
              <SocialNetworks />
            </div>
            <div className="footer-logo">
              <div className="footer-logo__body">
                <img src={img} alt="olimp" className="footer-logo__body_img" />
              </div>
            </div>
            <div className="footer-copyrights">
              <div className="footer-copyrights__body">
                <Icon name="copyright" size="17" color="#3b3b3b"/>
                <p className="footer-copyrights__text">2000-{year} МБУК СК Олимп</p>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default Footer
