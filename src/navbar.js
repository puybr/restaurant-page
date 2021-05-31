import home from './home'
import { Pizza, Vegan } from './menu'
import about from './about'

const holyCheeses = new Pizza('HOLY CHEESES', '£11.50', 'Gorgonzola, Parmesan, mascarpone, caramelised onion');
const johnno = new Pizza('JOHNNO', '£11.50', 'Gorgonzola, Parmesan, mascarpone, caramelised onion');

const homePage = home();
const aboutPage = about();

const navbar = () => {
    const addNavbar = () => {
        homePage.renderBackground();
        const body = document.querySelector('body');
        const navElement = `
        <ul class="topnav">
            <li id="home">HOME</li>
            <li id="menu">MENU</li>
            <li id="about">ABOUT US</li>
        </ul>
        `;
        body.insertAdjacentHTML("afterbegin", navElement);
        setActive('home');       
        setEventListeners();
        clearDisplay('home');   
    }
    const clearDisplay = target => {
        const elements = document.querySelectorAll('div');
        elements.forEach((element) => {
            if (element.className !== `${target}`){
                element.remove();
            }
        })
    }
    const setEventListeners = () => {
        const menuButton = document.getElementById('menu');
        menuButton.addEventListener('click', selectMenu);
        function selectMenu(e) {
            setActive(e.target.id);
            clearDisplay(e.target.id);
            johnno.renderPizza();
            holyCheeses.renderPizza();
        }
        const homeButton = document.getElementById('home');
        homeButton.addEventListener('click', selectHome);
        function selectHome(e) {
            setActive(e.target.id);
            clearDisplay(e.target.id);
            homePage.renderBackground();

        }
        const aboutButton = document.getElementById('about');
        aboutButton.addEventListener('click', selectAbout);
        function selectAbout(e) {
            setActive(e.target.id);
            clearDisplay(e.target.id);
            aboutPage.renderAboutPage();
        }
    
    }
    const setActive = target => {
        const button = document.getElementById(`${target}`);
        button.classList.add('active')
    }

    return { addNavbar }

}

export default navbar