import React from 'react'

function TeamItemPerson(props) {
  return (
    <li className="team-person">
      <div className="team-person__body">
        <div className="team-person-content">
          <div className="team-person-content__decoration">
            <img src={props.src} alt="personal" className="team-person-content__decoration_img" />
          </div>
          <div className="team-person-content__info">
            <div className="team-person-content__info_name title-small">{props.name}</div>
            <div className="team-person-content__info_profession text-small">{props.profession}</div>
          </div>
        </div>
      </div>
    </li>
  )
}

export default TeamItemPerson
