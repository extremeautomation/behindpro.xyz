import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../css/style.css"

const LayoutInner = ({ pageContext: { html, page, fm, menu } }) => {
  return(
    <div align="center">
      <Header page={page} fm={fm} menu={menu}/>
      <main id="main">
        <div className="logo-container"><img src={`/img/logos/png/${page}.png`} className="logo" alt={page}/></div>
        <div className="article" dangerouslySetInnerHTML={{__html: html}}></div>
      </main>
      <Footer/>
    </div>)
}

export default LayoutInner
