import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../css/style.css"

const LayoutInner = ({ pageContext: { html, page, fm, menu } }) => {
  return(<>
    <Header page={page} fm={fm} menu={menu}/>
    <article>
      <div>
        <div className="main-logo"><img src={`img/logos/png/${page}.png`} alt={page}/></div>
        <p align="justify" dangerouslySetInnerHTML={{__html: html}}></p>
      </div>
    </article>
    <Footer/>
  </>)
}

export default LayoutInner
