(()=>{"use strict";const e=function(){const e=document.querySelector("#main");return{createHeader:function(){let t=document.createElement("div");t.id="header";let n=document.createElement("p");n.id="title",n.textContent="Kermanshah",t.appendChild(n),e.appendChild(t)},createNavigation:function(){let e=document.createElement("div");e.id="navBar";let t=document.createElement("p");t.id="navHome",t.classList.add("navButton"),t.textContent="Home";let n=document.createElement("p");n.id="navMenu",n.classList.add("navButton"),n.textContent="Menu";let d=document.createElement("p");d.id="navContact",d.classList.add("navButton"),d.textContent="Contact",document.getElementById("header").appendChild(e),e.appendChild(t),e.appendChild(n),e.appendChild(d)},createContentDiv:function(){let t=document.createElement("div");t.id="content",e.appendChild(t)},createFooter:function(){let t=document.createElement("div");t.id="footer";let n=document.createElement("div");n.id="footerContent";let d=document.createElement("div");d.id="builtBy";let a=document.createElement("a");a.id="gitHubLink",a.setAttribute("href","https://github.com/smd92"),a.setAttribute("target","_blank");let i=document.createElement("img");i.id="gitHubLogo",i.setAttribute("src","/img/GitHub-Mark-Light-32px.png"),e.appendChild(t),t.appendChild(n),n.appendChild(d),d.appendChild(a),a.appendChild(i)}}}(),t=function(){const e=document.getElementById("content");let t=document.createElement("div");t.id="homeInfoBox",t.classList.add("tile");let n=document.createElement("p");n.id="homeHeading",n.classList.add("subHeading"),n.textContent="Welcome to Kermanshah";let d=document.createElement("p");d.id="homeTextOne",d.textContent="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat";let a=document.createElement("p");a.id="homeTextTwo",a.textContent="Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor",t.appendChild(n),t.appendChild(d),t.appendChild(a),e.appendChild(t)},n=function(){const e=document.getElementById("content");let t=document.createElement("div");t.id="menuContainer",t.classList.add("tile");let n=document.createElement("div");n.id="menuDiv";let d=document.createElement("p");d.id="menuHeading",d.classList.add("subHeading"),d.textContent="Menu",t.appendChild(d),t.appendChild(n),e.appendChild(t)},d=function(){const e=document.getElementById("content");let t=document.createElement("div");t.id="contactContainer",t.classList.add("tile");let n=document.createElement("div");n.id="contactContent";let d=document.createElement("p");d.id="contactHeading",d.classList.add("subHeading"),d.textContent="Contact";let a=document.createElement("div");a.id="contactInfoBox";let i=document.createElement("div");i.id="googleMaps";let o=document.createElement("iframe");o.setAttribute("src","https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52712.76035985219!2d47.06892050790624!3d34.33654092671006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ffaed9fb779436f%3A0xdfd40ef2ccc68ad3!2sKermanshah%2C%20Kermanshah%20Province%2C%20Iran!5e0!3m2!1sen!2sde!4v1615539622292!5m2!1sen!2sde"),o.setAttribute("height","200em"),o.setAttribute("style","border:0;"),o.setAttribute("allowfullscreen",""),o.setAttribute("loading","lazy"),i.appendChild(o),n.appendChild(a),n.appendChild(i),t.appendChild(d),t.appendChild(n),e.appendChild(t)};e.createHeader(),e.createNavigation(),e.createContentDiv(),e.createFooter(),t(),document.getElementById("title").addEventListener("click",(()=>{location.reload()})),function(){let e=document.getElementById("content").childNodes,a=document.getElementsByClassName("navButton");for(let t=0;t<a.length;t++)a[t].addEventListener("click",(n=>{for(let t=0;t<e.length;t++)e[t].remove();i(n.target.id),a[t].classList.add("navButtonChecked");for(let e=0;e<a.length;e++)!0===a[e].classList.contains("navButtonChecked")&&a[e].id!=n.target.id&&a[e].classList.remove("navButtonChecked")}));function i(e){switch(e){case"navHome":t();break;case"navMenu":n();break;case"navContact":d()}}}()})();