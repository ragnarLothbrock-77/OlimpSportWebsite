import React from 'react'

function SectionPreview(props) {
  return (
    <div className="section-item__preview">
      <div className="section-preview">
        <div className="section-preview__content">
          <div className="section-preview__content_body section-preview-content">
            <div className="section-preview-content__title">
              <span className="section-preview-content__title_text title-large">{props.previewTitle}</span>
            </div>
            <div className="section-preview-content__subtitle">
              <span className="section-preview-content__subtitle_text text-medium">{props.previewSubtitle}</span>
            </div>
            <div className="section-preview-content__age-audience">
              <span className="section-preview-content__age-audience_text text-medium">Для детей от {props.age} лет</span>
            </div>
          </div>
        </div>
        <div className="section-preview__decor" style={{backgroundImage: `url(${props.previewImage})`}}></div>
      </div>
    </div>
  )
}

export default SectionPreview
