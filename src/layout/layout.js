import React from "react"
import Header from "./header"
import Footer from "./footer"
import "../css/style.css"

const Layout = ({ pageContext: { menu } }) => {
  return(<>
    <Header menu={menu}/>
    <section style={{ padding: "40px", display: "flex", flexDirection: "row", flexWrap: "nowrap", justifyContent: "flex-start", alignContent: "stretch", alignItems: "flex-start" }}>
      <div style={{ flex: "0 1 60%", font: "20px segoe ui", color: "#374151", textAlign: "justify" }}>
        <p style={{ marginBottom: "20px" }}>This collection of manuscripts is devoted to fellow <strong style={{ font: "12px pixelmania", color: "#DCDC14" }}>AUTOMATION</strong> fighters who still live behind the walls of the enterprise <strong style={{ font: "12px pixelmania", color: "#3214A9" }}>HTTP</strong> <strong style={{ font: "12px pixelmania", color: "#111111" }}>PROXY</strong> within the dungeon of the corporate firewall.</p>
        <p style={{ marginBottom: "20px" }}>The <strong style={{ font: "12px pixelmania", color: "#D85252" }}>EVIL</strong> <strong style={{ font: "12px pixelmania", color: "#111111" }}>PROXY</strong> makes their daily heroic <strong style={{ font: "12px pixelmania", color: "#DCDC14" }}>AUTOMATION</strong> endeavors harder. Reaching the vast ocean of the Internet is not as easy as for the free start-up nomads.</p>
        <p style={{ marginBottom: "20px" }}>The magic <strong style={{ font: "12px pixelmania", color: "#DCDC14" }}>AUTOMATION</strong> spells do not always work when the enterprise sorcerers have to blend several tools.</p>
        <p style={{ marginBottom: "20px" }}><strong style={{ font: "12px pixelmania", color: "#57C530" }}>NO MORE</strong> should they suffer!</p>
      </div>
      <div style={{ flex: "0 1 40%", paddingBottom: "30px" }}><img src="images/office.gif" width="640" height="480" alt="office"/></div>
    </section>
    <Footer/>
  </>)
}

export default Layout
