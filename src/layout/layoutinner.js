import React from "react"
import { Link } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "../css/index.css"

import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { withStyles } from "@material-ui/core/styles";

Accordion = withStyles({
  root: {
    width: "20%",
    backgroundColor: "#f55f74",
    padding: "10px"
  },
  "&:hover": {
    background: "#3b4871"
  }
})

AccordionSummary = withStyles({
  root: {
    backgroundColor: "#d53f54"
  },
  "&:hover": {
    background: "#3b4871"
  }
})

AccordionDetails = withStyles({
  root: {
    display: "block",
    backgroundColor: "#5b6891"
  },
  "&:hover": {
    background: "#8b98c1"
  }
})

const LayoutInner = ({ pageContext: { data }}) => {
  return(<>
           <Header/>
           <div>
             <menu>
               {data.map(topitem => <Accordion square={true}>
                                      <AccordionSummary expandIcon={<ExpandMoreIcon/>}>{topitem.title}</AccordionSummary>
                                      <AccordionDetails>
                                        {topitem.tools.map((subitem, index) => <li key={index}><Link to={`/${subitem}`} className={"tools"}>{subitem}</Link></li>)}
                                      </AccordionDetails>
                                    </Accordion>)}
             </menu>
           </div>
           <Footer/>
         </>)
}

export default LayoutInner
