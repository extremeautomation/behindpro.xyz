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
    document.getElementById("navi").classList.remove("show")
    document.getElementById("blue1").classList.remove("slide")
    document.getElementById("blue2").classList.remove("slide")
  }
}

const observer = () => {
  const menu    = document.getElementById("menu").getBoundingClientRect().bottom + window.scrollY + 160
  const content = document.getElementById("main").getBoundingClientRect().bottom + window.scrollY + 120

  document.getElementById("blue1").style.height = Math.max(menu, content) + "px"
  document.getElementById("blue2").style.height = Math.max(menu, content) + "px"

  document.querySelector("footer").style.position = "absolute"
  document.querySelector("footer").style.left = "0px"
  document.querySelector("footer").style.top = (Math.max(menu, content) - 190) + "px"
}

export const onClientEntry = () => {
  window.onload = () => {
    observer()
    new MutationObserver(observer).observe(
      document.getElementById("menu"), {attributes: true, childList: true, subtree: true})
  }
}