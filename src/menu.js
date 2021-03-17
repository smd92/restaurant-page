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
        let mealName = `meal${index}`;
        let mealPrice = `price${index}`;

        let meal = document.createElement("p");
        let price = document.createElement("p");

        meal.id = mealName;
        price.id = mealPrice;

        meal.classList.add("menuItem");
        price.classList.add("menuItem");

        meal.textContent = mealName;
        price.textContent = "$19,99";

        meal.setAttribute("display", "grid");
        meal.setAttribute("grid-area", meal);
        price.setAttribute("display", "grid");
        price.setAttribute("grid-area", price);

        let menuDiv = document.getElementById("menuDiv");
        menuDiv.appendChild(meal);
        menuDiv.appendChild(price);
    }

    return {
        createMenuFrame,
        populateMenuFrame
    }
})();

export default menuContent;