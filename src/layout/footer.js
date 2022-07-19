import React from "react"
import "../css/footer.css"

const Footer = () => {
  return(<footer>
    <div>
      <div>
        <div>
          <span role="link" tabIndex="0" onClick={() => window.scrollTo(0, 0)} onKeyDown={null}>
            <img src="img/other/top.png" width="13" height="8" alt="top"/>
          </span>
        </div>
        <div>
          <span role="link" tabIndex="0" onClick={() => window.scrollTo(0, 0)} onKeyDown={null}>up</span>
        </div>
        <div>
          <span role="link" tabIndex="0" onClick={() => window.scrollTo(0, 0)} onKeyDown={null}>
            <img src="/img/other/top.png" width="13" height="8" alt="top"/>
          </span>
        </div>
      </div>
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
  </footer>)
}

export default Footer
