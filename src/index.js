import "./style.css";
import { initialPageLoad } from "./initPageLoad";
import { loadHomeTab } from "./homeTab";
import { loadmenuTab } from "./menuTab"; 
import { loadAboutTab } from "./aboutTab";

const { homeBtn: homeButton, menuBtn: menuButton, aboutBtn: aboutButton, contactBtn: contactButton, div: content } = initialPageLoad();

const clearContent = () => {
    content.innerHTML = '';
};


console.log("hello");
document.addEventListener("DOMContentLoaded", (event) => {
    homeButton.addEventListener("click", () => {
        console.log("home button clicked");
        clearContent();
        content.appendChild(loadHomeTab().homeTab);
        
    });

    menuButton.addEventListener("click", () => {
        console.log("menu button clicked");
        clearContent();
        content.appendChild(loadmenuTab().menuTab);
    });

    aboutButton.addEventListener("click", () => {
        console.log("about button clicked");
        clearContent();
        content.appendChild(loadAboutTab().aboutTab);
    });
});





