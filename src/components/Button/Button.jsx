import React, { useState } from 'react'
import {Link} from "react-router-dom"

function Button({text, to, isAnimatedButton = false, color, buttonBorder, buttonBackground}) {
  const [hoveredButton, setHoveredButton] = useState(false)

  const buttonCustomStyles = {
    color: `${hoveredButton ? "#fff" : color}`,
    borderColor: `${hoveredButton ? "#0051bd" : buttonBorder}`,
    background: `${hoveredButton ? "#0051bd" : buttonBackground}`,
    textShadow: `${hoveredButton ? "1px 1px 1px #000" : "none"}`
  }

  return (
    <Link to={to} className="button" onMouseEnter={() => setHoveredButton(!hoveredButton)} onMouseLeave={() => setHoveredButton(!hoveredButton)}>
      <button className={isAnimatedButton ? "glow-on-hover" : "but"} type="button" style={buttonCustomStyles}>{text}</button>
    </Link>
  )
}

export default Button
