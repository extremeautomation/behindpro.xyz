import * as React from "react"
import { Link } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "../css/index.css"

const Layout = ({ pageContext: { data }}) => {
  return(<>
           <Header/>
           <div style={{margin: "0px auto", maxWidth: "960px"}}>
             <p>This collection of manuscripts is devoted to fellow automation fighters who
                still live behind the walls of the enterprise HTTP proxy.</p>
             <p>The proxy makes their daily heroic automation endeavors harder. Reaching the
                vast ocean of the Internet is not as easy as for the free start-up nomads.</p>
             <p>The magic automation spells do not always work when the enterprise sorcerers
                have to blend several tools.</p>
             <hr/>
             <p align="center">
               {data.map(topitem => topitem.tools.map(subitem => <div className="logos">
                                                                   <Link to={`/${subitem}`}>
                                                                     <img src={`/images/logos/${subitem}.png`} width={`64`} alt={`${subitem}`}/>
                                                                   </Link>
                                                                 </div>)
               )}
             </p>
           </div>
           <Footer/>
         </>)
}

export default Layout

