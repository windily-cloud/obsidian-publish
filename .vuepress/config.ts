import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import theme from "./theme.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Windily Cloud",
  description: "Windily Cloud's Blog",

  base: "/obsidian-publish/",

  markdown: {
    headers: {
      level: [1,2,3]
    }
  },

  plugins: [
    searchPlugin({}),
  ],

  theme,
});
