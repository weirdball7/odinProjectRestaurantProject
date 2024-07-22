const loadAboutTab = () => {
    const aboutTab = document.createElement('div');
    const restuarantHistory = document.createElement('div');
    const contactInfo = document.createElement('div');

    aboutTab.setAttribute("id", "aboutTab");
    restuarantHistory.setAttribute("id", "restuarantHistory");
    contactInfo.setAttribute("id", "contactInfo");

    aboutTab.appendChild(restuarantHistory);
    aboutTab.appendChild(contactInfo);

    return {aboutTab};

};

export { loadAboutTab };