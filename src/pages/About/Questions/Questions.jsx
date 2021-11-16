import React from 'react'
import PreviewPagesBlock from '../../../components/PreviewPagesBlock/PreviewPagesBlock'
import { questionsConfig } from '../../../configurations/About/Questions/questionsConfig'
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
        <PreviewPagesBlock icon="questions" shadowColor="#fff" titleColor="#000" mainColor="#E9FB00" title="Часто задаваемые вопросы" subtitle="Основываясь на многолетнем опыте работы мы подготовили для вас перечень часто задаваемых вопросов и ответов на них. Список делится на темы: Запись в студии, Первое посещение, Всё об оплате занятий и Мероприятия. Если вы не нашли интересующего вас вопроса или возникли дополнительные вопросы по имеющимся вопросам вы можете позвонить по телефону: 8 925 148 19 10."/>
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
