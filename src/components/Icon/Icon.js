import React from 'react';
import IconsSVG from '../../assets/icons/iconsSprite.svg';

function Icon({name, color, size, className, sizeVert = size}) {
  return(
    <svg className={`icon icon-${name} ${className}`} fill={color} width={size} height={sizeVert}>
      <use xlinkHref={`${IconsSVG}#icon-${name}`} />
    </svg>
  )
}

// stroke={color} - убрал этот атрибут потомучто к некоторым иконкам добавлял обводку ненужную

export default Icon;