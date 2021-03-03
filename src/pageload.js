const pageLoad = (function() {

    const content = document.querySelector('#content');

    function createHeader() {
        let header = document.createElement('div');
        header.id = 'header';
        
        let title = document.createElement('p');
        title.id = 'title';
        title.textContent = 'Kermanshah';

        let description = document.createElement('p');
        description.id = 'descr';
        description.textContent = 'Traditional. Iranian. Food.'

        header.appendChild(title);
        header.appendChild(description);
        content.appendChild(header);
    }

    return {
        createHeader
    }
})();

export default pageLoad;