//rendering page on load
import pageLoad from "/src/pageload.js";
import homeContent from "/src/home.js";
import menuContent from "/src/menu.js";
import contactContent from "/src/contact.js";

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
            for (let k = contentDivChildren.length - 1; k >= 0; k--) {
                contentDivChildren[k].remove();
            }
            switchTabs(e.target.id);
            //highlight chosen tab
            tabs[i].classList.add("navButtonChecked");
            for (let k = 0; k < tabs.length; k++) {
                if (tabs[k].classList.contains("navButtonChecked") === true && tabs[k].id != e.target.id) {
                    tabs[k].classList.remove("navButtonChecked");
                }
            }
        })
    }

    function switchTabs(navButtonID) {
        switch (navButtonID) {
            case "navHome":
                homeContent.createHomeContent();
                break;
            case "navMenu":
                menuContent.createMenuFrame();
                menuContent.populateMenuFrame();
                break;
            case "navContact":
                contactContent.createContactFrame();
                break;
        }
    }
})();