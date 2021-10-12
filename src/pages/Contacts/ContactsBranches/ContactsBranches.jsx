import React from 'react'
import Icon from '../../../components/Icon/Icon'
import { contactsBranchesConfig } from '../../../configurations/contactsConfig'

function ContactsBranches() {
  const list = contactsBranchesConfig.map(item => {
    return (
      <li key={item.id} className="contacts-branches__list_item contacts-branches-item">
        <div className="contacts-branches-item__decor">
          <img alt="Olimp" src={item.img} className="contacts-branches-item__decor_img"></img>
          <div className="contacts-branches-item__decor_mask"></div>
        </div>
        <div className="contacts-branches-item__info">
          <div className="contacts-branches-item__info_body">
            <div className="contacts-branches-item__title">
              <span className="contacts-branches-item__title_text title-small">{item.title}</span>
            </div>
            <hr className="contacts-branches-item__line"/>
            <div className="contacts-branches-item__content">
              <Icon name={item.icon} size="30" color="#0051bd"/>
              <span className="contacts-branches-item__content_text text-medium">{item.value}</span>
            </div>
          </div>
        </div>
      </li>
    )
  })

  return (
    <div className="contacts__branches">
      <div className="contacts__branches_body contacts-branches">
        <div className="contacts-branches__title">
          <span className="contacts-branches__title_text title-small">Филиалы</span>
        </div>
        <div className="contacts-branches__content">
          <ul className="contacts-branches__list">
            {list}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ContactsBranches
