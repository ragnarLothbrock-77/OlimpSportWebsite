import React from 'react'
import { networksConfig } from '../../configurations/Networks/networksConfig'
import Icon from '../Icon/Icon'

function SocialNetworks() {
  const list = networksConfig.map(item => {
    return (
      <li className="networks-list-item" key={item.key}>
        {
          item.isNetwork
          ? <a href={item.to} className="networks-list-item__link" target="_blank" rel="noopener noreferrer">
              <div className="networks-list-item__icon">
                <Icon className="networks-list-item__icon_ico" name={item.name} size={item.size} />
              </div>
            </a>
          : <a href={item.to} className="networks-list-item__link">
              <div className="networks-list-item__icon">
                <Icon className="networks-list-item__icon_ico" name={item.name} size={item.size} />
              </div>
            </a>
        }
      </li>
    )
  })


  return (
    <div className="networks">
      <div className="networks__body">
        <ul className="networks-list">
          {list}
        </ul>
      </div>
    </div>
  )
}

export default SocialNetworks
