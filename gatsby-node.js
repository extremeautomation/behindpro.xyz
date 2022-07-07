// create static pages
exports.createPages = async ({ graphql, actions: { createPage } }) => {

  // fetch list of markdown files
  const result = await graphql(`{ allMarkdownRemark (
    sort: { fields: [frontmatter___category, fileAbsolutePath], order: ASC }
  ) {
    nodes {
      id
      fileAbsolutePath
      frontmatter {
        category
        title
        description
        keywords
        date
      }
    }
  } }`)

  let menu = {}

  // create menu array of articles
  result.data.allMarkdownRemark.nodes.forEach(({ id, frontmatter: fm, fileAbsolutePath: pa }) => {
    // file basename
    pa = pa.split(/[\\/]/).pop()
    pa = pa.split(/\./).shift()

    // initialize with empty object
    if (!menu.hasOwnProperty(fm.category)) {
      menu[fm.category] = []
    }

    // push markdown structure
    menu[fm.category].push({
      "id": id,
      "pa": pa,
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
        path: `/${sub.pa}`,
        component: require.resolve("./src/layout/layoutinner.js"),
        context: { "id": sub.id, "pa": sub.pa, "fm": sub.fm, "menu": menu }
      })
  })})

}
