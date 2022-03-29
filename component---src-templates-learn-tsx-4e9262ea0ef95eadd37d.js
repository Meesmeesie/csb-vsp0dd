/*! For license information please see component---src-templates-learn-tsx-4e9262ea0ef95eadd37d.js.LICENSE.txt */
(self.webpackChunknodejs_website=self.webpackChunknodejs_website||[]).push([[301],{5900:function(e,t){var n;!function(){"use strict";var r={}.hasOwnProperty;function l(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var i=typeof n;if("string"===i||"number"===i)e.push(n);else if(Array.isArray(n)){if(n.length){var a=l.apply(null,n);a&&e.push(a)}}else if("object"===i)if(n.toString===Object.prototype.toString)for(var o in n)r.call(n,o)&&n[o]&&e.push(o);else e.push(n.toString())}}return e.join(" ")}e.exports?(l.default=l,e.exports=l):void 0===(n=function(){return l}.apply(t,[]))||(e.exports=n)}()},26:function(e,t,n){"use strict";n.d(t,{Z:function(){return f}});var r=n(7294);function l(e,t,n,r){var l,i=!1,a=0;function o(){l&&clearTimeout(l)}function c(){for(var c=arguments.length,u=new Array(c),s=0;s<c;s++)u[s]=arguments[s];var m=this,d=Date.now()-a;function f(){a=Date.now(),n.apply(m,u)}function v(){l=void 0}i||(r&&!l&&f(),o(),void 0===r&&d>e?f():!0!==t&&(l=setTimeout(r?v:f,void 0===r?e-d:e)))}return"boolean"!=typeof t&&(r=n,n=t,t=void 0),c.cancel=function(){o(),i=!0},c}var i=function(e){var t=e.index,n=e.username,l=e.size,i=void 0===l?"64":l;if(!n)return null;var a=n.trim(),o="https://github.com/"+a,c="https://github.com/"+a+".png?size="+i,u=0===t?{marginLeft:0}:{};return r.createElement("li",null,r.createElement("a",{className:"link",href:o,title:n,key:n,target:"_blank",rel:"noopener noreferrer",style:u},r.createElement("img",{className:"img",src:c,alt:n})))},a=function(e){var t=e.authors;return r.createElement("ul",{className:"list"},r.createElement("h5",null,"Contributors"),t.map((function(e,t){return e&&r.createElement(i,{index:t,username:e,key:e,size:"60"})})))},o=function(e){var t=e.relativePath,n=e.editPath;if(!t&&!n)return null;var l="https://github.com/nodejs/nodejs.dev/edit/master",i=t?l+"/src/documentation/"+t:l+"/"+n;return r.createElement("div",{className:"edit"},r.createElement("a",{className:"link",href:i},r.createElement("span",null,"Edit this page on GitHub")," ",r.createElement("svg",{className:"icon",fill:"currentColor",height:"1em",width:"1em",viewBox:"0 0 40 40"},r.createElement("path",{d:"m34.5 11.7l-3 3.1-6.3-6.3 3.1-3q0.5-0.5 1.2-0.5t1.1 0.5l3.9 3.9q0.5 0.4 0.5 1.1t-0.5 1.2z m-29.5 17.1l18.4-18.5 6.3 6.3-18.4 18.4h-6.3v-6.2z"}))))},c=n(5444),u=function(e){var t=e.previous,n=e.next;return t||n?r.createElement("ul",{className:"pagination"},r.createElement("li",null,t&&t.title&&r.createElement(c.Link,{className:"link",to:"/learn/"+t.slug,rel:"prev"},"←   Prev")),r.createElement("li",null,n&&n.title&&r.createElement(c.Link,{className:"link",to:"/learn/"+n.slug,rel:"next"},"Next   →"))):null};var s=function(e){var t=e.heading,n=e.tableOfContents;if(!n)return null;var l,i=(void 0===(l=n)&&(l=""),l.replace(/&#x3C;/gi,"<"));return r.createElement("details",{className:"toc"},r.createElement("summary",null,r.createElement("h6",null,t)),r.createElement("div",{dangerouslySetInnerHTML:{__html:i}}))},m=n(7653),d=function(e){var t=e.authors,n=e.date;return r.createElement("h5",{className:"list"},n," by"," ",t.map((function(e,n){return e&&r.createElement("span",{key:e.id},e.url?r.createElement("a",{target:"_blank",rel:"noopener noreferrer",href:e.url},e.name):e.name,(0,m.C)(n,t.length))})))},f=function(e){var t=e.title,n=e.html,i=e.tableOfContents,c=e.previous,m=e.next,f=e.relativePath,v=e.editPath,h=e.authors,p=e.blog,g=e.date,E=r.useRef(null);return r.useEffect((function(){window.history.state&&window.history.state.articleScrollTo&&window.scrollTo({top:window.history.state.articleScrollTo});var e=l(300,(function(e){e.forEach((function(e){if(e.boundingClientRect.y<72){if(!e.target.previousElementSibling)return void window.history.replaceState({articleScrollTo:null},"",null);window.history.replaceState({articleScrollTo:document.documentElement.scrollTop},"",null)}}))})),t=new IntersectionObserver((function(t){e(t)}),{threshold:[.25,.5,.75],rootMargin:"-72px 0px 0px 0px"});return Array.from(E.current.children).forEach((function(e){t.observe(e)})),function(){Array.from(E.current.children).forEach((function(e){t.unobserve(e)}))}}),[]),r.createElement("article",{className:"article-reader"},r.createElement("h1",{className:"article-reader__headline"},t),p&&r.createElement(d,{date:g,authors:h}),!p&&r.createElement(s,{heading:"TABLE OF CONTENTS",tableOfContents:i}),r.createElement("div",{ref:function(e){e&&(E.current=e)},dangerouslySetInnerHTML:{__html:n}}),!p&&r.createElement(a,{authors:h}),!p&&r.createElement(o,{relativePath:f,editPath:v}),!p&&r.createElement(u,{previous:c,next:m}))}},5344:function(e,t,n){"use strict";var r=n(7294),l=n(5444),i=n(5900),a=n.n(i);t.Z=function(e){var t=e.isLearn,n=void 0===t||t,i=e.isRead,o=e.isActive,c=e.slug,u=e.title,s=e.onClick,m=n?a()("t-body2 side-nav__item",{"side-nav__item--done":i,"side-nav__item--active":!i&&o}):a()("t-body2 side-nav__item-community",{"side-nav__item-community--active":o});return r.createElement(l.Link,{to:"/learn/"+c,id:"link-"+c,onClick:s,className:m},u)}},1543:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return v}});var r=n(7294),l=n(26),i=n(1391),a=n(5344),o=function(e){var t=e.title,n=e.section,l=e.currentSlug,i=e.onItemClick,o=e.readSections;return r.createElement("ul",{className:"side-nav__list"},r.createElement("h2",{className:"t-body2 side-nav__title"},r.createElement("i",{className:"material-icons"},"offline_bolt"),t),n.map((function(e){var t=o.has(e.slug);return r.createElement(a.Z,{key:e.slug,title:e.title,slug:e.slug,isRead:t,isActive:e.slug===l,onClick:i})})))},c=function(e){return Math.max(document.documentElement.clientWidth,window.innerWidth||0)<=e},u=function(){return c(720)};function s(e,t,n){void 0===t&&(t=null),void 0===n&&(n=333);var r=(t&&t.scrollTop||window.pageYOffset||document.documentElement.scrollTop)-(t&&t.clientTop||0),l=e-r,i=window.performance.now(),a=0;return new Promise((function(e){!function o(){var c,u,s,m=window.performance.now(),d=m-i;i=m,a+=d,(t||document.scrollingElement||window).scrollTo(0,(c=a,u=r,s=l,(c/=n/2)<1?s/2*c*c*c+u:s/2*((c-=2)*c*c+2)+u)),a<n&&window.requestAnimationFrame(o),e(!0)}()}))}var m=function(e,t){var n,r,l=t.getBoundingClientRect();return u()?(r=null,n=e-window.screen.height/2):(r=t,n=e-l.top-(t.offsetHeight-t.offsetTop)/2),{newScrollPos:n,scrollWindow:r,scrollTime:.9*n+500}},d=function(e){var t=e.sections,n=e.currentSlug,l=e.previousSlug,i=e.label,a=(0,r.useState)(!1),c=a[0],d=a[1],f=(0,r.useRef)(null),v=function(){return d(!c)},h=function(){u()&&v()};(0,r.useEffect)((function(){if("undefined"!=typeof window){var e=f.current;if(e){var t=document.getElementById("link-"+n),r=m((null==t?void 0:t.getBoundingClientRect().top)||0,e),i=r.newScrollPos,a=r.scrollWindow,o=r.scrollTime;if(u()&&!c)return;if(u())s(i,a,o);else if(l){var d=document.getElementById("link-"+l),v=m((null==d?void 0:d.getBoundingClientRect().top)||0,e);e.scrollTop=v.newScrollPos,s(i,a,o)}else e.scrollTop=i}}}),[n,l,c]);var p=c?"side-nav side-nav--open":"side-nav",g=new Set;return Object.keys(t).some((function(e){var r=!1;return t[e].some((function(e){return(r=e.slug===n)||g.add(e.slug),r})),r})),r.createElement("nav",{"aria-label":i,className:p,ref:f},r.createElement("button",{type:"button",className:"side-nav__open",onClick:v},"Menu"),Object.keys(t).map((function(e){return"null"!==e&&r.createElement(o,{key:e,title:e,section:t[e],currentSlug:n,onItemClick:h,readSections:g})})))},f=n(3918),v=function(e){var t,n=e.data.doc,a=n.frontmatter,o=a.title,c=a.description,u=n.html,s=n.tableOfContents,m=n.fields.authors,v=e.pageContext,h=v.slug,p=v.next,g=v.previous,E=v.relativePath,w=v.navigationData,y=e.location,b="";"undefined"!=typeof window&&window.previousPath&&(b=(null===(t=window.previousPath.split("/learn")[1])||void 0===t?void 0:t.substr(1))||"introduction-to-nodejs");return r.createElement(r.Fragment,null,r.createElement(i.Z,{title:o,description:c,location:y,showFooter:!1},r.createElement("main",{className:"grid-container"},r.createElement(d,{currentSlug:h,previousSlug:b,label:"Secondary",sections:w}),r.createElement(l.Z,{title:o,html:u,tableOfContents:s,next:p,authors:m,previous:g,relativePath:E}))),r.createElement(f.Z,null))}},7653:function(e,t,n){"use strict";n.d(t,{C:function(){return r}});var r=function(e,t){return e<t-2?", ":e===t-2?" and ":""}}}]);
//# sourceMappingURL=component---src-templates-learn-tsx-4e9262ea0ef95eadd37d.js.map