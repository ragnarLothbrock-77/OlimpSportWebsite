import React from 'react'
import Icon from '../Icon/Icon'

function PreviewPagesBlock({ title, subtitle, mainColor = "#fff", titleColor = "#fff", subtitleColor = '#e0e4e6', shadowColor = "#000", icon = null }) {
  return (
    <div className="preview">
      <div className="preview__body">
        <div className="preview-info">
          <div className="preview-info__title" style={{background: `${mainColor}`}}>
            <div className="preview-info__title_body">
              <span className="preview-info__title_text title-huge" style={{color: `${titleColor}`, textShadow: `1px 1px 1px ${shadowColor}`}}>{title}</span>
            </div>
          </div>
          <div className="preview-info__subtitle">
            <span className="preview-info__subtitle_text text-medium" style={{color: `${subtitleColor}`}}>{subtitle}</span>
          </div>
        </div>
        <div className="preview-icon">
          <Icon className="preview-icon__ico" name={icon} color="#fff"/>
        </div>
      </div>
    </div>
  )
}

export default PreviewPagesBlock
