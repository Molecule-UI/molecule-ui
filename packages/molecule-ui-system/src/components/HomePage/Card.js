import React from "react"
import CardStyles from "../../styles/Card.module.scss"
const Card = ({ componets, tag, customsize, fill }) => {
  const Element = componets

  return (
    <div className={`${CardStyles.card}`}>
      <Element customSize={customsize} fill={fill} className={CardStyles.svg} />
      <p style={{ color: fill }}>{tag}</p>
    </div>
  )
}

export default Card
