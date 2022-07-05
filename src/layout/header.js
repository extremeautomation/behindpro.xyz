import React from "react"
import Helmet from "react-helmet"

import { Link } from "gatsby"
import { GatsbySeo, ArticleJsonLd } from "gatsby-plugin-next-seo"

const Header = ({ pa, fm }) =>
{
  return(<header>

    <Helmet htmlAttributes={{ "lang": "en" }}
            titleTemplate={ "%s - Behind Proxies" }
            title={ fm && fm.title? fm.title: "Introduction" } />

    <GatsbySeo openGraph={{ "title": fm && fm.title? fm.title: "Introduction",
                            "description": fm && fm.description? fm.description: "List of tools",
                            "url": `https://behindpro.xyz/${pa}`,
                            "type": "article",
                            "article": { "publishedTime": fm && fm.date? fm.date: "2022-01-01", "authors": ["Andrey Adamovich"], "tags": fm && fm.keywords? fm.keywords.split(/,\s*/): ["Tool"] },
                            "images": [{ "url": pa && pa.length > 0? `https://behindpro.xyz/static/logos/png-pixelated/${pa}.png`: "https://behindpro.xyz/static/icons/favicon.png", "alt": fm && fm.title? fm.title: "Behind Proxies" }] }} />

    <ArticleJsonLd url={ `https://behindpro.xyz/${pa}`}
                   headline={ fm && fm.title? fm.title: "Introduction" }
                   description={ fm && fm.description? fm.description: "List of tools" }
                   images={[ pa && pa.length > 0? `https://behindpro.xyz/static/logos/png-pixelated/${pa}.png`: "https://behindpro.xyz/static/icons/favicon.png" ]}
                   datePublished={ fm && fm.date? fm.date: "2022-01-01"}
                   authorName="Andrey Adamovich"
                   publisherName="Andrey Adamovich"
                   publisherLogo="https://extremeautomation.io/images/andrey-adamovich.jpg" />

    <div class="flex items-center">
      <a href="#" class="flex items-center flex-shrink-0 -ml-2 text-gray-50 gap-x-4 lg:ml-0">
        <svg class="scale-[.67] xl:scale-100" width="60" height="53" fill="none">
          <path d="M31.875 39.375h-3.75v1.875h3.75v-1.875Z" fill="currentColor" />
          <path d="M58.125 1.875v41.25H1.875V1.875h56.25V0H1.875v1.875H0v41.25h1.875V45H22.5v3.75h-1.875v1.875H18.75V52.5h22.5v-1.875h-1.875V48.75H37.5V45h20.625v-1.875H60V1.875h-1.875ZM22.5 50.625V48.75h1.875V45h11.25v3.75H37.5v1.875h-15Z" fill="currentColor" />
          <path d="M54.375 35.625V7.5H52.5V5.625h-45V7.5H5.625v28.125H7.5V37.5h45v-1.875h-45V7.5h45v28.125h1.875Z" fill="currentColor" />
          <path d="M39.375 15v-1.875H37.5V15h-1.875v-1.875H33.75V15h1.875v1.875H33.75v1.875h1.875v-1.875H37.5v1.875h1.875v-1.875H37.5V15h1.875ZM26.25 15v-1.875h-1.875V15H22.5v-1.875h-1.875V15H22.5v1.875h-1.875v1.875H22.5v-1.875h1.875v1.875h1.875v-1.875h-1.875V15h1.875ZM33.75 20.625h-1.875V22.5h-3.75v-1.875H26.25V22.5h1.875v1.875h3.75V22.5h1.875v-1.875ZM26.25 30v-1.875h9.375V30h3.75v1.875h1.875V30h-1.875v-1.875h-3.75V26.25H26.25v1.875h-1.875V30h1.875Z" fill="currentColor" />
        </svg>
        <span class="font-pixelmania text-xxs lg:text-sm xl:text-base">Behind Proxyz</span>
      </a>
    </div>

    <button type="button" class="p-2 -mx-2 text-gray-50 hamburger z-100 md:hidden" aria-expanded="false">
      <span class="sr-only">Open menu</span>
      <svg class="hamburger-open" width="20" height="18" fill="none" aria-hidden="true">
        <path fill="currentColor" d="M0 0h20v2.5H0zM0 7.5h20V10H0zM0 15h20v2.5H0z" />
      </svg>
      <svg class="hidden hamburger-close" width="21" height="20" fill="none" aria-hidden="true">
        <path d="M8.571 5.714H5.714v2.857h2.857V5.714ZM5.714 2.857H2.857v2.857h2.857V2.857ZM2.857 0H0v2.857h2.857V0ZM2.857 17.143H0V20h2.857v-2.857ZM5.714 14.286H2.857v2.857h2.857v-2.857ZM8.571 11.429H5.714v2.857h2.857v-2.857Z" fill="currentColor" />
        <path d="M11.429 8.571H8.57v2.858h2.858V8.57ZM11.857 5.714h2.857v2.857h-2.857V5.714ZM14.714 2.857h2.857v2.857h-2.857V2.857ZM17.571 0h2.858v2.857H17.57V0ZM17.571 17.143h2.858V20H17.57v-2.857ZM14.714 14.286h2.857v2.857h-2.857v-2.857ZM11.857 11.429h2.857v2.857h-2.857v-2.857Z" fill="currentColor" />
        <path d="M9 8.571h2.857v2.858H9V8.57Z" fill="currentColor" />
      </svg>
    </button>

    <div class="pt-10 pb-6 pl-10">
      <div class="space-y-1">
        <a href="/" class="flex items-center py-1.5 text-xl font-medium gap-x-2.5 text-white">
          Introduction
          <svg role="presentation" width="12" height="20" fill="none">
            <path d="M8.571 5.714H5.714v2.857h2.857V5.714ZM5.714 2.857H2.857v2.857h2.857V2.857ZM2.857 0H0v2.857h2.857V0ZM2.857 17.143H0V20h2.857v-2.857ZM5.714 14.286H2.857v2.857h2.857v-2.857ZM8.571 11.429H5.714v2.857h2.857v-2.857Z" fill="currentColor" />
            <path d="M11.429 8.571H8.57v2.858h2.858V8.57Z" fill="currentColor" />
          </svg>
        </a>
      </div>
    </div>
    {(() => menu.map(top =>
              <div class="pt-10 pb-6 pl-10">
                <div class="space-y-1">
                  <a href="/" class="flex items-center py-1.5 text-xl font-medium gap-x-2.5 text-white">
                    {top}
                    <svg role="presentation" width="12" height="20" fill="none">
                      <path d="M8.571 5.714H5.714v2.857h2.857V5.714ZM5.714 2.857H2.857v2.857h2.857V2.857ZM2.857 0H0v2.857h2.857V0ZM2.857 17.143H0V20h2.857v-2.857ZM5.714 14.286H2.857v2.857h2.857v-2.857ZM8.571 11.429H5.714v2.857h2.857v-2.857Z" fill="currentColor" />
                      <path d="M11.429 8.571H8.57v2.858h2.858V8.57Z" fill="currentColor" />
                    </svg>
                  </a>
                </div>
              </div>)
    )()}
    <div class="flex items-center mt-12 text-white gap-x-3">
      <span class="flex items-center gap-x-1.5">
        Created with
        <svg width="25" height="23" fill="none">
          <title>love</title>
          <path d="M11.111 16.667H8.333v2.777h2.778v-2.777ZM8.333 13.889H5.556v2.777h2.777V13.89ZM5.556 11.111H2.778v2.778h2.778v-2.778ZM2.778 5.556H0v5.555h2.778V5.556ZM5.556 2.778H2.778v2.778h2.778V2.778ZM8.333 0H5.556v2.778h2.777V0ZM11.111 2.778H8.333v2.778h2.778V2.778ZM13.889 5.556H11.11v2.777h2.778V5.556ZM16.667 2.778h-2.778v2.778h2.778V2.778ZM19.444 0h-2.777v2.778h2.777V0ZM22.222 2.778h-2.777v2.778h2.777V2.778ZM22.222 5.556v5.555H25V5.556h-2.778ZM22.222 11.111h-2.777v2.778h2.777v-2.778ZM19.444 13.889h-2.777v2.777h2.777V13.89ZM16.667 16.667h-2.778v2.777h2.778v-2.777Z" fill="currentColor" />
          <path d="M13.889 19.444H11.11v2.778h2.778v-2.778Z" fill="currentColor" />
        </svg>
        by
      </span>
      <img src="images/ea-logo.svg" alt="Extreme Automation" width="120" height="24"/>
    </div>

  </header>)

}

export default Header
