import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../css/style.css"

const LayoutInner = async ({ pageContext: { id, pa, fm, menu } }) => {

  // fetch a given markdown file
  const result = await graphql(`markdownRemark(id: { eq: ${id} }) {
    id
    html
  }`)

  return(<>
    <Header pa={pa} fm={fm} menu={menu}/>
    <article>
      <img src={`/images/logos/png-pixelated/${pa}.png`} alt={`${pa}`} style={{ float: "left" }}/>
      <span dangerouslySetInnerHTML={{__html: result.data.html}}></span>
    </article>
    <Footer/>
  </>)
}

export default LayoutInner
