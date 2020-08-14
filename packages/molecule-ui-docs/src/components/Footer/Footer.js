import React from "react"
import { Link } from "gatsby"
import FooterStyles from "../../styles/Footer.module.scss"
const Footer = () => {
  return (
    <div className={FooterStyles.footer}>
      <div>
        <Link to="/license">License</Link>
        <a href="https://twitter.com/home" target="_blank">
          Twitter
        </a>
        <Link to="/license">Blog</Link>
      </div>
      <p> &copy; 2020, Molecule UI</p>
    </div>
  )
}

export default Footer
