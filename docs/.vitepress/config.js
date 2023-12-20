import nav from './config/nav'
import sidebar from './config/siderbar'
export default {
  title: '全栈小站',
  base: '/',
  description:
    '全栈开发｜nestjs|nextjs|nuxtjs',
  head: [
    [
      'link',
      {
        rel: 'icon',
        href: '/favicon.ico'
      }
    ],
    [
      'link',
      {
        rel: 'stylesheet',
        href: 'https://cdn.bootcdn.net/ajax/libs/KaTeX/0.12.0/katex.min.css'
      }
    ],
    [
      'script',
      {},
      `
      var _hmt = _hmt || [];
      (function() {
        var hm = document.createElement("script");
        hm.src = "https://hm.baidu.com/hm.js?a1928e3d15e2ea2a39cf19172f3a9918";
        var s = document.getElementsByTagName("script")[0]; 
        s.parentNode.insertBefore(hm, s);
      })();

      `
    ]
  ],
  themeConfig: {
    siteTitle: '全栈小站',
    logo: '/logo.svg',
    outlineTitle: '大纲',
    nav,
    sidebar,
    outline: [1, 3],
    footer: {
      message: '我的微信: w314709923x',
      copyright:
        ""
    }
  },
  markdown: {
    config: (md) => {
      // use more markdown-it plugins!markdownItLatex
      md.use(require('markdown-it-katex'))
    }
  }
}
