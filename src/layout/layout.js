import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../css/style.css"

const Layout = ({ pageContext: { menu } }) => {
  const colors = ["red", "pink", "green", "salad", "blue", "azure", "yellow", "orange"]

  return(
    <div align="center">
      <Header menu={menu}/>
      <main id="main">
        <p className="intro">
          <div className="logo-container"><img src="/img/other/office.gif" className="logo" alt="logo"/></div>
          <p>This collection of manuscripts is devoted to fellow <strong className="fgred">AUTOMATION</strong> fighters who still live behind the walls of the enterprise <strong className="fgblue">HTTP</strong> <strong className="fgyellow">PROXY</strong> within the dungeon of the corporate firewall.</p>
          <p>The <strong className="fggreen">EVIL</strong> <strong className="fgyellow">PROXY</strong> makes their daily heroic <strong className="fgred">AUTOMATION</strong> endeavors harder. Reaching the vast ocean of the Internet is not as easy as for the free start-up nomads.</p>
          <p>The magic <strong className="fgred">AUTOMATION</strong> spells do not always work when the enterprise sorcerers have to blend several tools.</p>
          <p><strong className="fgsalad">NO MORE</strong> should they suffer!</p>
        </p>

        {Object.keys(menu).map((cate, catei) =>
          <p className="tools">
            <p align="center">
              {cate.trim().concat(":").split(" ").map((word, wordi) =>
                <span key={`span1${wordi}`} style={{whiteSpace: "nowrap"}}>
                {word.split("").map((letter, letteri) =>
                  <table cellSpacing={0} cellPadding={0} style={{display: 'inline-table'}}>
                  <tr height={3}>
                    <td className={`bg${colors[Math.round(Math.random() * (colors.length - 1))]}`}></td>
                  </tr>
                  <tr>
                    <td className={`fg${colors[Math.round(Math.random() * (colors.length - 1))]}`}><strong>{letter}</strong></td>
                  </tr>
                  </table>
                )}
                </span>
              ).reduce((prev, curr) => [prev, <div className="spacer"></div>, curr])}
            </p>

            <p align="center">
            {menu[cate].map((logo, logoi) =>
              <a key={`a2${logoi}`} href={logo.page}>
                <img key={`img3${logoi}`} src={`/img/logos/png/${logo.page}.png`} width="150" alt={logo.page}/>
              </a>
            )}
            </p>
          </p>
        )}
      </main>
      <Footer/>
    </div>)
}

export default Layout
