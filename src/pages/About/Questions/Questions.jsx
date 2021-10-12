import React from 'react'
import PreviewPagesBlock from '../../../components/PreviewPagesBlock/PreviewPagesBlock'
import { questionsConfig } from '../../../configurations/questionsConfig'
import QuestionsBlock from './QuestionsBlock/QuestionsBlock'
import QuestionsBlockDialog from './QuestionsBlock/QuestionsBlockDialog/QuestionsBlockDialog'

function Questions() {
  const list = questionsConfig.map(item => {
    return (
      <QuestionsBlock 
        key={item.id} 
        title={item.theme} 
        list={item.dialog.map(el => {
          return (<QuestionsBlockDialog key={el.id} {...el} />)
        })}  
      />
    )
  })

  return (
    <section className="questions _wrapper">
      <div className="questions__body _container">
        <PreviewPagesBlock icon="questions" shadowColor="#fff" titleColor="#000" mainColor="#E9FB00" title="Часто задаваемые вопросы" subtitle="На всех наших базах работают суперопытные инструкторы, чемпионы и мастера спорта, которые с радостью научат вас всему, что знают сами. Они заслужили наше доверие, и мы точно знаем, что благодаря их профессионализму и индивидуальному подходу каждый пришедший в Силу ветра сможет достичь желаемых высот в парусном спорте."/>
        <div className="questions-content">
          <ul className="questions-content__list">
            {list}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Questions
