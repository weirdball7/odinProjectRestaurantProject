import "./style.css";
import { initialPageLoad } from "./initPageLoad";
import { loadHomeTab } from "./homeTab";



console.log("hello");
document.addEventListener("DOMContentLoaded", (event) => {
    const { homeBtn: homeButton, menuBtn: menuButton, aboutBtn: aboutButton, contactBtn: contactButton } = initialPageLoad();
    homeButton.addEventListener("click", () => {
        console.log("home button clicked");
        loadHomeTab();
    });
});
