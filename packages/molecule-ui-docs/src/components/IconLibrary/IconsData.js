import React from "react"
import IconsStyle from "../../styles/Icons.module.scss"
import { Link } from "gatsby"
const IconsData = ({ IconsSet }) => {
  return (
    <div className={IconsStyle.iconData}>
      <div>
        <h6>{Object.keys(IconsSet).length} Icons</h6>
        <p>Choose your icons from a well maintained and growing Collection</p>
        <p>
          Learn to use them <Link to="/components/icon">Icons guide</Link>{" "}
        </p>
      </div>

      <div>
        <h6>Open Source</h6>
        <p>
          Molecule Icons are free for everyone. Please don't reproduce or sell
          them
        </p>
        <p>
          Molecule icons are comes under{" "}
          <a
            href=" http://www.apache.org/licenses/LICENSE-2.0"
            target="_blank"
            rel="noreferrer"
          >
            Apache License, Version 2.0
          </a>{" "}
        </p>
      </div>
      <div>
        <h6>Availability</h6>
        <p>Molecule Icons are available as both SVG files and Components</p>
        <p>
          Download SVGs <a href="https://github.com">SVG Source</a>{" "}
        </p>
      </div>
    </div>
  )
}

export default IconsData
