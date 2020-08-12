import React from "react"
import IconsStyle from "../../styles/Icons.module.scss"
import * as IconsSet from "@molecule-ui/icons"
import IconsData from "./IconsData"

const Icons = () => {
  return (
    <div className={IconsStyle.container}>
      <div className={IconsStyle.intro}>
        <h1>Icons</h1>
        <p>
          {" "}
          Molecule icons are a set of handcrafted SVG icons for you to use in
          your next project.
        </p>
      </div>
      <IconsData IconsSet={IconsSet} />
      <div className={IconsStyle.gallery}>
        {Object.keys(IconsSet).map((icon, index) => {
          const Element = IconsSet[icon]
          return (
            <div key={index} className={IconsStyle.icon}>
              <Element className={IconsStyle.svgs} fill={"#272932"} />
              <p>{icon}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Icons
