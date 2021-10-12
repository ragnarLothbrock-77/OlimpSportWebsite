import React from 'react'

function SectionGroupCard(props) {
  return (
    <div className="group-card__body">
      <div className="group-card__decor">
        <img src={props.groupImage} alt="SK_Olimp" className="group-card__decor_image" />
      </div>
      <div className="group-card__information">
        <div className="group-card__information_body">
          <div className="group-card-info-format">
            <span className="group-card__information_title text-small">Формат</span>
            <span className="group-card__information_subtitle title-small">{props.groupFormat}</span>
          </div>
          <div className="group-card-info-main">
            <div className="group-card-info-main__age">
              <span className="group-card__information_title text-small">Возраст</span>
              <span className="group-card__information_subtitle title-small">{props.groupAge}</span>
            </div>
            <div className="group-card-info-main__duration">
              <span className="group-card__information_title text-small">Продолжительность</span>
              <span className="group-card__information_subtitle title-small">{props.groupDuration} минут</span>
            </div>
          </div>
          <div className="group-card-info-coach">
            <span className="group-card__information_title text-small">Тренер</span>
            <span className="group-card__information_subtitle title-small">{props.groupCoach}</span>
          </div>
        </div>
      </div>
      <div className="group-card__location">
        <div className="group-card__location_text title-small">{props.groupLocation}</div>
      </div>
    </div>
  )
}

export default SectionGroupCard
