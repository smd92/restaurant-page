const pageLoad = (function() {

    const main = document.querySelector("#main");

    function createHeader() {
        let header = document.createElement("div");
        header.id = "header";
        
        let title = document.createElement("p");
        title.id = "title";
        title.textContent = "Kermanshah";

        header.appendChild(title);
        main.appendChild(header);
    }

    function createContentDiv() {
        let contentDiv = document.createElement("div");
        contentDiv.id = "content";

        main.appendChild(contentDiv);
    }

    function createNavigation() {
        let navBar = document.createElement("div");
        navBar.id = "navBar";

        let navHome = document.createElement("p");
        navHome.id = "navHome";
        navHome.classList.add("navButton");
        navHome.textContent = "Home";

        let navMenu = document.createElement("p");
        navMenu.id = "navMenu";
        navMenu.classList.add("navButton");
        navMenu.textContent = "Menu";

        let navContact = document.createElement("p");
        navContact.id = "navContact";
        navContact.classList.add("navButton");
        navContact.textContent = "Contact";

        let header = document.getElementById("header");
        header.appendChild(navBar);
        navBar.appendChild(navHome);
        navBar.appendChild(navMenu);
        navBar.appendChild(navContact);
    }

    function createFooter() {
        let footer = document.createElement("div");
        footer.id = "footer";

        let footerContent = document.createElement("div");
        footerContent.id = "footerContent";

        let githubLogo = document.createElement("div");
        githubLogo.id = "githubLogo";
        githubLogo.textContent = "built by smd92";

        main.appendChild(footer);
        footer.appendChild(footerContent);
        footerContent.appendChild(githubLogo);
    }

    return {
        createHeader,
        createNavigation,
        createContentDiv,
        createFooter
    }
})();

export default pageLoad;