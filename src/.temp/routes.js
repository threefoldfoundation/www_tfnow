const c1 = () => import(/* webpackChunkName: "page--src--templates--markdown-page-vue" */ "/Users/despiegk/code/github/threefoldfoundation/wiki_2020/src/templates/MarkdownPage.vue")
const c2 = () => import(/* webpackChunkName: "page--src--pages--404-vue" */ "/Users/despiegk/code/github/threefoldfoundation/wiki_2020/src/pages/404.vue")
const c3 = () => import(/* webpackChunkName: "page--src--pages--index-vue" */ "/Users/despiegk/code/github/threefoldfoundation/wiki_2020/src/pages/Index.vue")

export default [
  {
    path: "/docs/commento/commento/",
    component: c1
  },
  {
    path: "/docs/zeroci/",
    component: c1
  },
  {
    path: "/docs/website-publisher/",
    component: c1
  },
  {
    path: "/docs/wiki-publisher/",
    component: c1
  },
  {
    path: "/docs/video-conf/",
    component: c1
  },
  {
    path: "/docs/video-sharing/",
    component: c1
  },
  {
    path: "/docs/virtual-spaces/",
    component: c1
  },
  {
    path: "/img/readme/",
    component: c1
  },
  {
    path: "/docs/tfgrid/",
    component: c1
  },
  {
    path: "/docs/tomochain/",
    component: c1
  },
  {
    path: "/docs/serverless/",
    component: c1
  },
  {
    path: "/docs/harmony/",
    component: c1
  },
  {
    path: "/docs/gitea/",
    component: c1
  },
  {
    path: "/docs/gridsome/",
    component: c1
  },
  {
    path: "/docs/dash/",
    component: c1
  },
  {
    path: "/docs/digibyte/",
    component: c1
  },
  {
    path: "/docs/digitalme/",
    component: c1
  },
  {
    path: "/docs/dmcircles/",
    component: c1
  },
  {
    path: "/docs/dmcollab/",
    component: c1
  },
  {
    path: "/docs/dmcustomers/",
    component: c1
  },
  {
    path: "/docs/dmoffice/",
    component: c1
  },
  {
    path: "/docs/blog-publisher/",
    component: c1
  },
  {
    path: "/docs/crystaltwin/",
    component: c1
  },
  {
    path: "/docs/",
    component: c1
  },
  {
    name: "404",
    path: "/404/",
    component: c2
  },
  {
    name: "home",
    path: "/",
    component: c3
  },
  {
    name: "*",
    path: "*",
    component: c2
  }
]
