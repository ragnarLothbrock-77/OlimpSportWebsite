import React from 'react'
import ContactsBranches from './ContactsBranches/ContactsBranches'
import ContactsInfo from './ContactsInfo/ContactsInfo'

function Contacts() {
  return (
    <section className="contacts">
      <div className="contacts__body">
        <div className="contacts__map">
          <div className="contacts__map_body">
            <iframe title="Olimp location map" src="https://yandex.ru/map-widget/v1/?um=constructor%3A0d2df038305555d2cf1830d7190b452dddfa341a2db4443ed94dfc23273a9c05&amp;source=constructor" width="100%" height="100%" frameBorder="0"></iframe>          
          </div>
        </div>
        <ContactsInfo />
        <ContactsBranches />
      </div>
    </section>
  )
}

export default Contacts
