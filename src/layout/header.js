import React from "react";
import Helmet from "react-helmet"
import { GatsbySeo, ArticleJsonLd } from "gatsby-plugin-next-seo"
import "../css/header.css"

const Header = ({ page, fm, menu }) => {

  const helmet = {
    htmlAttributes: { "lang": "en" },
    titleTemplate: "%s - Behind Proxyz",
    title: fm && fm.title? fm.title: "Introduction"
  }

  const opengraph = {
    openGraph: {
      title: fm && fm.title? fm.title: "Introduction",
      description: fm && fm.description? fm.description: "List of tools",
      url: `https://behindpro.xyz/${page}`,
      type: "article",
      article: {
        "publishedTime": fm && fm.date? fm.date: "2022-01-01",
        "authors": ["Andrey Adamovich"],
        "tags": fm && fm.keywords? fm.keywords.split(/,\s*/): ["Tool"]
      },
      "images": [{
        "url": page && page.length > 0? `https://behindpro.xyz/static/logos/png-pixelated/${page}.png`:
                                    "https://behindpro.xyz/static/icons/favicon.png",
        "alt": fm && fm.title? fm.title: "Behind Proxies"
      }]
  } }

  const article = {
    url: `https://behindpro.xyz/${page}`,
    headline: fm && fm.title? fm.title: "Introduction",
    description: fm && fm.description? fm.description: "List of tools",
    images: page && page.length > 0? `https://behindpro.xyz/static/logos/png-pixelated/${page}.png`:
                                 "https://behindpro.xyz/static/icons/favicon.png",
    datePublished: fm && fm.date? fm.date: "2022-01-01",
    authorName: "Andrey Adamovich",
    publisherName: "Andrey Adamovich",
    publisherLogo: "https://extremeautomation.io/images/andrey-adamovich.jpg"
  }

  const menuClick = (e) => {
    document.getElementById("burger").classList.toggle("open")
    document.getElementById("menu").classList.toggle("show")
    document.getElementById("blue1").classList.toggle("slide")
    document.getElementById("blue2").classList.toggle("slide")
    e.stopPropagation()
  }

  const subMenuClick = (id) => {
    document.getElementById(`submenu${id}`).classList.toggle("open")
    document.getElementById(`sublist${id}`).classList.toggle("expand")
    document.querySelector("main").height = 5000
    console.log(document.querySelector("main").height)
  }

  return(<>
    <Helmet {...helmet}/><GatsbySeo {...opengraph}/><ArticleJsonLd {...article}/>
    <header>
      <div>
        <div>
          <div>
            <a href="/"><img src="/img/other/logo.png" width="60" height="53" alt="Behind Proxyz"/></a>
          </div>
          <div>
            <a href="/">BEHIND PROXYZ</a>
          </div>
          <div>
            <div id="burger" className="burger" role="button" aria-label="menu" tabIndex="0" onClick={menuClick} onKeyDown={menuClick}>
              <div className="lines"></div>
            </div>
          </div>
        </div>
      </div>
    </header>
    <div id="blue1" className="bg blue1"></div>
    <div id="blue2" className="bg blue2"></div>
    <nav id="menu">
      <div className="love">
        <div>
          <div>
            <span role="link" tabIndex="0" onClick={() => window.location = 'https://extremeautomation.io/'} onKeyDown={null}>
              created with
              <img src="/img/other/love.png" width="25" height="23" alt="love"/>
            </span>
          </div>
          <div>
            <span role="link" tabIndex="0" onClick={() => window.location = 'https://extremeautomation.io/'} onKeyDown={null}>by</span>
          </div>
          <div>
            <span role="link" tabIndex="0" onClick={() => window.location = 'https://extremeautomation.io/'} onKeyDown={null}>
              <img src="/img/other/ea.png" width="120" height="24" alt="extremeautomation.io"/>
            </span>
          </div>
        </div>
      </div>
      {Object.keys(menu).map((cate, index) =>
      <div className="menu" key={`div1${index}`}>
        <div className="menu-row" key={`div2${index}`}>
          <div key={`div3${index}`}>
            <div id={`submenu${index}`} className="burger small" role="button" aria-label={cate} tabIndex="0"
                 onClick={() => subMenuClick(index)} onKeyDown={null} key={`div4${index}`}>
              <div className="lines small" key={`div5${index}`}></div>
            </div>
          </div>
          <div key={`div6${index}`}>
            <span className="cate" role="link" tabIndex="0"
                  onClick={() => subMenuClick(index)} onKeyDown={null} key={`span7${index}`}>{cate}</span>
          </div>
        </div>
        <div id={`sublist${index}`} className="menu-row-group" key={`div8${index}`}>
        {menu[cate].map((subcate, subindex) =>
          <div className="menu-row" key={`div1${subindex}`}>
            <div key={`div2${subindex}`}>&nbsp;&nbsp;&hellip;</div>
            <div key={`div3${subindex}`}><a href={subcate.page} key={`a4${subindex}`}>{subcate.page}</a></div>
          </div>
        )}
        </div>
      </div>
      )}
    </nav>
  </>)
}

export default Header
