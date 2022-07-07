import React from "react"
import Helmet from "react-helmet"
import { GatsbySeo, ArticleJsonLd } from "gatsby-plugin-next-seo"

const Header = ({ pa, fm, menu }) => {

  // html header props
  const helmet = {
    htmlAttributes: { "lang": "en" },
    titleTemplate: "%s - Behind Proxies",
    title: fm && fm.title? fm.title: "Introduction"
  }

  // open graph header props
  const opengraph = {
    openGraph: {
      title: fm && fm.title? fm.title: "Introduction",
      description: fm && fm.description? fm.description: "List of tools",
      url: `https://behindpro.xyz/${pa}`,
      type: "article",
      article: {
        "publishedTime": fm && fm.date? fm.date: "2022-01-01",
        "authors": ["Andrey Adamovich"],
        "tags": fm && fm.keywords? fm.keywords.split(/,\s*/): ["Tool"]
      },
      "images": [{
        "url": pa && pa.length > 0? `https://behindpro.xyz/static/logos/png-pixelated/${pa}.png`:
                                    "https://behindpro.xyz/static/icons/favicon.png",
        "alt": fm && fm.title? fm.title: "Behind Proxies"
      }]
  } }

  // article header props
  const article = {
    url: `https://behindpro.xyz/${pa}`,
    headline: fm && fm.title? fm.title: "Introduction",
    description: fm && fm.description? fm.description: "List of tools",
    images: pa && pa.length > 0? `https://behindpro.xyz/static/logos/png-pixelated/${pa}.png`:
                                 "https://behindpro.xyz/static/icons/favicon.png",
    datePublished: fm && fm.date? fm.date: "2022-01-01",
    authorName: "Andrey Adamovich",
    publisherName: "Andrey Adamovich",
    publisherLogo: "https://extremeautomation.io/images/andrey-adamovich.jpg"
  }

  // return jsx code
  return(
    <header>
      <a name="top"/><Helmet {...helmet}/><GatsbySeo {...opengraph}/><ArticleJsonLd {...article}/>
      <div>
        <img src="images/logo.png" width="60" height="53" alt="Behind Proxyz"/><a href="/">BEHIND PROXYZ</a>
      </div>
    </header>)

}

export default Header
