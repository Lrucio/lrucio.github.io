import { defineConfig } from 'vitepress'
import { defineTeekConfig } from "vitepress-theme-teek/config";
// Teek 主题配置
const teekConfig = defineTeekConfig({
  author: { name: "数智医嘱", link: "https://github.com/Kele-Bingtang" },
  footerInfo: {
    theme: {
      name: '数智医嘱',
      link: "https://github.com/Kele-Bingtang"
    },
    copyright: {
      createYear: 2025,
    },
  },
  articleShare: { enabled: true },
  vitePlugins: {
    sidebarOption: {
      initItems: false,
    },
  },
  markdown: {
    demo: {
      githubUrl: "https://github.com/Kele-Bingtang/vitepress-theme-teek/blob/master/docs",
    },
  },
  siteAnalytics: {
    provider: "baidu",
    options: {
      id: "d5ee872d9aa1ef8021f4a3921b2e9c2a",
    },
  },
});
// https://vitepress.dev/reference/site-config
export default defineConfig({
  extends: teekConfig,
  title: "数智医嘱",
  description: "数智医嘱开发文档",
  cleanUrls: true,
  lastUpdated: true,
  lang: "zh-CN",
  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: "/teek-logo-mini.svg" }],
    ["link", { rel: "icon", type: "image/png", href: "/teek-logo-mini.png" }],
    [
      "meta",
      {
        name: "viewport",
        content: "width=device-width,initial-scale=1,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no",
      },
    ],
  ],
  markdown: {
    // 开启行号
    lineNumbers: true,
    image: {
      // 默认禁用；设置为 true 可为所有图片启用懒加载。
      lazyLoading: true,
    },
    // 更改容器默认值标题
    container: {
      tipLabel: "提示",
      warningLabel: "警告",
      dangerLabel: "危险",
      infoLabel: "信息",
      detailsLabel: "详细信息",
    },
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: "/teek-logo-mini.svg",
    darkModeSwitchLabel: "主题",
    sidebarMenuLabel: "菜单",
    returnToTopLabel: "返回顶部",
    lastUpdatedText: "上次更新时间",
    outline: {
      level: [2, 4],
      label: "本页导航",
    },
    docFooter: {
      prev: "上一页",
      next: "下一页",
    },
    nav: [
      { text: "首页", link: "/" },
      { text: "指南", link: "/guide/intro", activeMatch: "/01.指南/" },
      { text: "硬件端", link: "/reference/config", activeMatch: "/02.硬件端/" },
      { text: "小程序", link: "/develop/intro", activeMatch: "/03.小程序/" },
      { text: "后台", link: "/develop/intro", activeMatch: "/04.后台/" },
      { text: "常见问题", link: "/theme/qa", activeMatch: "/20.常见问题/" },
      {
        text: "生态",
        items: [
          { text: "unibest(增强模板)", link: "https://www.unibest.tech/" },
          { text: "wot-design-uni(组件)", link: "https://wot-design-uni.netlify.app/" },
          { text: "uniapp(框架)", link: "https://uniapp.dcloud.net.cn/" },
          { text: "iconfont(图标库)", link: "https://www.iconfont.cn/" },
        ],
      },
    ],
    editLink: {
      text: "在 GitLab 上编辑此页",
      pattern: "https://github.com/Kele-Bingtang/vitepress-theme-teek/edit/master/docs/:path",
    },
  },
})
