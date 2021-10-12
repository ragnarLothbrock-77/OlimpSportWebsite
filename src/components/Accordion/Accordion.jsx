import React from 'react'
import AccordionHead from './AccordionHead/AccordionHead.jsx'
import AccordionContent from './AccordionHead/AccordionContent/AccordionContent.jsx'

function Accordion({accordionConfig, isList, isDocs}) {
    const list = accordionConfig.map(item => {
        return (
            <AccordionHead
               key={item.id}
               title={item.text}
               isList={isList}
               dropdownContent={
                  item.drop.map(i => {
                      return (
                        isList 
                            ? <AccordionContent
                                key={i.id}
                                text={i.text}
                                href={i.href}
                                isDocs={isDocs}
                                />
                            : <p key={i.id} className="accordion-dropdown-paragraph__item">{i.text}</p>
                      )
                  })
               }
            />
         )
    })


    return (
        <div className="accordion content-paddings">
            <div className="accordion__body">
                <ul className="accordion-list">
                    {list}
                </ul>
            </div>
        </div>
    )
}

export default Accordion
