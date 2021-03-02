const pageLoad = (function() {

    const content = document.querySelector('#content');

    function createHeader() {
        let header = document.createElement('div');
        header.id = 'header';
        
        let title = document.createElement('p');
        title.id = 'title';
        title.textContent = 'Kermanshah';

        header.appendChild(title);
        content.appendChild(header);
    }

    return {
        createHeader
    }
})();

export default pageLoad;