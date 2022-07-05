import React from "react"
import Header from "./header"
import Menu from "./menu"
import Footer from "./footer"

const LayoutInner = ({ pageContext: { id, pa, fm, menu } }) => {

  // fetch a given markdown file
  const result = await graphql(`markdownRemark(id: { eq: $id }) {
    id
    html
  }`)

  return(<>
    <Header pa={pa} fm={fm}/>
    <article>
      <img src={`/images/logos/png-pixelated/${pa}.png`} alt={`${pa}`} style={{ float: "left" }}/>
      <span dangerouslySetInnerHTML={{__html: result.data.html}}></span>
    </article>
    <Footer/>
  </>)
}

export default LayoutInner
