const loadmenuTab = () => { 
    const menuTab = document.createElement('div');
    const menuContainer = document.createElement('div');
    const drinksMenu = document.createElement('div');
    const foodMenu = document.createElement('div');
    const dessertMenu = document.createElement('div');

    menuTab.setAttribute("id", "menuTab");
    menuContainer.setAttribute("id", "menuContainer");
    drinksMenu.setAttribute("id", "drinksMenu");
    foodMenu.setAttribute("id", "foodMenu");
    dessertMenu.setAttribute("id", "dessertMenu");

    menuContainer.appendChild(drinksMenu);
    menuContainer.appendChild(foodMenu);
    menuContainer.appendChild(dessertMenu);
    menuTab.appendChild(menuContainer);

return {menuTab};
};

export { loadmenuTab };
