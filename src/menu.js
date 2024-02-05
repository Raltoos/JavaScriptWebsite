import { createElement } from "./startup";
import './styleMenu.css';
import cacio from './Cacio-e-pepe.png';
import Zucchini from './Stuffed-Zucchini-Boats.png';
import Kimchi from './Kimchi-Fried-Rice.png';
import tofu from './Tofu-Avocado-Salad.png';
import caramel from './caramel-topped-ice-cream.png';
import eclairs from './chocolate-eclairs.png';

function displayMenu(element){
    var imageUrls = [
        `url(${cacio})`,
        `url(${Zucchini})`,
        `url(${Kimchi})`,
        `url(${tofu})`,
        `url(${caramel})`,
        `url(${eclairs})`
    ];

    const photo1Menu = document.querySelector('.photo1Menu');
    const photo2Menu = document.querySelector('.photo2Menu');
    switch(element.innerText){
        case 'Italian':
            photo1Menu.style.backgroundImage = imageUrls[0];
            photo2Menu.style.backgroundImage = imageUrls[1];
            break;

        case 'Asian':
            photo1Menu.style.backgroundImage = imageUrls[2];
            photo2Menu.style.backgroundImage = imageUrls[3];
            break;

        case 'Desserts':
            photo1Menu.style.backgroundImage = imageUrls[4];
            photo2Menu.style.backgroundImage = imageUrls[5];
            break;
    };
}

export default function generateMenu(contentArea){
    contentArea.innerText = '';
    var menuContainer = createElement('div', 'menu')

    // Create heading
    var heading = createElement('div', 'heading')
    var headingText = createElement('h2', 0, 'Menu');
    heading.appendChild(headingText);
    menuContainer.appendChild(heading);

    // Create content container
    var menuContent = createElement('div',  'menuContent')

    // Create grid container
    var displayGrid = createElement('div', 'displayGrid');

    // Create photo1
    var photo1 = createElement('div', 'photo1Menu')

    // Create photo2
    var photo2 = createElement('div', 'photo2Menu')

    // Append photos to grid container
    displayGrid.appendChild(photo1);
    displayGrid.appendChild(photo2);

    // Create sidebar container
    var sideBar = createElement('div', 'sideBar');

    // Create unordered list
    var ul = document.createElement('ul');

    // Create list items
    var cuisines = ['Italian', 'Asian', 'Desserts'];
    cuisines.forEach(function(cuisine) {
      var li = createElement('li', 0, cuisine);
      ul.appendChild(li);
    });

    // Create "Book A Table" button
    var bookButton = createElement('button', 0, 'Book A Table');

    // Append ul and button to sidebar
    sideBar.appendChild(ul);
    sideBar.appendChild(bookButton);

    // Append heading, grid, and sidebar to content container
    menuContent.appendChild(displayGrid);
    menuContent.appendChild(sideBar);

    // Append content container to main container
    menuContainer.appendChild(menuContent);

    // Append the entire menu to the body
    contentArea.appendChild(menuContainer);

    document.querySelectorAll('li').forEach(element => {
        element.addEventListener('click', () => {
            displayMenu(element);
        });
    });
}