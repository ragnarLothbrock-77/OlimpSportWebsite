import React from 'react'
import { Link } from 'react-router-dom'
import FooterListItem from './FooterListItem/FooterListItem'

function FooterItem(props) {
  const list = props.links.map(item => {
    return (
      <FooterListItem {...item} key={item.id}/>
    )
  })

  
  return (
    <li className="footer-item">
      <div className="footer-item__body">
        <Link to={props.to} className="footer-item__link">
            <span className="footer-item__link_name nav-font">{props.title}</span>
        </Link>
        <ul className="footer-item__list">
          {list}
        </ul>
      </div>
    </li>  
  )
}

export default FooterItem
