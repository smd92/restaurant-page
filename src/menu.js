const menuContent = (function () {

    function createMenuFrame() {
        const content = document.getElementById("content");

        let menuContainer = document.createElement("div");
        menuContainer.id = "menuContainer";
        menuContainer.classList.add("tile");

        let menuDiv = document.createElement("div");
        menuDiv.id = "menuDiv";

        let menuHeading = document.createElement("p");
        menuHeading.id = "menuHeading";
        menuHeading.classList.add("subHeading");
        menuHeading.textContent = "Menu";

        menuContainer.appendChild(menuHeading);
        menuContainer.appendChild(menuDiv);
        content.appendChild(menuContainer);
    }

    function populateMenu() {
        
    }

    return {
        createMenuFrame
    }
})();

export default menuContent;