import React from "react"
import MainStyles from "../../styles/Main.module.scss"
import {
  Componet,
  CandyBoxMenu,
  FolderSolid,
  ReactLogo,
  CssSolid,
} from "@molecule-ui/icons"
import { Link } from "gatsby"

const Main = () => {
  return (
    <main className={MainStyles.main}>
      <div className={MainStyles.about}>
        <h2>What is Molecule ?</h2>
        <p>
          Molecule is a design system and a set of packages that is useful to
          create seamlessly consistent products. The system uses the atomic
          design principle to provide high-quality UI/UX experience to your
          users.
        </p>
        <p>
          Molecule provides ready-to-use Icon Library and UI component's library
          for multiple front-end frameworks. Molecule-Styles is a CSS only
          distribution for developers who want to create custom components
          without writing a single line of CSS
        </p>
      </div>
      <div className={MainStyles.links}>
        <div>
          <CandyBoxMenu className={MainStyles.svgs} fill={"#272932"} />
          <h3>Guidelines</h3>
          <p>
            Read Molecule design style guide, and best practices to apply it to
            your product.
          </p>
          <Link to="/guidelines">Read Guidelines</Link>
        </div>
        <div>
          <Componet className={MainStyles.svgs} fill={"#272932"} />
          <h3>components</h3>
          <p>
            Explore ready to use componets for your next project, available for
            multiple frameworks.
          </p>
          <Link to="/components">Explore UI components</Link>
        </div>
      </div>
      <div className={MainStyles.resources}>
        <h2>Resources</h2>

        <div className={MainStyles.grid}>
          <Link to="/icon-library">
            <FolderSolid className={MainStyles.svgs} fill={"#272932"} />
            <p>Molecule-Icons</p>
          </Link>
          <Link to="/molecule-react">
            <ReactLogo className={MainStyles.svgs} fill={"#272932"} />
            <p>Molecule-React</p>
          </Link>
          <Link to="/molecule-styles">
            <CssSolid className={MainStyles.svgs} fill={"#272932"} />
            <p>Molecule-Styles</p>
          </Link>
        </div>
      </div>
    </main>
  )
}

export default Main
