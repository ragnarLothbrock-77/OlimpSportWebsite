import React from 'react'
import PreviewPagesBlock from '../../../components/PreviewPagesBlock/PreviewPagesBlock'
import { teamConfig } from '../../../configurations/teamConfig'
import TeamItemPerson from './TeamPersonItem/TeamItemPerson'

function Team() {
  const list = teamConfig.map(item => {
    return (
      <TeamItemPerson key={item.id} {...item} />
    )
  })


  return (
    <section className="team _wrapper">
      <div className="team__body _container">
        <PreviewPagesBlock icon="team" mainColor="#82A9B0" title="Команда" subtitle="На всех наших базах работают суперопытные инструкторы, чемпионы и мастера спорта, которые с радостью научат вас всему, что знают сами. Они заслужили наше доверие, и мы точно знаем, что благодаря их профессионализму и индивидуальному подходу каждый пришедший в Силу ветра сможет достичь желаемых высот в парусном спорте. Знакомьтесь: воины Силы ветра (чтобы узнать больше о каждом, нажмите на фотографию)."/>
        <div className="team-content">
          <ul className="team-content__list">
            {list}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Team
