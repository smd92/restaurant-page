const menuContent = (function () {

    function createMenuContent() {
        const content = document.getElementById("content");

        let menuDiv = document.createElement("div");
        menuDiv.id = "menuDiv";
        menuDiv.classList.add("tile");

        let menuHeading = document.createElement("p");
        menuHeading.id = "menuHeading";
        menuHeading.textContent = "Menu";

        menuDiv.appendChild(menuHeading);
        content.appendChild(menuDiv);
    }

    return {
        createMenuContent
    }
})();

export default menuContent;