import './style.css';
import initialStartup from './startup';
import genrateAbout from './about';
import generateMenu from './menu';

const contentArea = document.querySelector('div#content');
const navBar = document.querySelector('nav');
initialStartup(contentArea, navBar);

(function() {
    navBar.querySelectorAll('button').forEach(element => {
        element.addEventListener('click', ()=>{
            contentArea.textContent = "";
            switch(element.innerText){
                case "Menu":
                    contentArea.innerText = "";
                    generateMenu(contentArea);
                    break;
                case "About":
                    contentArea.innerText = "";
                    genrateAbout(contentArea);
                    break;
            }
        })
    });
})();
