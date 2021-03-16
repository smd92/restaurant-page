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

    function populateMenuFrame() {
        let meals = ["One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight"];

        meals.forEach((meal) => {
            createMeals(meal);
        })
    }

    function createMeals(index) {
        let meal = document.createElement("p");
        let price = document.createElement("p");

        meal.id = `meal${index}`;
        price.id = `price${index}`;
    }

    return {
        createMenuFrame
    }
})();

export default menuContent;