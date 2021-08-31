/**
import React from "react"
import Layout from "../components/layout"
import LayoutInner from "../components/layout-inner"
import { graphql } from "gatsby"

export const query = graphql`
  query {
    allMarkdownRemark {
      edges {
        node {
          id
        }
      }
    }
  }
`

const IndexPage = ({ data }) => {
  return (
    <LayoutInner>
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <h3>{node.id}</h3>
      ))}
    </LayoutInner>
  )
}
export default IndexPage
**/

import * as React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"

const text = [];

["apt", "argo", "curl",
 "docker", "gitlab", "git",
 "go", "gradle", "java",
 "jenkins", "linux", "mac",
 "maven", "php", "puppet",
 "terraform", "wget", "yum"]
.forEach(n => {
 text.push(
   <div className="logos">
     <Link to={n}>
       <img src={`/images/logos/${n}.png`} width={"64"} alt={`${n}`}/>
     </Link>
   </div>);
});

const IndexPage = () => (
  <Layout>
    <p>This collection of manuscripts is devoted to fellow automation fighters who
       still live behind the walls of the enterprise HTTP proxy.</p>
    <p>The proxy makes their daily heroic automation endeavors harder. Reaching the
       vast ocean of the Internet is not as easy as for the free start-up nomads.</p>
    <p>The magic automation spells do not always work when the enterprise sorcerers
       have to blend several tools.</p>
    <hr/>
    <p align="center">{text}</p>
  </Layout>
)

export default IndexPage
