import type { TeekConfig } from "vitepress-theme-teek/config";

// 文档配置
export const teekDocConfig: TeekConfig = {
  themeSetting: {
    themeSize: "large",
  },
};

// 博客配置
export const teekBlogConfig: TeekConfig = {
  teekHome: true,
  vpHome: false,
  themeSetting: {
    themeSize: "default",
  },
  wallpaper: {
    enabled: true,
  },
  post: {
    imageViewer: {
      hideOnClickModal: true,
    },
  },
  banner: {
    name: "🎉 Lrucio",
    bgStyle: "fullImg",
    imgSrc: ["/blog/banner-bg1.jpg", "/blog/banner-bg2.jpg", "/blog/banner-bg3.jpg"],
    description: [
      "故事由我书写，旅程由你见证，传奇由她聆听",
      "积跬步以至千里，致敬每个爱学习的你",
      "这一生波澜壮阔或是不惊都没问题",
    ],
    descStyle: "types",
  },
  blogger: {
    avatar: "https://testingcf.jsdelivr.net/gh/Kele-Bingtang/static/user/avatar1.png",
    shape: "square",
    name: "Lrucio",
    slogan: "朝圣的使徒，正在走向至高殿堂！",
  },
  docAnalysis: {
    createTime: "2025-03-23",
    statistics: {
      provider: "busuanzi",
    },
  },
};
