import React from 'react'
import Icon from '../../../../components/Icon/Icon'

function ContactsContentItem(props) {
  const contentItemType = () => {
      switch (props.type) {
        case 'phone':
          return <a className="contacts-content-item__info_text-value text-medium" href={`tel:${props.value.replace(/\s+/g, '')}`}>{props.value}</a>
        case 'mail':
          return <a className="contacts-content-item__info_text-value text-medium" href={`mailto:${props.value.replace(/\s+/g, '')}`}>{props.value}</a>
        default:
          return <span className="contacts-content-item__info_text-value text-medium">{props.value}</span>
      }
  }

  return (
    <div className="contacts-content-item">
      <div className="contacts-content-item__body">
        <div className="contacts-content-item__title">
          <span className="contacts-content-item__title_text title-small">{props.title}</span>
        </div>
        <hr className="contacts-content-item__decor"/>
        <div className="contacts-content-item__info">
          <div className="contacts-content-item__info_icon">
            <Icon name={props.icon} size="25" color="#00347b"/>
          </div>
          <div className="contacts-content-item__info_text">
            { contentItemType() }
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactsContentItem
