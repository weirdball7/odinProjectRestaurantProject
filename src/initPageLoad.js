
const initialPageLoad = () => {
    const header = document.createElement("header");
    const homeBtn = document.createElement("button");
    const menuBtn = document.createElement("button");
    const aboutBtn = document.createElement("button");
    const contactBtn = document.createElement("button");
    const div = document.createElement("div");

    div.setAttribute("id", "content");
    header.setAttribute("id", "header");
    homeBtn.setAttribute("id", "home-button");
    menuBtn.setAttribute("id", "menu-button");
    aboutBtn.setAttribute("id", "about-button");
    contactBtn.setAttribute("id", "contact-button");

    homeBtn.innerText = "Home";
    menuBtn.innerText = "Menu";
    aboutBtn.innerText = "about";
    contactBtn.innerText = "contact";

    header.appendChild(homeBtn);
    header.appendChild(menuBtn);
    header.appendChild(aboutBtn);
    header.appendChild(contactBtn);

    document.body.appendChild(header);
    document.body.appendChild(div);

    // Return the buttons so they can be accessed outside
    return { homeBtn, menuBtn, aboutBtn, contactBtn, div };

};


export { initialPageLoad };
