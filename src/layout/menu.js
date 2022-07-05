import React from "react"
//  import { navigate } from "gatsby"
//  import Accordion from "@material-ui/core/Accordion"
//  import AccordionSummary from "@material-ui/core/AccordionSummary"
//  import AccordionDetails from "@material-ui/core/AccordionDetails"
//  import ExpandMoreIcon from "@material-ui/icons/ExpandMore"
//  import { makeStyles } from "@material-ui/core/styles"

const Menu = ({ menu }) => {
  /*
  var classesAccordionSummary = makeStyles((theme) => ({
    root: {
      font: "20pt Pixel Matrix",
      backgroundColor: "#d53f54",
    }
  }))
  classesAccordionSummary = classesAccordionSummary()

  var classesAccordionDetails = makeStyles((theme) => ({
    root: {
      backgroundColor: "#5b6891"
    }
  }))
  classesAccordionDetails = classesAccordionDetails()
  */
  Array.from(Object.entries(menu)).map(
    (topitem, topindex) => <div>{topitem}{topindex}</div>
  )
}

export default Menu
