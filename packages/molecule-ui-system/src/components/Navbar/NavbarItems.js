import React from "react"
import { Link } from "gatsby"

const NavbarItems = () => {
  return (
    <ul>
      <li>
        <Link to="/guidelines">Guidelines</Link>
      </li>
      <li>
        <Link to="/components">Components</Link>
      </li>
    </ul>
  )
}

export default NavbarItems
