import React from "react"
import Helmet from "react-helmet"
import { graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "../css/index.css"

import Accordion from "@material-ui/core/Accordion"
import AccordionSummary from "@material-ui/core/AccordionSummary"
import AccordionDetails from "@material-ui/core/AccordionDetails"
import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
import { makeStyles } from "@material-ui/core/styles"

const LayoutInner = ({ pageContext: { menu, page }, data }) => {
  var html = null;

  data.allMarkdownRemark.edges.forEach(edge => {
    if (edge.node.fileAbsolutePath.match(new RegExp(`.*?${page}\\.md$`))) {
      html = edge.node.html;
    }
  })

  if (html === null) {
    return(<Helmet><meta http-equiv="refresh" content="0; url='/'"/></Helmet>);
  }

  var classesAccordionSummary = makeStyles((theme) => ({
    root: {
      font: "20pt Pixel Matrix",
      backgroundColor: "#d53f54",
    }
  }))
  classesAccordionSummary = classesAccordionSummary()

  var classesAccordionDetails = makeStyles((theme) => ({
    root: {
      backgroundColor: "#5b6891"
    }
  }))
  classesAccordionDetails = classesAccordionDetails()

  return(<>
           <Header/>
           <div className={"maintable"}>
             <div className={"maincolumn1"}>
               <nav>
                 {menu.map((topitem, topindex) => <Accordion square={true}
                                                   defaultExpanded={topitem.tools.includes(page)}
                                                   key={`Accordion${topindex}`}>
                                                    <AccordionSummary
                                                     expandIcon={<ExpandMoreIcon/>}
                                                     className={classesAccordionSummary.root}
                                                     key={`AccordionSummary${topindex}`}>{topitem.title}</AccordionSummary>
                                                    <AccordionDetails
                                                     className={classesAccordionDetails.root}
                                                     key={`AccordionDetails${topindex}`}>
                                                      <table
                                                       cellSpacing={"0"}
                                                       cellPadding={"0"}
                                                       width={"100%"}
                                                       key={`table${topindex}`}>
                                                        <tbody key={`tbody${topindex}`}>
                                                          {topitem.tools.map((subitem, subindex) => <tr onClick={() => navigate(`/${subitem}`)}
                                                                                                     onMouseEnter={() => {document.querySelector(`#td1${topindex}${subindex}`).innerHTML = "*"}}
                                                                                                     onMouseLeave={() => {document.querySelector(`#td1${topindex}${subindex}`).innerHTML = "&nbsp;"}}
                                                                                                     className={"tools"}
                                                                                                     id={`tr${topindex}${subindex}`}
                                                                                                     key={`tr${topindex}${subindex}`}>
                                                                                                      <td className={`td1${subitem === page? ' active': ''}`} id={`td1${topindex}${subindex}`} key={`td1${topindex}${subindex}`}>&nbsp;</td>
                                                                                                      <td className={`td2${subitem === page? ' active': ''}`} id={`td2${topindex}${subindex}`} key={`td2${topindex}${subindex}`}>{subitem}</td>
                                                                                                    </tr>)}
                                                        </tbody>
                                                      </table>
                                                    </AccordionDetails>
                                                  </Accordion>)}
               </nav>
             </div>
             <div className={"maincolumn2"}>
               <article>
                 <img src={`/images/logos/${page}.png`} width={`256`} alt={`${page}`} style={{ float: "left" }}/>
                 <span dangerouslySetInnerHTML={{__html: html}}></span>
               </article>
             </div>
           </div>
           <Footer/>
         </>)
}

export default LayoutInner

export const query = graphql`
  {
    allMarkdownRemark {
      edges {
        node {
          fileAbsolutePath
          html
        }
      }
    }
  }
`
