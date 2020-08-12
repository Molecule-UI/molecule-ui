import React from "react"
import NavbarStyles from "../../styles/Navbar.module.scss"
import BrandMd from "../../assets/Molecule-desgin-logo/Molecule-logo-md-dark.png"
import NavbarItems from "./NavbarItems"
import { Link } from "gatsby"

const Navbar = () => {
  return (
    <nav className={NavbarStyles.navigation}>
      <Link to="/">
        {" "}
        <img src={BrandMd} alt="" />
      </Link>
      <NavbarItems />
    </nav>
  )
}

export default Navbar
