import { defineUserConfig } from "vuepress";
import theme from "./theme.js";

export default defineUserConfig({
  lang: "zh-CN",
  title: "Windily Cloud",
  description: "Windily Cloud's Blog",

  base: "/obsidian-publish/",

  theme,
});
