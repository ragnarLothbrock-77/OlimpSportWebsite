import React from 'react'
import { Link } from 'react-router-dom'

function FooterListItem(props) {
  return (
    <li className="footer-list-item">
      {
        props.isLink 
        ? props.isMedia 
          ? <a className="footer-list-item__media-link text-medium" href={props.type}>{props.name}</a>
          : <Link to={props.to} className="footer-list-item__link">
              <span className="footer-list-item__link_text text-medium">{props.name}</span>
            </Link>
        : <p className="footer-list-item__text text-medium">{props.name}</p>
      }
    </li>
  )
}

export default FooterListItem
