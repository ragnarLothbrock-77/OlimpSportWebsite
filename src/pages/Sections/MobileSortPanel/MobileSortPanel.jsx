// import React, { useState } from 'react'
// import Icon from '../../../components/Icon/Icon'
// import SortPanel from '../../../components/SortPanel/SortPanel'

// function MobileSortPanel() {
//   const [sortPanel, setSortPanel] = useState(false)

//   const handleSortPanel = () => {
//     setSortPanel(!sortPanel)
//   }


//   return (
//     <div className="section-mobile-sort">
//       <div className="section-mobile-sort__body">
//         <div className="section-mobile-sort-switcher" onClick={handleSortPanel}>
//           <div className="section-mobile-sort-switcher__icon">
//             <Icon name="filter" size="30" color={sortPanel ? '#3b3b3b' : '#fff'}/>
//           </div>
//           <div className="section-mobile-sort-switcher__title">
//             <span className="section-mobile-sort-switcher__title_text title-small">Фильтры</span>
//           </div>
//         </div>
//         {
//           sortPanel && <div className="section-mobile-sort-panel"><SortPanel /></div>
//         }
//       </div>
//     </div>
//   )
// }

// export default MobileSortPanel
