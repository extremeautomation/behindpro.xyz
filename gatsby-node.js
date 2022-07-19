// create static pages
exports.createPages = async ({ graphql, actions: { createPage } }) => {

  // fetch list of markdown files
  const result = await graphql(`{ allMarkdownRemark (
    sort: { fields: [frontmatter___category, fileAbsolutePath], order: ASC }
  ) {
    nodes {
      frontmatter {
        category
        title
        description
        keywords
        date
      }
      fileAbsolutePath
      html
    }
  } }`)

  let menu = {}

  // create menu array of articles
  result.data.allMarkdownRemark.nodes.forEach(({ html, frontmatter: fm, fileAbsolutePath: page }) => {
    // file basename
    page = page.split(/[\\/]/).pop()
    page = page.split(/\./).shift()

    // initialize with empty object
    if (!menu.hasOwnProperty(fm.category)) {
      menu[fm.category] = []
    }

    // push markdown structure
    menu[fm.category].push({
      "html": html,
      "page": page,
      "fm": fm
    })
  })

  // create title page
  createPage({
    path: "/",
    component: require.resolve("./src/layout/layout.js"),
    context: { "menu": menu }
  })

  // secondary pages
  Object.values(menu).forEach(top => {
    Object.values(top).forEach(sub => {
      createPage({
        path: `/${sub.page}`,
        component: require.resolve("./src/layout/layoutinner.js"),
        context: { "html": sub.html, "page": sub.page, "fm": sub.fm, "menu": menu }
      })
  })})

}
