//rendering page on load
import pageLoad from "/src/pageload.js";
import homeContent from "/src/home.js";
import menuContent from "/src/menu.js";

pageLoad.createHeader();
pageLoad.createNavigation();
pageLoad.createContentDiv();
pageLoad.createFooter();
//home content landing page
homeContent.createHomeContent();

const title = document.getElementById("title");
title.addEventListener("click", () => {
    location.reload();
})

//nav-tab switching logic
const switchTabsManager = (function () {
    let contentDiv = document.getElementById("content");
    let contentDivChildren = contentDiv.childNodes;
    let tabs = document.getElementsByClassName("navButton");

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", (e) => {
            for (let k = 0; k < contentDivChildren.length; k++) {
                contentDivChildren[k].remove();
            }
            switchTabs(e.target.id);
        })
    }

    function switchTabs(navButtonID) {
        switch (navButtonID) {
            case "navHome":
                homeContent.createHomeContent();
                break;
            case "navMenu":
                menuContent.createMenuContent();
                break;
            case "navContact":
                //render contact
                break;
        }
    }
})();