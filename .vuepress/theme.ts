import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar.js";
import sidebar from "./sidebar.js";

export default hopeTheme({
  hostname: "https://windily-cloud.github.io",

  author: {
    name: "Windily-Cloud",
    url: "https://windily-cloud.github.io",
  },

  iconAssets: "iconfont",

  logo: "/logo.svg",

  repo: "windily-cloud/obsidian-publish",

  docsDir: "publish/",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,


  footer: "默认页脚",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    description: "世界因你而不同",
    intro: "/intro.html",
    medias: {
      Email: "https://example.com",
      Gitee: "https://example.com",
      GitHub: "https://example.com",
      Gmail: "https://example.com",
      QQ: "https://example.com",
      Rss: "https://example.com",
      Steam: "https://example.com",
    },
  },

  encrypt: {
    config: {
      "/guide/encrypt.html": ["1234"],
    },
  },

  plugins: {
    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
    // comment: {
    /**
     * Using Giscus
     */
    // provider: "Giscus",
    // repo: "vuepress-theme-hope/giscus-discussions",
    // repoId: "R_kgDOG_Pt2A",
    // category: "Announcements",
    // categoryId: "DIC_kwDOG_Pt2M4COD69",

    /**
     * Using Twikoo
     */
    // provider: "Twikoo",
    // envId: "https://twikoo.ccknbc.vercel.app",

    /**
     * Using Waline
     */
    // provider: "Waline",
    // serverURL: "https://vuepress-theme-hope-comment.vercel.app",
    // },

    mdEnhance: {
      align: true,
      attrs: true,
      chart: true,
      codetabs: true,
      container: true,
      demo: true,
      echarts: true,
      flowchart: true,
      gfm: true,
      imageSize: true,
      include: true,
      lazyLoad: true,
      mark: true,
      mermaid: true,
      playground: {
        presets: ["ts", "vue"],
      },
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
      stylize: [
        {
          matcher: "Recommanded",
          replacer: ({ tag }) => {
            if (tag === "em")
              return {
                tag: "Badge",
                attrs: { type: "tip" },
                content: "Recommanded",
              };
          },
        },
      ],
      sub: true,
      sup: true,
      tabs: true,
      tex: true,
      vpre: true,
      vuePlayground: true,
    },
  },
});
