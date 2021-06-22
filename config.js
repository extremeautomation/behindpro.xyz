const config = {
  gatsby: {
    pathPrefix: '/',
    siteUrl: 'https://behindpro.xyz/',
    gaTrackingId: null,
    trailingSlash: true,
  },
  header: {
    logo: '/logo.png',
    logoLink: 'https://behindpro.xyz/',
    title: "",
    githubUrl: 'https://github.com/extremeautomation/behindpro.xyz',
    helpUrl: '',
    tweetText: '',
    social: `<li>
		    <a href="https://twitter.com/behindpro.xyz" target="_blank" rel="noopener">
		      <div class="twitterBtn">
		        <img src='/twitter-brands-block.svg' alt={'Twitter'}/>
		      </div>
		    </a>
		  </li>
			<li>
		    <a href="https://discordapp.com/invite/behindpro.xyz" target="_blank" rel="noopener">
		      <div class="discordBtn">
		        <img src='/discord-brands-block.svg' alt={'Discord'}/>
		      </div>
		    </a>
		  </li>`,
    links: [{ text: '', link: '' }],
    search: {
      enabled: false,
      indexName: '',
      algoliaAppId: process.env.GATSBY_ALGOLIA_APP_ID,
      algoliaSearchKey: process.env.GATSBY_ALGOLIA_SEARCH_KEY,
      algoliaAdminKey: process.env.ALGOLIA_ADMIN_KEY,
    },
  },
  sidebar: {
    forcedNavOrder: [
      '/introduction', // add trailing slash if enabled above
      '/codeblock',
    ],
    collapsedNav: [
      '/codeblock', // add trailing slash if enabled above
    ],
    links: [{ text: 'Extreme Automation', link: 'https://extremeautomation.io/' }],
    frontline: false,
    ignoreIndex: true,
    title: "",
  },
  siteMetadata: {
    title: '',
    description: 'Proxy Configuration Tutorials',
    ogImage: null,
    docsLocation: 'https://behindpro.xyz/',
    favicon: '/icon.png',
  },
  pwa: {
    enabled: false, // disabling this will also remove the existing service worker.
    manifest: {
      name: 'Gatsby Gitbook Starter',
      short_name: 'GitbookStarter',
      start_url: '/',
      background_color: '#6b37bf',
      theme_color: '#6b37bf',
      display: 'standalone',
      crossOrigin: 'use-credentials',
      icons: [
        {
          src: 'src/pwa-512.png',
          sizes: `512x512`,
          type: `image/png`,
        },
      ],
    },
  },
};

module.exports = config;
