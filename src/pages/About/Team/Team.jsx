import React from 'react'
import PreviewPagesBlock from '../../../components/PreviewPagesBlock/PreviewPagesBlock'
import { teamConfig } from '../../../configurations/About/Team/teamConfig'
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
        <PreviewPagesBlock icon="team" mainColor="#82A9B0" title="Команда" subtitle="В нашем учреждении работают опытные специалисты, чемпионы и мастера спорта, которые с радостью научат вас всему, что знают сами. Многие из наших тренеров имеют огромный опыт работы с детьми, и мы точно знаем, что благодаря их профессионализму и индивидуальному подходу каждый пришедший в МБУ СК Олимп сможет достичь желаемых высот в любом из представленных у нас видов спорта. Знакомьтесь - тренерский состав МБУ СК Олимп: "/>
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
