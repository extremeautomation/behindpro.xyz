document.body.onclick = (e) => {
  let found = false

  for (let elem of document.elementsFromPoint(e.clientX, e.clientY)) {
    if (elem.tagName === "HEADER" || elem.tagName === "FOOTER") {
      found = false
      break
    }

    if (elem.classList.contains("blue1") || elem.classList.contains("blue2")) {
      found = true
    }
  }

  if (!found) {
    document.getElementById("burger").classList.remove("open")
    document.getElementById("menu").classList.remove("show")
    document.getElementById("blue1").classList.remove("slide")
    document.getElementById("blue2").classList.remove("slide")
  }
}