---
title: obsidain文档导出的方法
tags: 
share: true
mtime: 2022-09-17
ctime: 2022-09-16
---

# md 文档导出的方式类型

1. [Pandoc](https://pandoc.org/MANUAL.html)：导出包括 Word，PDF，RTF，Beamer，Bibliographiew 等众多格式，无所不能
2. [PhantomJS - Scriptable Headless Browser](https://phantomjs.org/)：导出 PDF, PNG，JPEG 格式
3. [puppeteer/puppeteer: Headless Chrome Node.js API (github.com)](https://github.com/puppeteer/puppeteer)：获得 chrome 浏览器导出功能
4. [calibre - Download calibre (calibre-ebook.com)](https://calibre-ebook.com/download)：导出 ePub，PDF，HTML 等多种格式
5. [Prince - Convert HTML to PDF with CSS (princexml.com)](https://www.princexml.com/)：增强版从 HTML 导出 PDF，具有堪比 latex 的排版效果
6. [vscode插件：markdown preview enhanced文档](https://www.bookstack.cn/read/mpe/zh-cn-_sidebar.md)：vscode 插件结合上述方式的导出

# md 文档导出的大致思路

文档导出要解决三个问题：

1. 语法：不转换为 HTML，私有语法只能原文导出
2. 排版和样式：toc，css，页眉页脚，页边距等均有模板控制
3. 静态资源：大多数情况为图片，自定义比较麻烦，得写 css

一般情况下，因为 md 文档是 HTML 的上层应用抽象，需要对文档语法进行转换，普遍的思路是先转为 HTML 这样的富文本格式，再根据需要导出成其它文档格式。这就需要用到 css 控制版面样式了。

而在 obsidian 中，css 控制 md 渲染的一般样式，打印 css 还得自己写，一般的 css 才会在默认导出的样式中，没有打印的 css，势必造成导出的样式和我们看到的样式不同。所以对于 obsidian 还需要写打印 css。同理，我们用 pandoc 导出 pdf 的页面和在 obsidian 中也看到的不一样，pandoc 采用的是一套默认的模板进行导出的。那么我们就需要修改 pandoc 的默认模板，让其按照我们想要的样式和格式导出。 [obsidian-pandoc](https://github.com/OliverBalfour/obsidian-pandoc) 就提供这样的修改方式。

# md 文档导出的最佳实践

pandoc 导出 pdf 一般人能做到的最大程度就是定制 pandoc 的导出模板，前置条件还要安装 latex 和相应的包，许多人折腾起来或许连环境都搭不起来。

calibre 有优化过的电子书导出模式。

我的实践是，优先级从前到后：

1. obsidian 默认导出最方便，自定义导出得用 css 自定义，尚未发现完整的教程，得自己查。优点是 obsidian 的语法一样能调，缺点是 toc 这些目前没找到方法，但能通过外部程序加。如下是修改页眉页脚的示例代码片段：

  ```
  @media print {
      @page:right{
          @bottom-left {
              margin: 10pt 0 30pt 0;
              border-top: .25pt solid #666;
              content: "Our Cats";
              font-size: 9pt;
              color: #333;
          }
          @bottom-right {
              margin: 10pt 0 30pt 0;
              border-top: .25pt solid #666;
              content: counter(page);
              font-size: 9pt;
          }
          @top-right {
              content:  string(doctitle);
              margin: 30pt 0 10pt 0;
              font-size: 9pt;
              color: #333;
          }
      }
  }
  ```

2. 浏览器，无头浏览器 PhantomJS，puppeteer 自定义起来和 obsidian 的操作差不多，都是修改 css，默认导出也方便。
3. Prince 这样对 HTML 导出有优化的方式，有着一些不错的模板，强大，漂亮，相当于上述两者的整合工具。
4. pandoc 方式：放在后面是因为 pandoc 自定义起来实在太麻烦，强大，但得付出太多代价，一般人还真耗不起。
5. calibre：我试了，pdf 转电子书好几次失败了，有转换程序，但就是没结果。反正我也不打算用它，不管了。
