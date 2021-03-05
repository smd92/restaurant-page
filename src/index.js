//rendering page on load
import pageLoad from '/src/pageload.js';

pageLoad.createHeader();
pageLoad.createNavigation();
pageLoad.createContentDiv();
pageLoad.createFooter();

//home content
import homeContent from '/src/home.js';

homeContent.createHomeContent();