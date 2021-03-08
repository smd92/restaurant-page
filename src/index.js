import homeContent from "./home";

//rendering page on load
import pageLoad from "/src/pageload.js";
import HomeContent from "/src/home.js";
import menuContent from "/src/menu.js";

pageLoad.createHeader();
pageLoad.createNavigation();
pageLoad.createContentDiv();
pageLoad.createFooter();
//home content
HomeContent.createHomeContent();

//nav-tab switching logic
let switchTabs = (function () {
    let contentDiv = document.getElementById("content");
    let contentDivChildren = contentDiv.childNodes;
    let tabs = document.getElementsByClassName("navButton");

    for (let i = 0; i < tabs.length; i++) {
        tabs[i].addEventListener("click", (e) => {
            for (let k = 0; k < contentDivChildren.length; k++) {
                contentDivChildren[k].remove();
            }
            switch (e.target.id) {
                case "navHome":
                    HomeContent.createHomeContent();
                    break;
                case "navMenu":
                    //render menu
                    break;
                case "navContact":
                    //render contact
                    break;
            }
        })
    }
})();