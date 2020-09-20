// This is where project configuration and plugin options are located. 
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'ThreeFold',
  icon: {
    favicon: './src/assets/favicon.png',
    touchicon: './src/assets/favicon.png'
  },
siteUrl: (process.env.SITE_URL ? process.env.SITE_URL : 'https://now10.threefold.io'),
  settings: {
    web: process.env.URL_WEB || false,
    twitter: process.env.URL_TWITTER || false,
    github: process.env.URL_GITHUB || false,
    nav: {
      links: [
        { path: '/docs/', title: 'Docs' }
      ]
    },
    sidebar: [
      {
        name: 'docs',
        sections: [
          {
            title: 'Getting Started',
            items: [
              '/docs/',
            ]
          },
          {
            title: 'Decentralized We',
            items: [
            '/docs/video-conf/',
            '/docs/virtual-spaces/',
            '/docs/video-sharing/',
            '/docs/website-publisher/',
            '/docs/wiki-publisher/',
            '/docs/blog-publisher/',
            ]
          },
          {
            title: 'Decentralized Me',
            items: [
	            '/docs/digitalme/',
              '/docs/crystaltwin/',				                  
            ]
           },
           {
            title: 'Decentralized Office',
            items: [
              '/docs/dmcollab/',
              '/docs/dmcircles/',
	            '/docs/dmoffice/',
	            '/docs/dmcustomers/',
            ]
           },
           {
            title: 'Decentralized Cloud',
            items: [
              '/docs/tfgrid/',		                  
            ]
           },
           {
            title: 'Decentralized Code',
            items: [
              '/docs/gitea/',
              '/docs/zeroci/',	
	            '/docs/commento/',
              '/docs/serverless/',	
	            '/docs/gridsome/',
            ]
           },
           {
            title: 'Decentralized Chain',
            items: [
              '/docs/digibyte/',
              '/docs/dash/',	
	            '/docs/harmony/',
              '/docs/tomochain/',	
            ]
           }          
        ]
      }
    ]
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        baseDir: './content',
        path: '**/*.md',
        typeName: 'MarkdownPage',
        remark: {
          externalLinksTarget: '_blank',
          externalLinksRel: ['noopener', 'noreferrer'],
          plugins: [
            '@gridsome/remark-prismjs'
          ]
        }
      }
    },

    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          // Prevent purging of prism classes.
          whitelistPatternsChildren: [
            /token$/
          ]
        }
      }
    },

    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: (process.env.GA_ID ? process.env.GA_ID : 'XX-999999999-9')
      }
    },

    {
      use: '@gridsome/plugin-sitemap',
      options: {  
      }
    }

  ]
}
