import React from "react"
import Header from "./header"
import Footer from "./footer"

const Layout = ({ pageContext: { menu } }) => {
  return(<>
    <Header/>
    <section class="flex flex-col gap-8 text-justify lg:flex-row-reverse lg:items-start lg:gap-0">
      <div class="w-full max-w-[527px] relative mx-auto">
        <img class="lg:absolute lg:inset-0 object-cover lg:max-w-[114%] xl:-top-20 lg:-top-12" src="images/office-nobackground-animation-upscaled.gif" alt="office" width="640" height="480"/>
      </div>
      <div class="flex-1 prose xl:prose-xl lg:min-w-[35rem] mx-auto">
        <p>This collection of manuscripts is devoted to fellow automation fighters who still live behind the walls of the enterprise <strong class="text-indigo-900 text-xxs md:text-xs font-pixelmania">HTTP</strong> <strong class="text-blue-500 text-xxs md:text-xs font-pixelmania">PROXY</strong> within the dungeon of the corporate firewall.</p>
        <p>The <strong class="text-red-500 text-xxs md:text-xs font-pixelmania">EVIL</strong> <strong class="text-blue-500 text-xxs md:text-xs font-pixelmania">PROXY</strong> makes their daily heroic automation endeavors harder. Reaching the vast ocean of the Internet is not as easy as for the free start-up nomads.</p>
        <p>The magic automation spells do not always work when the enterprise sorcerers have to blend several tools.</p>
        <p><strong class="text-xxs md:text-xs font-pixelmania text-lime-500">NO MORE</strong> should they suffer!</p>
      </div>
    </section>
    <Footer/>
  </>)
}

export default Layout
