import React from 'react'
import SectionCoachInformation from './SectionCoachInformation/SectionCoachInformation'
import SectionGroupInformation from './SectionGroupInformation/SectionGroupInformation'
import SectionItemMainInformation from './SectionItemMainInformation/SectionItemMainInformation'

import SectionPreview from './SectionPreview/SectionPreview'

function SectionContent(props) {
  return (
    <div className="section-item">
      <SectionPreview {...props} />
      <SectionItemMainInformation {...props} />
      <SectionGroupInformation {...props} />
      <SectionCoachInformation {...props} />
    </div>
  )
}

export default SectionContent
