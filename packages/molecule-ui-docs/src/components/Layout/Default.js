import React from "react"
import Navbar from "../Navbar/Navbar"
import Footer from "../Footer/Footer"

const Default = props => {
  return (
    <>
      <Navbar />
      <main>{props.children}</main>
      <Footer />
    </>
  )
}

export default Default
