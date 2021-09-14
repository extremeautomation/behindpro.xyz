var menu = JSON.parse(require("fs").readFileSync("src/data/tools.json"))

exports.createPages = ({ actions: { createPage } }) => {
  createPage({
    path: "/",
    component: require.resolve("./src/layout/layout.js"),
    context: { data: menu }
  })

  menu.forEach(topitem => {
    topitem.tools.forEach(subitem => {
      createPage({
        path: `/${subitem}`,
        component: require.resolve("./src/layout/layoutinner.js"),
        context: { data: menu }
      })
    })
  })
}
