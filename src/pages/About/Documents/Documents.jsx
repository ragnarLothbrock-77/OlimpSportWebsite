import React from 'react'
import Accordion from '../../../components/Accordion/Accordion.jsx'
import PreviewPagesBlock from '../../../components/PreviewPagesBlock/PreviewPagesBlock.jsx'
import { documentsData } from '../../../configurations/documentsConfig'

function Documents() {
  return (
    <section className="documents">
      <div className="documents__body _container">
        <PreviewPagesBlock icon="docs" mainColor="#2baae2" title="Документы" subtitle="На всех наших базах работают суперопытные инструкторы, чемпионы и мастера спорта, которые с радостью научат вас всему, что знают сами. Они заслужили наше доверие, и мы точно знаем, что благодаря их профессионализму и индивидуальному подходу каждый пришедший в Силу ветра сможет достичь желаемых высот в парусном спорте."/>
        <Accordion 
          accordionConfig={documentsData}
          isDocs={true} 
          isList={true}
        />
      </div>
    </section>
  )
}

export default Documents
