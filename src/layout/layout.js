import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../css/style.css"

const Layout = ({ pageContext: { menu } }) => {
  const colors = ["red", "pink", "green", "salad", "blue", "azure", "yellow", "orange"]
 
  return(<>
    <Header menu={menu}/>
    <main>
      <div>
        <div className="main-logo"><img src="/img/other/office.gif" alt="office"/></div>
        <p align="justify">This collection of manuscripts is devoted to fellow <strong className="red">AUTOMATION</strong> fighters who still live behind the walls of the enterprise <strong className="blue">HTTP</strong> <strong className="yellow">PROXY</strong> within the dungeon of the corporate firewall.</p>
        <p align="justify">The <strong className="green">EVIL</strong> <strong className="yellow">PROXY</strong> makes their daily heroic <strong className="red">AUTOMATION</strong> endeavors harder. Reaching the vast ocean of the Internet is not as easy as for the free start-up nomads.</p>
        <p align="justify">The magic <strong className="red">AUTOMATION</strong> spells do not always work when the enterprise sorcerers have to blend several tools.</p>
        <p align="justify"><strong className="salad">NO MORE</strong> should they suffer!</p>
        {Object.keys(menu).map((cate, index) =>
          <p align="center" className="tools" key={`p1${index}`}>
            <img src="/img/other/hr.png" className="hr" alt="line" key={`img2${index}`}/>
            <br/><span key={`h13${index}`}>
            {cate.split("").map((elem, subindex) =>
              <span className={colors[Math.round(Math.random() * colors.length)]} key={`span1${subindex}`}>{elem}</span>)}:
            </span><br/>
            {menu[cate].map((sub, subindex) =>
              <a href={sub.page} key={`a1${subindex}`}><img src={`/img/logos/png/${sub.page}.png`} width="150" className="logo" alt={sub.page} key={`img2${subindex}`}/></a>)}
          </p>
        )}
      </div>
    </main>
    <Footer/>
  </>)
}

export default Layout
