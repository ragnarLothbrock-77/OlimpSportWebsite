import React from 'react'

function SectionTitle({ text }) { 
  return (
    <div className="section-title">
      <div className="section-title__body">
        <h2 className="section-title__body_text">{text}</h2>
      </div>
    </div>
  )
}

export default SectionTitle
