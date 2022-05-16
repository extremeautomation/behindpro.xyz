import React from "react"
import { Link } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import "../css/index.css"

const Layout = ({ pageContext: { menu, page }}) => {
  return(<>
           <Header/>
           <div className={"intro"}>
             <p>This collection of manuscripts is devoted to fellow automation fighters who
                still live behind the walls of the enterprise HTTP proxy.
             </p>
             <p>The proxy makes their daily heroic automation endeavors harder. Reaching the
                vast ocean of the Internet is not as easy as for the free start-up nomads.
             </p>
             <p>The magic automation spells do not always work when the enterprise sorcerers
                have to blend several tools.
             </p>
             <p><hr/></p>
             {menu.map((topitem, topindex) => topitem.tools.map((subitem, subindex) => <Link to={`/${subitem}`} className={"logos"}
                                                                                        key={`Link${topindex}${subindex}`}>
                                                                                         <img
                                                                                          src={`/images/logos/png-pixelated/${subitem}.png`}
                                                                                          width={`120`} alt={`${subitem}`}
                                                                                          key={`img${topindex}${subindex}`}/>
                                                                                       </Link>)
             )}
           </div>
           <Footer/>
         </>)
}

export default Layout
