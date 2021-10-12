import React from 'react'

function QuestionsBlock({title, list}) {
  return (
    <li className="question-block">
      <div className="questions-block__title">
        <span className="questions-block__title_text title-medium">{title}</span>
      </div>
      <ul className="questions-block__dialog">
        {list}
      </ul>
    </li>
  )
}

export default QuestionsBlock
