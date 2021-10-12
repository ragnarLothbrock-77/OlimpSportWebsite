import React from 'react'

function PreviewMain({title, subtitle, decorImage}) {
  return (
  <div className="page-preview">
    <div className="page-preview-decor" style={{backgroundImage:`url(${decorImage})`}}></div>
    <div className="page-preview-info">
      <div className="page-preview-info__content">
        <div className="page-preview-info__content_title">
          <span className="title-medium">{title}</span>
        </div>
        <div className="page-preview-info__content_subtitle">
          <span className="page-preview-info__content_subtitle-text text-small">{subtitle}</span>
        </div>
      </div>
    </div>
  </div>
  )
}

export default PreviewMain
