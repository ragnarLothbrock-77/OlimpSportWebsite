import React from 'react'
import ContactsContentItem from './ContactsContentItem/ContactsContentItem'
import TitleWithCorners from '../../../components/UI/TitleWithCorners/TitleWithCorners'
import { contactsConfig } from '../../../configurations/contactsConfig'

function ContactsInfo() {
  const list = contactsConfig.map(item => {
    return (
      <ContactsContentItem {...item} key={item.id}/>
    )
  })


  return (
    <div className="contacts__info">
      <div className="contacts__info_body">
        <div className="contacts__info_title">
          <TitleWithCorners text="Контакты" color="#2baae2" fontColor="#fff"/>
        </div>
        <div className="contacts__info_content">
          <ul className="contacts-content__list">
            {list}
          </ul>
        </div>
      </div>
    </div>
  )
}

export default ContactsInfo
