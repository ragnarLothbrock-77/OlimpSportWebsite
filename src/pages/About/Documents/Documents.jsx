import React from 'react'
import Accordion from '../../../components/Accordion/Accordion.jsx'
import PreviewPagesBlock from '../../../components/PreviewPagesBlock/PreviewPagesBlock.jsx'
import { documentsData } from '../../../configurations/About/Documents/documentsConfig'

function Documents() {
  return (
    <section className="documents">
      <div className="documents__body _container">
        <PreviewPagesBlock icon="docs" mainColor="#2baae2" title="Документы" subtitle="Ниже представлены документы и правовая информация МБУ СК ОЛИМП. Полное название организации: Муниципальное Бюджетное Учреждение Спортивный Клуб Олимп. Сокращённое название: МБУ СК Олимп. Год основания:  2005 "/>
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
