import generateMenu from "./menu";

function createNavBar(navBar) {
    for (let i = 1; i <= 2; i++) {
        const button = document.createElement('button');
        switch (i) {
            case 1:
                button.innerText = "Menu";
                break;
            case 2:
                button.innerText = "About";
                break;
        }

        navBar.appendChild(button);
    }
}

function createLogo(navBar, contentArea){
    const logo = createElement('h1', 'logo', 'Fancy Chaii');
    navBar.parentNode.insertBefore(logo, navBar);

    logo.addEventListener('click', () => {
        createStartUpContent(contentArea);
    });
}

export function createElement(elementType, className = null, innerText = 0){
    const element = document.createElement(elementType);
    if(className){
        element.classList.add(className);
    }
    if(innerText){
        element.innerText = innerText;
    }

    return element;
};

function createStartUpContent(contentArea) {
    contentArea.innerText = "";
    const grid = createElement("div", "grid");

    grid.appendChild(createElement("div", "photoItem1"));
    grid.appendChild(createElement("div", "photoItem2"))

    const textItem = createElement("div", "textItem")
    const h3Element = createElement("h3", 0, "Fancy Chai Wala");
    textItem.appendChild(h3Element);

    const pElement = createElement("p", 0, "Exquisite dishes(chai ofc!) and impeccable service")
    textItem.appendChild(h3Element);

    const button = createElement("button", 0,"See Menu")
    textItem.appendChild(button);

    button.addEventListener('click',()=>generateMenu(contentArea));

    grid.appendChild(textItem);
    grid.appendChild(createElement('div', 'photoItem3', 0));

    contentArea.appendChild(grid);
}

export default function initialStartup(contentArea, navBar) {
    createLogo(navBar, contentArea);
    createNavBar(navBar);
    createStartUpContent(contentArea);
}