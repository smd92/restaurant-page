(()=>{"use strict";const e=function(){const e=document.querySelector("#main");return{createHeader:function(){let t=document.createElement("div");t.id="header";let n=document.createElement("p");n.id="title",n.textContent="Kermanshah",t.appendChild(n),e.appendChild(t)},createNavigation:function(){let e=document.createElement("div");e.id="navBar";let t=document.createElement("p");t.id="navHome",t.classList.add("navButton"),t.textContent="Home";let n=document.createElement("p");n.id="navMenu",n.classList.add("navButton"),n.textContent="Menu";let d=document.createElement("p");d.id="navContact",d.classList.add("navButton"),d.textContent="Contact",document.getElementById("header").appendChild(e),e.appendChild(t),e.appendChild(n),e.appendChild(d)},createContentDiv:function(){let t=document.createElement("div");t.id="content",e.appendChild(t)},createFooter:function(){let t=document.createElement("div");t.id="footer";let n=document.createElement("div");n.id="footerContent";let d=document.createElement("div");d.id="builtBy";let i=document.createElement("a");i.id="gitHubLink",i.setAttribute("href","https://github.com/smd92"),i.setAttribute("target","_blank");let o=document.createElement("img");o.id="gitHubLogo",o.setAttribute("src","/dist/img/GitHub-Mark-Light-32px.png"),e.appendChild(t),t.appendChild(n),n.appendChild(d),d.appendChild(i),i.appendChild(o)}}}(),t=function(){const e=document.getElementById("content");let t=document.createElement("div");t.id="homeInfoBox",t.classList.add("tile");let n=document.createElement("p");n.id="homeHeading",n.textContent="Welcome to Kermanshah";let d=document.createElement("p");d.id="homeTextOne",d.textContent="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat";let i=document.createElement("p");i.id="homeTextTwo",i.textContent="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",t.appendChild(n),t.appendChild(d),t.appendChild(i),e.appendChild(t)},n=function(){const e=document.getElementById("content");let t=document.createElement("div");t.id="menuDiv",t.classList.add("tile");let n=document.createElement("p");n.id="menuHeading",n.textContent="Menu",t.appendChild(n),e.appendChild(t)};e.createHeader(),e.createNavigation(),e.createContentDiv(),e.createFooter(),t(),document.getElementById("title").addEventListener("click",(()=>{location.reload()})),function(){let e=document.getElementById("content").childNodes,d=document.getElementsByClassName("navButton");for(let t=0;t<d.length;t++)d[t].addEventListener("click",(n=>{for(let t=0;t<e.length;t++)e[t].remove();i(n.target.id),d[t].classList.add("navButtonChecked");for(let e=0;e<d.length;e++)!0===d[e].classList.contains("navButtonChecked")&&d[e].id!=n.target.id&&d[e].classList.remove("navButtonChecked")}));function i(e){switch(e){case"navHome":t();break;case"navMenu":n()}}}()})();