import React from "react"
import HeaderStyles from "../../styles/Header.module.scss"
import HeadImg from "../../assets/Molecule-desgin-logo/Molecule-logo-xl-light.png"
import { Link } from "gatsby"
import {
  Settings,
  Componet,
  HeartSolid,
  DashboardSolid,
} from "@molecule-ui/icons"
import Card from "./Card"

const Header = () => {
  return (
    <header className={HeaderStyles.header}>
      {/* Brand Data */}
      <div className={HeaderStyles.branding}>
        <img src={HeadImg} alt="" />
        <h1>DESIGN SYSTEM</h1>
        <p>
          Create your product molecule by molecule, while maintaining
          consistency, with <span> Molecule DESIGN SYSTEM</span>
        </p>
        <Link to="/guidelines">Get Started</Link>
      </div>
      {/* Cards */}
      <div className={HeaderStyles.cards}>
        <div className={HeaderStyles.cardsContainer}>
          <Card componets={Componet} fill="#f25f5c" tag={`Components Based`} />
          <Card componets={HeartSolid} fill="#1982c4" tag="User-friendly" />
        </div>
        <div className={HeaderStyles.cardsContainer}>
          <Card componets={Settings} fill="#8ac926" tag="Customizable" />
          <Card componets={DashboardSolid} fill="#ffca3a" tag="Modular" />
        </div>
      </div>
    </header>
  )
}

export default Header
