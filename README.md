## Project structure

    .
    ├── .github/
    ├──── workflows/
    ├────── gatsby.yml
    ├── src/
    ├──── css/
    ├────── index.css
    ├──── data/
    ├────── tools.json
    ├──── fonts/
    ├────── *.woff
    ├──── layout/
    ├────── *.js
    ├──── pages/
    ├────── 404.js
    ├────── *.md
    ├── static/
    ├──── images/
    ├────── icons/
    ├──────── *.png
    ├────── logos/
    ├──────── *.png
    ├── .gitignore
    ├── CNAME
    ├── LICENSE
    ├── README.md
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── package-lock.json
    └── package.json

**`/src/css/index.css`**: Style sheets used in this project

**`/src/data/tools.json`**: List of tools described in this project

**`/src/layout/*.js`**: Source code that builds website layouts

**`/src/pages/404.js`**: Not found page redirects to title page

**`/src/pages/*.md`**: Articles to corresponding tools.json

**`/static/images/icons/*.png`**: Favicons for this website

**`/static/images/logos/*.png`**: Corresponding logos of tools used on the title page and inner pages

**`gatsby-config.js`**: Main configuration file

**`gatsby-node.js`**: Code used to generate website structure
