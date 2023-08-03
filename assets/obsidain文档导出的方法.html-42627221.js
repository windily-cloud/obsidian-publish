import{_ as o}from"./plugin-vue_export-helper-c27b6911.js";import{r as l,o as s,c as t,a as e,b as n,d as r,e as a}from"./app-ccd06bc9.js";const d={},c=e("h1",{id:"md-文档导出的方式类型",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#md-文档导出的方式类型","aria-hidden":"true"},"#"),n(" md 文档导出的方式类型")],-1),p={href:"https://pandoc.org/MANUAL.html",target:"_blank",rel:"noopener noreferrer"},m={href:"https://phantomjs.org/",target:"_blank",rel:"noopener noreferrer"},b={href:"https://github.com/puppeteer/puppeteer",target:"_blank",rel:"noopener noreferrer"},u={href:"https://calibre-ebook.com/download",target:"_blank",rel:"noopener noreferrer"},h={href:"https://www.princexml.com/",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.bookstack.cn/read/mpe/zh-cn-_sidebar.md",target:"_blank",rel:"noopener noreferrer"},_=e("h1",{id:"md-文档导出的大致思路",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#md-文档导出的大致思路","aria-hidden":"true"},"#"),n(" md 文档导出的大致思路")],-1),f=e("p",null,"文档导出要解决三个问题：",-1),g=e("ol",null,[e("li",null,"语法：不转换为 HTML，私有语法只能原文导出"),e("li",null,"排版和样式：toc，css，页眉页脚，页边距等均有模板控制"),e("li",null,"静态资源：大多数情况为图片，自定义比较麻烦，得写 css")],-1),x=e("p",null,"一般情况下，因为 md 文档是 HTML 的上层应用抽象，需要对文档语法进行转换，普遍的思路是先转为 HTML 这样的富文本格式，再根据需要导出成其它文档格式。这就需要用到 css 控制版面样式了。",-1),k={href:"https://github.com/OliverBalfour/obsidian-pandoc",target:"_blank",rel:"noopener noreferrer"},P=a(`<h1 id="md-文档导出的最佳实践" tabindex="-1"><a class="header-anchor" href="#md-文档导出的最佳实践" aria-hidden="true">#</a> md 文档导出的最佳实践</h1><p>pandoc 导出 pdf 一般人能做到的最大程度就是定制 pandoc 的导出模板，前置条件还要安装 latex 和相应的包，许多人折腾起来或许连环境都搭不起来。</p><p>calibre 有优化过的电子书导出模式。</p><p>我的实践是，优先级从前到后：</p><ol><li>obsidian 默认导出最方便，自定义导出得用 css 自定义，尚未发现完整的教程，得自己查。优点是 obsidian 的语法一样能调，缺点是 toc 这些目前没找到方法，但能通过外部程序加。如下是修改页眉页脚的示例代码片段：</li></ol><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>@media print {
    @page:right{
        @bottom-left {
            margin: 10pt 0 30pt 0;
            border-top: .25pt solid #666;
            content: &quot;Our Cats&quot;;
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol><li>浏览器，无头浏览器 PhantomJS，puppeteer 自定义起来和 obsidian 的操作差不多，都是修改 css，默认导出也方便。</li><li>Prince 这样对 HTML 导出有优化的方式，有着一些不错的模板，强大，漂亮，相当于上述两者的整合工具。</li><li>pandoc 方式：放在后面是因为 pandoc 自定义起来实在太麻烦，强大，但得付出太多代价，一般人还真耗不起。</li><li>calibre：我试了，pdf 转电子书好几次失败了，有转换程序，但就是没结果。反正我也不打算用它，不管了。</li></ol>`,7);function w(L,H){const i=l("ExternalLinkIcon");return s(),t("div",null,[c,e("ol",null,[e("li",null,[e("a",p,[n("Pandoc"),r(i)]),n("：导出包括 Word，PDF，RTF，Beamer，Bibliographiew 等众多格式，无所不能")]),e("li",null,[e("a",m,[n("PhantomJS - Scriptable Headless Browser"),r(i)]),n("：导出 PDF, PNG，JPEG 格式")]),e("li",null,[e("a",b,[n("puppeteer/puppeteer: Headless Chrome Node.js API (github.com)"),r(i)]),n("：获得 chrome 浏览器导出功能")]),e("li",null,[e("a",u,[n("calibre - Download calibre (calibre-ebook.com)"),r(i)]),n("：导出 ePub，PDF，HTML 等多种格式")]),e("li",null,[e("a",h,[n("Prince - Convert HTML to PDF with CSS (princexml.com)"),r(i)]),n("：增强版从 HTML 导出 PDF，具有堪比 latex 的排版效果")]),e("li",null,[e("a",v,[n("vscode插件：markdown preview enhanced文档"),r(i)]),n("：vscode 插件结合上述方式的导出")])]),_,f,g,x,e("p",null,[n("而在 obsidian 中，css 控制 md 渲染的一般样式，打印 css 还得自己写，一般的 css 才会在默认导出的样式中，没有打印的 css，势必造成导出的样式和我们看到的样式不同。所以对于 obsidian 还需要写打印 css。同理，我们用 pandoc 导出 pdf 的页面和在 obsidian 中也看到的不一样，pandoc 采用的是一套默认的模板进行导出的。那么我们就需要修改 pandoc 的默认模板，让其按照我们想要的样式和格式导出。 "),e("a",k,[n("obsidian-pandoc"),r(i)]),n(" 就提供这样的修改方式。")]),P])}const B=o(d,[["render",w],["__file","obsidain文档导出的方法.html.vue"]]);export{B as default};
