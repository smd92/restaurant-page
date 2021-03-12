const contactContent = (function() {

    function createContactFrame() {
        const content = document.getElementById("content");

        let contactContainer = document.createElement("div");
        contactContainer.id = "contactContainer";
        contactContainer.classList.add("tile");

        let contactContent = document.createElement("div");
        contactContent.id = "contactContent";

        let contactHeading = document.createElement("p");
        contactHeading.id = "contactHeading";
        contactHeading.classList.add("subHeading");
        contactHeading.textContent = "Contact";

        let contactInfoBox = document.createElement("div");
        contactInfoBox.id = "contactInfoBox";
        
        let googleMaps = document.createElement("div");
        googleMaps.id = "googleMaps";
        let googleMapsIframe = document.createElement("iframe");
        googleMapsIframe.setAttribute("src", "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52712.76035985219!2d47.06892050790624!3d34.33654092671006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ffaed9fb779436f%3A0xdfd40ef2ccc68ad3!2sKermanshah%2C%20Kermanshah%20Province%2C%20Iran!5e0!3m2!1sen!2sde!4v1615539622292!5m2!1sen!2sde");
        googleMapsIframe.setAttribute("height", "200em");
        googleMapsIframe.setAttribute("style", "border:0;");
        googleMapsIframe.setAttribute("allowfullscreen", "");
        googleMapsIframe.setAttribute("loading", "lazy");
        
        googleMaps.appendChild(googleMapsIframe);
        contactContent.appendChild(contactInfoBox);
        contactContent.appendChild(googleMaps);
        contactContainer.appendChild(contactHeading);
        contactContainer.appendChild(contactContent);
        content.appendChild(contactContainer);
    }
    
    return {
        createContactFrame
    }
})();

export default contactContent;