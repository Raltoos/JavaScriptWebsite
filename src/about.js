import { createElement } from "./startup";
import './styleAbout.css';

export default function genrateAbout(contentArea) {
    var aboutDiv =createElement('div', 'about');

    var textDiv = createElement('div', 'text')

    var heading = createElement('h3', 0, 'About');

    var paragraph = createElement('p');
    var boldText = createElement('b', 0,'Fancy Feast Restaurant')
    paragraph.appendChild(boldText);
    paragraph.innerHTML += ', located in the city, offers its guests a wide selection of dishes and drinks. The interior is designed in a modern style, with elements of luxury. Here you can hold a business meeting, a romantic evening, or just enjoy a delicious meal.';

    var learnMoreButton = createElement('button', 0, 'Learn More');

    var photo1Div = createElement('div', 'photo1')

    var photo2Div = createElement('div', 'photo2');

    textDiv.appendChild(heading);
    textDiv.appendChild(paragraph);
    textDiv.appendChild(learnMoreButton);

    aboutDiv.appendChild(textDiv);
    aboutDiv.appendChild(photo1Div);
    aboutDiv.appendChild(photo2Div);

    contentArea.appendChild(aboutDiv);
}