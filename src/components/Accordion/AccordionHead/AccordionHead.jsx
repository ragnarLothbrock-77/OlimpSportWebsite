import React, { useState } from 'react'
import Icon from '../../Icon/Icon'

function AccordionHead({ dropdownContent, title, isList }) {
   const [isDrop, setIsDrop] = useState(false)

   const handleDropdown = () => {
      setIsDrop(!isDrop)
   }

   return (
         <li className="accordion-list-item" >
            <div onClick={handleDropdown} className="accordion-list-item__title">
               <span className="accordion-list-item__title_text title-middle">{title}</span>
               <div className="accordion-list-item__title_icon">
                  {
                     isDrop
                        ? <Icon name="plus" color="#fff" size="25" className="accordion-list-item-icon opened"/>
                        : <Icon name="plus" color="#fff" size="25" className="accordion-list-item-icon closed"/>
                  }
               </div>
            </div>
            {
               isDrop
                  ? <div className="accordion-dropdown">
                     <div className="accordion-dropdown__body">
                         { isList  
                              ? <ul className="accordion-dropdown-list">
                                    {dropdownContent}
                                 </ul>
                              : <div className="accordion-dropdown-paragraph">{dropdownContent}</div>
                         }
                     </div>
                  </div>
                  : null
            }
         </li>
   )
}

export default AccordionHead
