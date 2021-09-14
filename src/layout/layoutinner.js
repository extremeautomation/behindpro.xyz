import React from "react"
import { Link } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "../css/index.css"

import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';

const LayoutInner = ({ pageContext: { data }}) => {
  return(<>
           <Header/>
           <div>
             <menu>
               {data.map(topitem => <Accordion square={true} className={"accordion"}>
                                      <AccordionSummary expandIcon={<ExpandMoreIcon/>} className={"accordionSummary"}>{topitem.title}</AccordionSummary>
                                      <AccordionDetails className={"accordionDetails"}>
                                        {topitem.tools.map((subitem, index) => <li key={index}><Link to={`/${subitem}`} className={"tools"}>{subitem}</Link></li>)}
                                      </AccordionDetails>
                                    </Accordion>)}
             </menu>
           </div>
           <Footer/>
         </>)
}

export default LayoutInner
