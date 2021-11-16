import React from 'react'
import { aboutPagesLinksCardsListConfig } from '../../../../configurations/About/About/aboutPagesLinksCardsListConfig'
import AboutPagesLinksCard from './AboutPagesLinksCard/AboutPagesLinksCard'

function AboutPagesLinks() {
  const list = aboutPagesLinksCardsListConfig.map(item => {
    return (
      <AboutPagesLinksCard key={item.id} {...item} />
    )
  })



  return (
    <section className="about-links">
      <div className="about-links__body _container">
        <div className="about-links__content content-paddings">
          <div className="about-links-prev">
            <div className="about-links-prev__title">
              <span className="about-links-prev__title_text title-medium">Так же вам может быть интересно:</span>
            </div>
            <ul className="about-links-prev__list">
              <li className="about-links-prev__list_item text-medium">Познакомиться с командой специалистов</li>
              <li className="about-links-prev__list_item text-medium">Ознакомиться с полным перечнем документов МБУ СК Олимп</li>
              <li className="about-links-prev__list_item text-medium">Узнать больше о часто задаваемых вопросах связанных с посещением занятий</li>
            </ul>
          </div>
          <div className="about-links-main">
            <div className="about-links-main__body">
              <ul className="about-links-list">
                {list}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutPagesLinks
