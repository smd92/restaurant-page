const homeContent = (function() {

    function createHomeContent() {
        const content = document.getElementById('content');

        let homeContainer = document.createElement('div');
        homeContainer.id = 'homeContainer';

        let homeInfoBox = document.createElement('div');
        homeInfoBox.id = 'homeInfoBox';

        let homeText = document.createElement('p');
        homeText.id = 'homeText';
        homeText.textContent = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim`;
        
        homeInfoBox.appendChild(homeText);
        homeContainer.appendChild(homeInfoBox);
        content.appendChild(homeContainer);
    }

    return {
        createHomeContent
    }
})();

export default homeContent;