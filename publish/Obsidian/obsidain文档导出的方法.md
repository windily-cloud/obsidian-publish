---
title: obsidain文档导出的方法
tags: 
mtime: 2022-09-16
ctime: 2022-09-16
---

# md文档导出的方式类型

1. [Pandoc](https://pandoc.org/MANUAL.html)：导出包括Word，PDF，RTF，Beamer，Bibliographiew等众多格式，无所不能
2. [PhantomJS - Scriptable Headless Browser](https://phantomjs.org/)：导出PDF, PNG，JPEG格式
3. [puppeteer/puppeteer: Headless Chrome Node.js API (github.com)](https://github.com/puppeteer/puppeteer)：获得chrome浏览器导出功能
4. [calibre - Download calibre (calibre-ebook.com)](https://calibre-ebook.com/download)：导出ePub，PDF，HTML等多种格式
5. [Prince - Convert HTML to PDF with CSS (princexml.com)](https://www.princexml.com/)：增强版从HTML导出PDF，具有堪比latex的排版效果
6. [vscode插件：markdown preview enhanced文档](https://www.bookstack.cn/read/mpe/zh-cn-_sidebar.md)：vscode插件结合上述方式的导出

# md文档导出的大致思路

文档导出要解决三个问题：
1. 语法：不转换为HTML，私有语法只能原文导出
2. 排版和样式：toc，css，页眉页脚，页边距等均有模板控制
3. 静态资源：大多数情况为图片，自定义比较麻烦，得写css

一般情况下，因为md文档是HTML的上层应用抽象，需要对文档语法进行转换，普遍的思路是先转为HTML这样的富文本格式，再根据需要导出成其它文档格式。这就需要用到css控制版面样式了。

而在obsidian中，css控制md渲染的一般样式，打印css还得自己写，一般的css才会在默认导出的样式中，没有打印的css，势必造成导出的样式和我们看到的样式不同。所以对于obsidian还需要写打印css。同理，我们用pandoc导出pdf的页面和在obsidian中也看到的不一样，pandoc采用的是一套默认的模板进行导出的。那么我们就需要修改pandoc的默认模板，让其按照我们想要的样式和格式导出。 [obsidian-pandoc](https://github.com/OliverBalfour/obsidian-pandoc)就提供这样的修改方式。

# md文档导出的最佳实践

pandoc导出pdf一般人能做到的最大程度就是定制pandoc的导出模板，前置条件还要安装latex和相应的包，许多人折腾起来或许连环境都搭不起来。

calibre有优化过的电子书导出模式。

我的实践是，优先级从前到后：
1. obsidian默认导出最方便，自定义导出得用css自定义，尚未发现完整的教程，得自己查。优点是obsidian的语法一样能调，缺点是toc这些目前没找到方法，但能通过外部程序加。如下是修改页眉页脚的示例代码片段：
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
2. 浏览器，无头浏览器PhantomJS，puppeteer自定义起来和obsidian的操作差不多，都是修改css，默认导出也方便。
3. Prince这样对HTML导出有优化的方式，有着一些不错的模板，强大，漂亮，相当于上述两者的整合工具。
4. pandoc方式：放在后面是因为pandoc自定义起来实在太麻烦，强大，但得付出太多代价，一般人还真耗不起。
5. calibre：我试了，pdf转电子书好几次失败了，有转换程序，但就是没结果。反正我也不打算用它，不管了。