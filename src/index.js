//rendering page on load
import pageLoad from "/src/pageload.js";
import homeContent from "/src/home.js";
import menuContent from "/src/menu.js";

pageLoad.createHeader();
pageLoad.createNavigation();
pageLoad.createContentDiv();
pageLoad.createFooter();
//home content
homeContent.createhomeContent();

//nav-tab switching logic
const switchTabs = (function () {
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
                    homeContent.createhomeContent();
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