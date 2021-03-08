const HomeContent = (function () {

    function createHomeContent() {
        const content = document.getElementById("content");

        let homeInfoBox = document.createElement("div");
        homeInfoBox.id = "homeInfoBox";
        homeInfoBox.classList.add("tile");

        let homeHeading = document.createElement("p");
        homeHeading.id = "homeHeading";
        homeHeading.textContent = "Welcome to Kermanshah";

        let homeTextOne = document.createElement("p");
        homeTextOne.id = "homeTextOne";
        homeTextOne.textContent = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat";

        let homeTextTwo = document.createElement("p");
        homeTextTwo.id = "homeTextTwo";
        homeTextTwo.textContent = "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor";

        homeInfoBox.appendChild(homeHeading);
        homeInfoBox.appendChild(homeTextOne);
        homeInfoBox.appendChild(homeTextTwo);
        content.appendChild(homeInfoBox);
    }

    return {
        createHomeContent
    }
})();

export default HomeContent;