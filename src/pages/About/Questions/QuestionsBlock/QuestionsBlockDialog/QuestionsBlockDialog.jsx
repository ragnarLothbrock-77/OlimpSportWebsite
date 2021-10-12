import React from 'react'
import Icon from '../../../../../components/Icon/Icon'

function QuestionsBlockDialog(props) {
  return (
    <li className="questions-dialog">
      <div className="questions-dialog__question">
        <div className="questions-dialog__body">
          <h2 className="questions-dialog__question_title text-medium">Департамент вопросов:</h2>
          <span className="questions-dialog__question_value text-medium">{props.question}</span>
          <Icon className="questions-dialog__icon left" name="dialog-left" size="40" color="#e0e4e6"/>
        </div>
      </div>
      <div className="questions-dialog__answer">
        <div className="questions-dialog__body">
          <h2 className="questions-dialog__answer_title text-medium">Департамент ответов:</h2>
          <span className="questions-dialog__answer_value text-medium">{props.answer}</span>
          <Icon className="questions-dialog__icon right" name="dialog-right" size="40" color="#efff00"/>
        </div>
      </div>
    </li>
  )
}

export default QuestionsBlockDialog
