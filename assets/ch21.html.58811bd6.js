import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as o,e as a}from"./app.887b133c.js";const r={},s=a('<h1 id="chap21-screaming-architecture-\u5C16\u53EB\u7684\u8F6F\u4EF6\u67B6\u6784" tabindex="-1"><a class="header-anchor" href="#chap21-screaming-architecture-\u5C16\u53EB\u7684\u8F6F\u4EF6\u67B6\u6784" aria-hidden="true">#</a> Chap21. SCREAMING ARCHITECTURE \u5C16\u53EB\u7684\u8F6F\u4EF6\u67B6\u6784</h1><p>Imagine that you are looking at the blueprints of a building. This document, prepared by an architect, provides the plans for the building. What do these plans tell you?</p><blockquote><p>\u5047\u8BBE\u6211\u4EEC\u73B0\u5728\u6B63\u5728\u67E5\u770B\u67D0\u4E2A\u5EFA\u7B51\u7684\u8BBE\u8BA1\u67B6\u6784\u56FE\uFF0C\u90A3\u4E48\u5728\u8FD9\u4E2A\u53CD\u6620\u5EFA\u7B51\u8BBE\u8BA1\u5E08\u7CBE\u5FC3\u8BBE\u8BA1\u6210\u679C\u7684\u6587\u4EF6\u4E2D\uFF0C\u7A76\u7ADF\u5E94\u8BE5\u662F\u600E\u6837\u7684\u67B6\u6784\u56FE\u5462\uFF1F</p></blockquote><p>If the plans you are viewing are for a single-family residence, then you\u2019ll likely see a front entrance, a foyer leading to a living room, and perhaps a dining room. There will likely be a kitchen a short distance away, close to the dining room. Perhaps there is a dinette area next to the kitchen, and probably a family room close to that. When you looked at those plans, there would be no question that you were looking at a single family home. The architecture would scream: \u201CHOME.\u201D</p><blockquote><p>\u5982\u679C\u8FD9\u662F\u4E00\u5E45\u5355\u6237\u4F4F\u5B85\u7684\u5EFA\u7B51\u67B6\u6784\u56FE\uFF0C\u90A3\u4E48\u6211\u4EEC\u5F88\u53EF\u80FD\u4F1A\u5148\u770B\u5230\u4E00\u4E2A\u5927\u95E8\uFF0C\u7136\u540E\u662F\u4E00\u6761\u8FDE\u63A5\u5230\u8D77\u5C45\u5BA4\u7684\u901A\u9053\uFF0C\u540C\u65F6\u53EF\u80FD\u8FD8\u4F1A\u770B\u5230\u4E00\u4E2A\u9910\u5385\u3002\u63A5\u7740\uFF0C\u8DDD\u79BB\u9910\u5385\u4E0D\u8FDC\u5904\u5E94\u8BE5\u4F1A\u6709\u4E00\u4E2A\u53A8\u623F\uFF0C\u53EF\u80FD\u53A8\u623F\u9644\u4EF6\u8FD8\u4F1A\u6709\u4E00\u4E2A\u975E\u6B63\u5F0F\u7528\u9910\u533A\uFF0C\u6216\u4E00\u4E2A\u4EB2\u5B50\u623F\u3002\u5F53\u6211\u4EEC\u9605\u8BFB\u8FD9\u4E2A\u67B6\u6784\u56FE\u65F6\uFF0C\u5E94\u8BE5\u4E0D\u4F1A\u6000\u7591\u8FD9\u662F\u4E00\u4E2A\u5355\u6237\u4F4F\u5B85\u3002\u51E0\u4E4E\u6574\u4E2A\u5EFA\u7B51\u8BBE\u8BA1\u90FD\u5728\u5C16\u53EB\u7740\u544A\u8BC9\u4F60\uFF1A\u8FD9\u662F\u4E00\u4E2A\u201C\u5BB6\u201D\u3002</p></blockquote><p>Now suppose you were looking at the architecture of a library. You would likely see a grand entrance, an area for check-in/out clerks, reading areas, small conference rooms, and gallery after gallery capable of holding bookshelves for all the books in the library. That architecture would scream: \u201CLIBRARY.\u201D</p><blockquote><p>\u5047\u8BBE\u6211\u4EEC\u9605\u8BFB\u7684\u662F\u4E00\u5E45\u56FE\u4E66\u9986\u7684\u5EFA\u7B51\u8BBE\u8BA1\u56FE\uFF0C\u60C5\u51B5\u4E5F\u5DEE\u4E0D\u591A\u3002\u6211\u4EEC\u5E94\u8BE5\u4F1A\u5148\u770B\u5230\u4E00\u4E2A\u8D85\u5927\u5165\u53E3\uFF0C\u7136\u540E\u662F\u4E00\u4E2A\u7528\u4E8E\u7B7E\u5230/\u7B7E\u51FA\u7684\u529E\u516C\u533A\uFF0C\u63A5\u4E0B\u6765\u662F\u9605\u8BFB\u533A\u3001\u5C0F\u578B\u4F1A\u8BAE\u5BA4\uFF0C\u4EE5\u53CA\u4E00\u6392\u6392\u7684\u4E66\u67B6\u533A\u3002\u540C\u6837\uFF0C\u51E0\u4E4E\u6574\u4E2A\u5EFA\u7B51\u8BBE\u8BA1\u90FD\u5728\u5C16\u53EB\u7740\u8DDF\u4F60\u8BF4\uFF1A\u8FD9\u662F\u4E00\u4E2A\u201C\u56FE\u4E66\u9986\u201D\u3002</p></blockquote><p>So what does the architecture of your application scream? When you look at the top-level directory structure, and the source files in the highest-level package, do they scream \u201CHealth Care System,\u201D or \u201CAccounting System,\u201D or \u201CInventory Management System\u201D? Or do they scream \u201CRails,\u201D or \u201CSpring/Hibernate,\u201D or \u201CASP\u201D?</p><blockquote><p>\u90A3\u4E48\uFF0C\u6211\u4EEC\u7684\u5E94\u7528\u7A0B\u5E8F\u7684\u67B6\u6784\u8BBE\u8BA1\u53C8\u4F1A\u201C\u558A\u201D\u4E9B\u4EC0\u4E48\u5462\uFF1F\u5F53\u6211\u4EEC\u67E5\u770B\u5B83\u7684\u9876\u5C42\u7ED3\u6784\u76EE\u5F55\uFF0C\u4EE5\u53CA\u9876\u5C42\u8F6F\u4EF6\u5305\u4E2D\u7684\u6E90\u4EE3\u7801\u65F6\uFF0C\u5B83\u4EEC\u7A76\u7ADF\u662F\u5728\u558A\u201C\u5065\u5EB7\u7BA1\u7406\u7CFB\u7EDF\u201D\u201C\u8D26\u52A1\u7CFB\u7EDF\u201D \u201C\u5E93\u5B58\u7BA1\u7406\u7CFB\u7EDF\u201D\uFF0C\u8FD8\u662F\u5728\u558A\uFF1A\u201CRails\u201D \u201CSpring/Hibernate\u201D \u201CASP\u201D \u8FD9\u6837\u7684\u6280\u672F\u540D\u8BCD\u5462\uFF1F</p></blockquote><h2 id="the-theme-of-an-architecture-\u67B6\u6784\u8BBE\u8BA1\u7684\u4E3B\u9898" tabindex="-1"><a class="header-anchor" href="#the-theme-of-an-architecture-\u67B6\u6784\u8BBE\u8BA1\u7684\u4E3B\u9898" aria-hidden="true">#</a> THE THEME OF AN ARCHITECTURE \u67B6\u6784\u8BBE\u8BA1\u7684\u4E3B\u9898</h2><p>Go back and read Ivar Jacobson\u2019s seminal work on software architecture: Object Oriented Software Engineering. Notice the subtitle of the book: A Use Case Driven Approach. In this book Jacobson makes the point that software architectures are structures that support the use cases of the system. Just as the plans for a house or a library scream about the use cases of those buildings, so should the architecture of a software application scream about the use cases of the application.</p><blockquote><p>\u5728\u8FD9\u91CC\uFF0C\u518D\u6B21\u63A8\u8350\u8BFB\u8005\u4ED4\u7EC6\u9605\u8BFB Ivar Jacobson \u5173\u4E8E\u8F6F\u4EF6\u67B6\u6784\u8BBE\u8BA1\u7684\u90A3\u672C\u4E66\uFF1AObject Oriented Software Engineering\uFF0C\u8BF7\u8BFB\u8005\u6CE8\u610F\u8FD9\u672C\u4E66\u7684\u526F\u6807\u9898 A Use Case Driven Approach\uFF08\u4E1A\u52A1\u7528\u4F8B\u9A71\u52A8\u7684\u8BBE\u8BA1\u65B9\u5F0F\uFF09\u3002\u5728\u8FD9\u672C\u4E66\u4E2D\uFF0CJacobson \u63D0\u51FA\u4E86\u4E00\u4E2A\u89C2\u70B9\uFF1A\u8F6F\u4EF6\u7684\u7CFB\u7EDF\u67B6\u6784\u5E94\u8BE5\u4E3A\u8BE5\u7CFB\u7EDF\u7684\u7528\u4F8B\u63D0\u4F9B\u652F\u6301\u3002\u8FD9\u5C31\u50CF\u4F4F\u5B85\u548C\u56FE\u4E66\u9986\u7684\u5EFA\u7B51\u8BA1\u5212\u6EE1\u7BC7\u90FD\u5728\u975E\u5E38\u660E\u663E\u5730\u51F8\u663E\u8FD9\u4E9B\u5EFA\u7B51\u7684\u7528\u4F8B\u4E00\u6837\uFF0C\u8F6F\u4EF6\u7CFB\u7EDF\u7684\u67B6\u6784\u8BBE\u8BA1\u56FE\u4E5F\u5E94\u8BE5\u975E\u5E38\u660E\u786E\u5730\u51F8\u663E\u8BE5\u5E94\u7528\u7A0B\u5E8F\u4F1A\u6709\u54EA\u4E9B\u7528\u4F8B\u3002</p></blockquote><p>Architectures are not (or should not be) about frameworks. Architectures should not be supplied by frameworks. Frameworks are tools to be used, not architectures to be conformed to. If your architecture is based on frameworks, then it cannot be based on your use cases.</p><blockquote><p>\u67B6\u6784\u8BBE\u8BA1\u4E0D\u662F\uFF08\u6216\u8005\u8BF4\u4E0D\u5E94\u8BE5\u662F\uFF09\u4E0E\u6846\u67B6\u76F8\u5173\u7684\uFF0C\u8FD9\u4EF6\u4E8B\u4E0D\u5E94\u8BE5\u662F\u57FA\u4E8E\u6846\u67B6\u6765\u5B8C\u6210\u7684\u3002\u5BF9\u4E8E\u6211\u4EEC\u6765\u8BF4\uFF0C\u6846\u67B6\u53EA\u662F\u4E00\u4E2A\u53EF\u7528\u7684\u5DE5\u5177\u548C\u624B\u6BB5\uFF0C\u800C\u4E0D\u662F\u4E00\u4E2A\u67B6\u6784\u6240\u89C4\u8303\u7684\u5185\u5BB9\u3002\u5982\u679C\u6211\u4EEC\u7684\u67B6\u6784\u662F\u57FA\u4E8E\u6846\u67B6\u6765\u8BBE\u8BA1\u7684\uFF0C\u5B83\u5C31\u4E0D\u80FD\u57FA\u4E8E\u6211\u4EEC\u7684\u7528\u4F8B\u6765\u8BBE\u8BA1\u4E86\u3002</p></blockquote><h2 id="the-purpose-of-an-architecture-\u67B6\u6784\u8BBE\u8BA1\u7684\u6838\u5FC3\u76EE\u6807" tabindex="-1"><a class="header-anchor" href="#the-purpose-of-an-architecture-\u67B6\u6784\u8BBE\u8BA1\u7684\u6838\u5FC3\u76EE\u6807" aria-hidden="true">#</a> THE PURPOSE OF AN ARCHITECTURE \u67B6\u6784\u8BBE\u8BA1\u7684\u6838\u5FC3\u76EE\u6807</h2><p>Good architectures are centered on use cases so that architects can safely describe the structures that support those use cases without committing to frameworks, tools, and environments. Again, consider the plans for a house. The first concern of the architect is to make sure that the house is usable\u2014not to ensure that the house is made of bricks. Indeed, the architect takes pains to ensure that the homeowner can make decisions about the exterior material (bricks, stone, or cedar) later, after the plans ensure that the use cases are met.</p><blockquote><p>\u4E00\u4E2A\u826F\u597D\u7684\u67B6\u6784\u8BBE\u8BA1\u5E94\u8BE5\u56F4\u7ED5\u7740\u7528\u4F8B\u6765\u5C55\u5F00\uFF0C\u8FD9\u6837\u7684\u67B6\u6784\u8BBE\u8BA1\u53EF\u4EE5\u5728\u8131\u79BB\u6846\u67B6\u3001\u5DE5\u5177\u4EE5\u53CA\u4F7F\u7528\u73AF\u5883\u7684\u60C5\u51B5\u4E0B\u5B8C\u6574\u5730\u63CF\u8FF0\u7528\u4F8B\u3002\u8FD9\u5C31\u597D\u50CF\u4E00\u4E2A\u4F4F\u5B85\u5EFA\u7B51\u8BBE\u8BA1\u7684\u9996\u8981\u76EE\u6807\u5E94\u8BE5\u662F\u6EE1\u8DB3\u4F4F\u5B85\u7684\u4F7F\u7528\u9700\u6C42\uFF0C\u800C\u4E0D\u662F\u786E\u4FDD\u4E00\u5B9A\u8981\u7528\u7816\u6765\u6784\u5EFA\u8FD9\u4E2A\u623F\u5B50\u3002\u67B6\u6784\u5E08\u5E94\u8BE5\u82B1\u8D39\u66F4\u591A\u7684\u7CBE\u529B\u6765\u786E\u4FDD\u8BE5\u67B6\u6784\u7684\u8BBE\u8BA1\u5728\u6EE1\u8DB3\u7528\u4F8B\u9700\u6C42\u7684\u60C5\u51B5\u4E0B\uFF0C\u5C3D\u53EF\u80FD\u5730\u5141\u8BB8\u7528\u6237\u80FD\u81EA\u7531\u5730\u9009\u62E9\u5EFA\u7B51\u6750\u6599\uFF08\u7816\u5934\u3001\u77F3\u6599\u6216\u8005\u6728\u6750\uFF09\u3002</p></blockquote><p>A good software architecture allows decisions about frameworks, databases, web servers, and other environmental issues and tools to be deferred and delayed. Frameworks are options to be left open. A good architecture makes it unnecessary to decide on Rails, or Spring, or Hibernate, or Tomcat, or MySQL, until much later in the project. A good architecture makes it easy to change your mind about those decisions, too. A good architecture emphasizes the use cases and decouples them from peripheral concerns.</p><blockquote><p>\u800C\u4E14\uFF0C\u826F\u597D\u7684\u67B6\u6784\u8BBE\u8BA1\u5E94\u8BE5\u5C3D\u53EF\u80FD\u5730\u5141\u8BB8\u7528\u6237\u63A8\u8FDF\u548C\u5EF6\u540E\u51B3\u5B9A\u91C6\u7528\u4EC0\u4E48\u6846\u67B6\u3001\u6570\u636E\u5E93\u3001Web \u670D\u52A1\u4EE5\u53CA\u5176\u4ED6\u4E0E\u73AF\u5883\u76F8\u5173\u7684\u5DE5\u5177\u3002\u6846\u67B6\u5E94\u8BE5\u662F\u4E00\u4E2A\u53EF\u9009\u9879\uFF0C\u826F\u597D\u7684\u67B6\u6784\u8BBE\u8BA1\u5E94\u8BE5\u5141\u8BB8\u7528\u6237\u5728\u9879\u76EE\u540E\u671F\u518D\u51B3\u5B9A\u662F\u5426\u91C7\u7528 Rails\u3001Spring\u3001Hibernate\u3001Tomcat\u3001MySQL \u8FD9\u4E9B\u5DE5\u5177\u3002\u540C\u65F6\uFF0C\u826F\u597D\u7684\u67B6\u6784\u8BBE\u8BA1\u8FD8\u5E94\u8BE5\u8BA9\u6211\u4EEC\u5F88\u5BB9\u6613\u6539\u53D8\u8FD9\u4E9B\u51B3\u5B9A\u3002\u603B\u4E4B\uFF0C\u826F\u597D\u7684\u67B6\u6784\u8BBE\u8BA1\u5E94\u8BE5\u53EA\u5173\u6CE8\u7528\u4F8B\uFF0C\u5E76\u80FD\u5C06\u5B83\u4EEC\u4E0E\u5176\u4ED6\u7684\u5468\u8FB9\u56E0\u7D20\u9694\u79BB\u3002</p></blockquote><h2 id="but-what-about-the-web-\u90A3-web-\u5462" tabindex="-1"><a class="header-anchor" href="#but-what-about-the-web-\u90A3-web-\u5462" aria-hidden="true">#</a> BUT WHAT ABOUT THE WEB? \u90A3 Web \u5462</h2><p>Is the web an architecture? Does the fact that your system is delivered on the web dictate the architecture of your system? Of course not! The web is a delivery mechanism\u2014an IO device\u2014and your application architecture should treat it as such. The fact that your application is delivered over the web is a detail and should not dominate your system structure. Indeed, the decision that your application will be delivered over the web is one that you should defer. Your system architecture should be as ignorant as possible about how it will be delivered. You should be able to deliver it as a console app, or a web app, or a thick client app, or even a web service app, without undue complication or change to the fundamental architecture.</p><blockquote><p>Web \u7A76\u7ADF\u662F\u4E0D\u662F\u4E00\u79CD\u67B6\u6784\uFF1F\u5982\u679C\u6211\u4EEC\u7684\u7CFB\u7EDF\u9700\u8981\u4EE5 Web \u5F62\u5F0F\u6765\u4EA4\u4ED8\uFF0C\u8FD9\u662F\u5426\u610F\u5473\u7740\u6211\u4EEC\u53EA\u80FD\u91C7\u7528\u67D0\u79CD\u7CFB\u7EDF\u67B6\u6784\uFF1F\u5F53\u7136\u4E0D\u662F\uFF01Web \u53EA\u662F\u4E00\u79CD\u4EA4\u4ED8\u624B\u6BB5\u2014\u2014\u4E00\u79CD IO \u8BBE\u5907\u2014\u2014\u8FD9\u5C31\u662F\u5B83\u5728\u5E94\u7528\u7A0B\u5E8F\u7684\u67B6\u6784\u8BBE\u8BA1\u4E2D\u7684\u89D2\u8272\u3002\u6362\u53E5\u8BDD\u8BF4\uFF0C\u5E94\u7528\u7A0B\u5E8F\u91C7\u7528 Web \u65B9 \u5F0F\u6765\u4EA4\u4ED8\u53EA\u662F\u4E00\u4E2A\u5B9E\u73B0\u7EC6\u8282\uFF0C\u8FD9\u4E0D\u5E94\u8BE5\u4E3B\u5BFC\u6574\u4E2A\u9879\u76EE\u7684\u7ED3\u6784\u8BBE\u8BA1\u3002\u4E8B\u5B9E\u4E0A\uFF0C\u5173\u4E8E\u4E00\u4E2A\u5E94\u7528\u7A0B\u5E8F\u662F\u5426\u5E94\u8BE5\u4EE5 Web \u5F62\u5F0F\u6765\u4EA4\u4ED8\u8FD9\u4EF6\u4E8B\uFF0C\u5B83\u672C\u8EAB\u5C31\u5E94\u8BE5\u662F\u4E00\u4E2A\u88AB\u63A8\u8FDF\u548C\u5EF6\u540E\u7684\u51B3\u7B56\u3002\u4E00\u4E2A\u7CFB\u7EDF\u5E94\u8BE5\u5C3D\u91CF\u4FDD\u6301\u5B83\u4E0E\u4EA4\u4ED8\u65B9\u5F0F\u4E4B\u95F4\u7684\u65E0\u5173\u6027\u3002\u5728\u4E0D\u66F4\u6539\u57FA\u7840\u67B6\u6784\u8BBE\u8BA1\u7684\u60C5\u51B5\u4E0B\uFF0C\u6211\u4EEC\u5E94\u8BE5\u53EF\u4EE5\u5C06\u4E00\u4E2A\u5E94\u7528\u7A0B\u5E8F\u4EA4\u4ED8\u6210\u547D\u4EE4\u884C\u7A0B\u5E8F\u3001Web \u7A0B\u5E8F\u3001\u5BCC\u5BA2\u6237\u7AEF\u7A0B\u5E8F\u3001Web \u670D\u52A1\u7A0B\u5E8F\u7B49\u4EFB\u4F55\u4E00\u79CD\u5F62\u5F0F\u7684\u7A0B\u5E8F\u3002</p></blockquote><h2 id="frameworks-are-tools-not-ways-of-life-\u6846\u67B6\u662F\u5DE5\u5177\u800C\u4E0D\u662F\u751F\u6D3B\u4FE1\u6761" tabindex="-1"><a class="header-anchor" href="#frameworks-are-tools-not-ways-of-life-\u6846\u67B6\u662F\u5DE5\u5177\u800C\u4E0D\u662F\u751F\u6D3B\u4FE1\u6761" aria-hidden="true">#</a> FRAMEWORKS ARE TOOLS, NOT WAYS OF LIFE \u6846\u67B6\u662F\u5DE5\u5177\u800C\u4E0D\u662F\u751F\u6D3B\u4FE1\u6761</h2><p>Frameworks can be very powerful and very useful. Framework authors often believe very deeply in their frameworks. The examples they write for how to use their frameworks are told from the point of view of a true believer. Other authors who write about the framework also tend to be disciples of the true belief. They show you the way to use the framework. Often they assume an all-encompassing, all-pervading, let-the-framework-do-everything position.</p><blockquote><p>\u5F53\u7136\uFF0C\u6846\u67B6\u901A\u5E38\u53EF\u4EE5\u662F\u975E\u5E38\u5F3A\u5927\u3001\u975E\u5E38\u6709\u7528\u7684\u3002\u4F46\u6846\u67B6\u4F5C\u8005\u5F80\u5F80\u5BF9\u81EA\u5DF1\u5199\u51FA\u7684\u6846\u67B6\u6709\u7740\u6781\u6DF1\u7684\u4FE1\u5FF5\uFF0C\u4ED6\u4EEC\u6240\u5199\u51FA\u6765\u7684\u4F7F\u7528\u624B\u518C\u4E00\u822C\u90FD\u662F\u4ECE\u5982\u4F55\u6210\u4E3A\u8BE5\u6846\u67B6\u7684\u8654\u8BDA\u4FE1\u5F92\u7684\u89D2\u5EA6\u6765\u63CF\u7ED8\u5982\u4F55\u4F7F\u7528\u8FD9\u4E2A\u6846\u67B6\u7684\u3002\u751A\u81F3\u8FD9\u4E9B\u6846\u67B6\u7684\u4F7F\u7528\u8005\u6240\u5199\u7684\u6559\u7A0B\u4E5F\u4F1A\u51FA\u73B0\u8FD9\u79CD\u4F20\u6559\u58EB\u6A21\u5F0F\u3002\u4ED6\u4EEC\u4F1A\u544A\u8BC9\u4F60\u67D0\u4E2A\u6846\u67B6\u662F\u80FD\u5305\u63FD\u4E00\u5207\u3001\u8D85\u8D8A\u4E00\u5207\u3001\u89E3\u51B3\u4E00\u5207\u95EE\u9898\u7684\u5B58\u5728\u3002</p></blockquote><p>This is not the position you want to take.</p><blockquote><p>\u8FD9\u4E0D\u5E94\u8BE5\u6210\u4E3A\u4F60\u7684\u89C2\u70B9\u3002</p></blockquote><p>Look at each framework with a jaded eye. View it skeptically. Yes, it might help, but at what cost? Ask yourself how you should use it, and how you should protect yourself from it. Think about how you can preserve the use-case emphasis of your architecture. Develop a strategy that prevents the framework from taking over that architecture.</p><blockquote><p>\u6211\u4EEC\u4E00\u5B9A\u8981\u5E26\u7740\u6000\u7591\u7684\u6001\u5EA6\u5BA1\u89C6\u6BCF\u4E00\u4E2A\u6846\u67B6\u3002\u662F\u7684\uFF0C\u91C7\u7528\u6846\u67B6\u53EF\u80FD\u4F1A\u5F88\u6709\u5E2E\u52A9\uFF0C\u4F46\u91C7\u7528\u5B83\u4EEC\u7684\u6210\u672C\u5462\uFF1F\u6211\u4EEC\u4E00\u5B9A\u8981\u61C2\u5F97\u6743\u8861\u5982\u4F55\u4F7F\u7528\u4E00\u4E2A\u6846\u67B6\uFF0C\u5982\u4F55\u4FDD\u62A4\u81EA\u5DF1\u3002\u65E0\u8BBA\u5982\u4F55\uFF0C\u6211\u4EEC\u9700\u8981\u4ED4\u7EC6\u8003\u8651\u5982\u4F55\u80FD\u4FDD\u6301\u5BF9\u7CFB\u7EDF\u7528\u4F8B\u7684\u5173\u6CE8\uFF0C\u907F\u514D\u8BA9\u6846\u67B6\u4E3B\u5BFC\u6211\u4EEC\u7684\u67B6\u6784\u8BBE\u8BA1\u3002</p></blockquote><h2 id="testable-architectures-\u53EF\u6D4B\u8BD5\u7684\u67B6\u6784\u8BBE\u8BA1" tabindex="-1"><a class="header-anchor" href="#testable-architectures-\u53EF\u6D4B\u8BD5\u7684\u67B6\u6784\u8BBE\u8BA1" aria-hidden="true">#</a> TESTABLE ARCHITECTURES \u53EF\u6D4B\u8BD5\u7684\u67B6\u6784\u8BBE\u8BA1</h2><p>If your system architecture is all about the use cases, and if you have kept your frameworks at arm\u2019s length, then you should be able to unit-test all those use cases without any of the frameworks in place. You shouldn\u2019t need the web server running to run your tests. You shouldn\u2019t need the database connected to run your tests. Your Entity objects should be plain old objects that have no dependencies on frameworks or databases or other complications. Your use case objects should coordinate your Entity objects. Finally, all of them together should be testable in situ, without any of the complications of frameworks.</p><blockquote><p>\u5982\u679C\u7CFB\u7EDF\u67B6\u6784\u7684\u6240\u6709\u8BBE\u8BA1\u90FD\u662F\u56F4\u7ED5\u7740\u7528\u4F8B\u6765\u5C55\u5F00\u7684\uFF0C\u5E76\u4E14\u5728\u4F7F\u7528\u6846\u67B6\u7684\u95EE\u9898\u4E0A\u4FDD\u6301\u8C28\u614E\u7684\u6001\u5EA6\uFF0C\u90A3\u4E48\u6211\u4EEC\u5C31\u5E94\u8BE5\u53EF\u4EE5\u5728\u4E0D\u4F9D\u8D56\u4EFB\u4F55\u6846\u67B6\u7684\u60C5\u51B5\u4E0B\u9488\u5BF9\u8FD9\u4E9B\u7528\u4F8B\u8FDB\u884C\u5355\u5143\u6D4B\u8BD5\u3002\u53E6\u5916\uFF0C\u6211\u4EEC\u5728\u8FD0\u884C\u6D4B\u8BD5\u7684\u65F6\u5019\u4E0D\u5E94\u8BE5\u8FD0\u884C Web \u670D\u52A1\uFF0C\u4E5F\u4E0D\u5E94\u8BE5\u9700\u8981\u8FDE\u63A5\u6570\u636E\u5E93\u3002\u6211\u4EEC\u6D4B\u8BD5\u7684\u5E94\u8BE5\u53EA\u662F\u4E00\u4E2A\u7B80\u5355\u7684\u4E1A\u52A1\u5B9E\u4F53\u5BF9\u8C61\uFF0C\u6CA1\u6709\u4EFB\u4F55\u4E0E\u6846\u67B6\u3001\u6570\u636E\u5E93\u76F8\u5173\u7684\u4F9D\u8D56\u5173\u7CFB\u3002\u603B\u800C\u8A00\u4E4B\uFF0C\u6211\u4EEC\u5E94\u8BE5\u901A\u8FC7\u7528\u4F8B\u5BF9\u8C61\u6765\u8C03\u5EA6\u4E1A\u52A1\u5B9E\u4F53\u5BF9\u8C61\uFF0C\u786E\u4FDD\u6240\u6709\u7684\u6D4B\u8BD5\u90FD\u4E0D\u9700\u8981\u4F9D\u8D56\u6846\u67B6\u3002</p></blockquote><h2 id="conclusion-\u672C\u7AE0\u5C0F\u7ED3" tabindex="-1"><a class="header-anchor" href="#conclusion-\u672C\u7AE0\u5C0F\u7ED3" aria-hidden="true">#</a> CONCLUSION \u672C\u7AE0\u5C0F\u7ED3</h2><p>Your architecture should tell readers about the system, not about the frameworks you used in your system. If you are building a health care system, then when new programmers look at the source repository, their first impression should be, \u201COh, this is a heath care system.\u201D Those new programmers should be able to learn all the use cases of the system, yet still not know how the system is delivered. They may come to you and say:</p><blockquote><p>\u4E00\u4E2A\u7CFB\u7EDF\u7684\u67B6\u6784\u5E94\u8BE5\u7740\u91CD\u4E8E\u5C55\u793A\u7CFB\u7EDF\u672C\u8EAB\u7684\u8BBE\u8BA1\uFF0C\u800C\u5E76\u975E\u8BE5\u7CFB\u7EDF\u6240\u4F7F\u7528\u7684\u6846\u67B6\u3002\u5982\u679C\u6211\u4EEC\u8981\u6784\u5EFA\u7684\u662F\u4E00\u4E2A\u533B\u7597\u7CFB\u7EDF\uFF0C\u65B0\u6765\u7684\u7A0B\u5E8F\u5458\u7B2C\u4E00\u6B21\u770B\u5230\u5176\u6E90\u7801\u65F6\u5C31\u5E94\u8BE5\u77E5\u9053\u8FD9\u662F\u4E00\u4E2A\u533B\u7597\u7CFB\u7EDF\u3002\u65B0\u6765\u7684\u7A0B\u5E8F\u5458\u5E94\u8BE5\u5148\u4E86\u89E3\u8BE5\u7CFB\u7EDF\u7684\u7528\u4F8B\uFF0C\u800C\u975E\u7CFB\u7EDF\u7684\u4EA4\u4ED8\u65B9\u5F0F\u3002\u4ED6\u4EEC\u53EF\u80FD\u4F1A\u8D70\u8FC7\u6765\u95EE\u4F60\uFF1A</p></blockquote><p>\u201CWe see some things that look like models\u2014but where are the views and controllers?\u201D</p><blockquote><p>&quot;\u6211\u770B\u5230\u4E86\u4E00\u4E9B\u770B\u8D77\u6765\u50CF\u662F\u6A21\u578B\u7684\u4EE3\u7801\u2014\u2014\u4F46\u5B83\u4EEC\u7684\u89C6\u56FE\u548C\u63A7\u5236\u5668\u5728\u54EA\u91CC\uFF1F\u201D</p></blockquote><p>And you should respond:</p><blockquote><p>\u8FD9\u65F6\u4F60\u7684\u56DE\u7B54\u5E94\u8BE5\u662F\uFF1A</p></blockquote><p>\u201COh, those are details that needn\u2019t concern us at the moment. We\u2019ll decide about them later.\u201D</p><blockquote><p>\u201C\u54E6\uFF0C\u6211\u4EEC\u73B0\u5728\u5148\u4E0D\u8003\u8651\u8FD9\u4E9B\u7EC6\u8282\u95EE\u9898\uFF0C\u56DE\u5934\u518D\u6765\u51B3\u5B9A\u5E94\u8BE5\u600E\u4E48\u505A\u3002\u201D</p></blockquote>',41),h=[s];function i(n,c){return t(),o("div",null,h)}const d=e(r,[["render",i],["__file","ch21.html.vue"]]);export{d as default};
