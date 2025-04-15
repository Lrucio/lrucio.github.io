// https://vitepress.dev/guide/custom-theme
import Teek from 'vitepress-theme-teek'
import TeekLayoutProvider from "./components/TeekLayoutProvider.vue";
import "vitepress-theme-teek/index.css";

import "vitepress-theme-teek/vp-plus/index-rainbow.scss";
import "vitepress-theme-teek/vp-plus/doc-h1-gradient.scss";
import "vitepress-theme-teek/vp-plus/nav-switch-button.scss";
import "vitepress-theme-teek/vp-plus/sidebar.scss";
import "vitepress-theme-teek/vp-plus/aside.scss";
import "vitepress-theme-teek/tk-plus/banner-desc-gradient.scss"; // 博客风格 Banner 描述渐变样式
import type { Theme } from 'vitepress'
import './style.css'

export default {
  extends: Teek,
  Layout: TeekLayoutProvider,
  enhanceApp({ app, router, siteData }) {
    // ...
  }
} satisfies Theme

