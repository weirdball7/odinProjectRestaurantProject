import "./style.css";
import './initPageLoad';    
import './homeTab';
import { initialPageLoad } from "./initPageLoad";
import { homeBtn } from "./initPageLoad";
import { menuBtn } from "./initPageLoad";
import { aboutBtn } from "./initPageLoad";
import { contactBtn } from "./initPageLoad";
import { loadHomeTab } from "./homeTab";



console.log("hello");
// const div = document.createElement("div");
// div.setAttribute("id", "content");
initialPageLoad();

homeBtn.addEventListener('click', loadHomeTab);

