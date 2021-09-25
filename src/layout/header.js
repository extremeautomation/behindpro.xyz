import React from "react"
import Helmet from "react-helmet"
import { Link } from "gatsby"
import "../css/index.css"

const Header = () => (
  <>
    <Helmet
      htmlAttributes={{"lang": "en"}}
      titleTemplate={"%s - Behind Proxies"}
      title={"Introduction"}
    />
    <header className={"header"}>
      <Link to={"/"} style={{color: "white", textDecoration: "none"}}>BEHIND PROXYZ</Link>
    </header>
  </>)

export default Header
