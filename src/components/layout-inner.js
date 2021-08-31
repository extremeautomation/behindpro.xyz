import * as React from "react"
import Header from "./header"
import "./layout.css"

const LayoutInner = ({ children }) => {
  return (
    <>
      <Header/>
      <div style={{ margin: `0 auto`, maxWidth: 960 }}>
        <main>{children}</main>
        <footer align="center">
          &copy; {new Date().getFullYear()} <a href="https://extremeautomation.io/">extremeautomation.io</a>
        </footer>
      </div>
    </>
  )
}

export default LayoutInner
