(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{18:function(e,t,a){e.exports=a.p+"static/media/self_portrait_sm.6174bb46.png"},19:function(e,t,a){e.exports=a(37)},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(16),l=a.n(r),c=(a(24),a(8)),i=a(1);a(25);var s=function(){return o.a.createElement("header",null,o.a.createElement("div",null,o.a.createElement("h1",{className:"name-hero"},"n8blake")))},m=a(6);a(26);var u=function(e){var t=Object(n.useState)({}),a=Object(m.a)(t,2),r=a[0],l=a[1],i=Object(n.useState)({}),s=Object(m.a)(i,2),u=s[0],d=s[1];Object(n.useEffect)((function(){var e=new URL(window.location.href);"/about"===e.pathname||"/"===e.pathname?(d("nav-link"),l("nav-link active")):"/projects"===e.pathname?(d("nav-link active"),l("nav-link")):(l("nav-link"),d("nav-link"))}),[]);var h=function(e){console.log(e.target.href);var t=new URL(e.target.href);"/about"===t.pathname||"/"===t.pathname?(d("nav-link"),l("nav-link active")):(d("nav-link active"),l("nav-link"))};return o.a.createElement("nav",null,o.a.createElement(c.b,{to:"/about",onClick:h,className:r},"about"),o.a.createElement(c.b,{to:"/projects",onClick:h,className:u},"projects"))},d=a(18),h=a.n(d);a(32);var p=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2);return t[0],t[1],o.a.createElement("section",{className:"section active",id:"about-section"},o.a.createElement("img",{className:"about-image",src:h.a}),o.a.createElement("p",null,"Hi, I'm Nate Blake. I'm a freelance graphic artist and web developer. "),o.a.createElement("p",null,"I specialize in high quaility, visually engaging and artistic single-page web applications. I use a variety of tools and technologies to bring the best of what the industry has to offer to any project I work on."),o.a.createElement("p",null," If you are interested in working with me please ",o.a.createElement("a",{href:"mailto: hello@blake-ink.com"},"shoot me an email!")),o.a.createElement("hr",null),o.a.createElement("div",null,o.a.createElement("h3",null,"Design & Development Philosophy"),o.a.createElement("p",null,"Software Development is like modern day mechanics, and like in the workshop, there a many tools and utilities to choose from to accomplish a task. Some are more suited for a particular task than others, some are interchangeable and are used based on preference. The important thing is finding the right tool for the job and knowing how to use it.")),o.a.createElement("hr",null),o.a.createElement("div",null,o.a.createElement("h3",null,"Tools & Technology"),o.a.createElement("p",null,"What I enjoy the most about basic front end web technologies (HTML/CSS and plain JavaScript) is the universality and simplicity in implementation. Modern web browsers have come so far in their native power, with nothing more than a plain text editor, you can create an incredibly dynamic and interactive product which can be deployed by simply dropping the html file on a web server. "),o.a.createElement("p",null,"More complex projects require a more robust software infrastructure. Full stack development is key in the successful development and deployment of modern projects. Knowing how to control and handle application state, manage users, protect data, and organize a complex code base, etc. requires resources and skilled developers to produce and maintain. I tackle these things project by project, learning new skills to develop the best result for the task. ")))},f=function(){return fetch("/api/portfolio").then((function(e){return e.json()})).catch((function(e){return console.error(e)}))};a(33);var g=function(){var e=Object(n.useState)([]),t=Object(m.a)(e,2),a=t[0],r=t[1];Object(n.useEffect)((function(){f().then((function(e){console.log(e),r(e)})).catch((function(e){r([]),console.error(e)}))}),[]),Window.enlarge=function(e){var t=e.target,a=document.querySelector("body");console.log(t.src);var n=document.createElement("div");n.classList.add("modal-backdrop"),n.id="modal-backdrop",n.addEventListener("click",Window.close),a.appendChild(n);var o=document.createElement("img"),r=l("div")+1;o.style.zIndex=r,o.src=t.src,o.classList.add("enlarged-screen-shot"),o.id="active-enlarged-image",a.appendChild(o),document.body.scrollTop=0,document.documentElement.scrollTop=0};var l=function(e){for(var t=document.getElementsByTagName(e),a=Number.MIN_SAFE_INTEGER||-(Math.pow(2,53)-1),n=0;n<t.length;n++){var o=Number.parseInt(document.defaultView.getComputedStyle(t[n],null).getPropertyValue("z-index"),10);o>a&&(a=o)}return a};return Window.close=function(){var e=document.querySelector("#modal-backdrop"),t=document.querySelector("#active-enlarged-image");e.remove(),t.remove()},o.a.createElement("section",{className:"section active"},a.length?o.a.createElement("ul",{id:"portfolio-items-list"},a.map((function(e){return o.a.createElement("li",{key:e._id,className:"portfolio-item"},o.a.createElement("a",{href:e.link},o.a.createElement("img",{src:"/images/"+e.image})),o.a.createElement("div",{className:"item-text"},o.a.createElement("h2",{className:"item-title"},e.name),o.a.createElement("p",{className:"item-description"},e.description),e.badges.length?o.a.createElement("div",{className:"item-badges"},e.badges.map((function(e){var t="";return e.showLabel&&(t="portfolio-badge"),o.a.createElement("a",{key:e.label,className:t},e.image?o.a.createElement("img",{src:"/images/"+e.image}):o.a.createElement("span",null,e.label))}))):o.a.createElement("span",null),e.screenShots.length?o.a.createElement("div",{className:"item-screen-shots"},e.screenShots.map((function(e){return o.a.createElement("span",{key:e.image,className:"screen-shot-link"},o.a.createElement("img",{onClick:Window.enlarge,className:"screen-shot-thumbnail",src:"/images/"+e.image}))}))):o.a.createElement("span",null)))}))):o.a.createElement("h3",null,"No Projects"))};a(34);var v=function(){return o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"no-match-message"},o.a.createElement("h1",null,"404"),o.a.createElement("h2",null,"\ud83d\ude44"),o.a.createElement("p",null,"ugh. the page can't be found.")))};a(35);var E=function(){return o.a.createElement("footer",null,o.a.createElement("div",{className:"footer-text"},"Find me on"),o.a.createElement("div",{className:"footer-links"},o.a.createElement("a",{href:"https://github.com/n8blake",target:"_blank",className:"github"},"GitHub"),o.a.createElement("a",{href:"https://twitter.com/n8blake",target:"_blank",className:"twitter"},"Twitter"),o.a.createElement("a",{href:"https://www.instagram.com/n8blake/",target:"_blank",className:"instagram"},"Instagram"),o.a.createElement("a",{href:"https://www.youtube.com/user/n8blake",target:"_blank",className:"youtube"},"YouTube")))};a(36);var b=function(e){return o.a.createElement("span",null,o.a.createElement(s,null),o.a.createElement(c.a,null,o.a.createElement(u,null),o.a.createElement("main",{className:"container"},o.a.createElement(i.c,null,o.a.createElement(i.a,{exact:!0,path:["/","/about"]},o.a.createElement(p,null)),o.a.createElement(i.a,{exact:!0,path:["/projects"]},o.a.createElement(g,null)),o.a.createElement(i.a,null,o.a.createElement(v,null))))),o.a.createElement(E,null))},w=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function k(e){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var t=e.installing;t.onstatechange=function(){"installed"===t.state&&(navigator.serviceWorker.controller?console.log("New content is available; please refresh."):console.log("Content is cached for offline use."))}}})).catch((function(e){console.error("Error during service worker registration:",e)}))}l.a.render(o.a.createElement(b,null),document.getElementById("root")),function(){if("serviceWorker"in navigator){if(new URL("",window.location).origin!==window.location.origin)return;window.addEventListener("load",(function(){var e="".concat("","/service-worker.js");w?function(e){fetch(e).then((function(t){404===t.status||-1===t.headers.get("content-type").indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):k(e)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(e):k(e)}))}}()}},[[19,1,2]]]);
//# sourceMappingURL=main.0a9e057c.chunk.js.map