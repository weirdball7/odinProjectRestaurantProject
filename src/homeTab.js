// import { initialPageLoad } from "./initPageLoad";
// import { div } from "./initPageLoad";

const loadHomeTab = () => {
    const homeTab = document.createElement('div');
    const descriptionContainer = document.createElement('div');
    const hoursContainer = document.createElement('div');
    const locationContainer = document.createElement('div');
    // const {div: content} = div;

    homeTab.setAttribute("id", "homeTab");
    descriptionContainer.setAttribute("id", "descriptionContainer");
    hoursContainer.setAttribute("id", "hoursContainer");
    locationContainer.setAttribute("id", "locationContainer");

    homeTab.appendChild(descriptionContainer);
    homeTab.appendChild(hoursContainer);
    homeTab.appendChild(locationContainer);

    return {homeTab};
};
export { loadHomeTab };