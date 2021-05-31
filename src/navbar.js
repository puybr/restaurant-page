import home from './home'
import { Pizza, Vegan } from './menu'
import about from './about'

const holyCheeses = new Pizza('HOLY CHEESES', '£11.50', 'Gorgonzola, Parmesan, mascarpone, caramelised onion');
const johnno = new Pizza('JOHNNO', '£11.50', 'Gorgonzola, Parmesan, mascarpone, caramelised onion');

johnno.renderPizza();
holyCheeses.renderPizza();

const homePage = home();
const aboutPage = about();
aboutPage.renderAboutPage();



const navbar = () => {
    const addNavbar = () => {
        const body = document.querySelector('body');
        const navElement = `
        <ul class="topnav">
            <li id="home">HOME</li>
            <li id="menu">MENU</li>
            <li id="about">ABOUT US</li>
        </ul>
        `;
        body.insertAdjacentHTML("afterbegin", navElement);
        setHomeActive();
        setEventListeners();
        aboutPage.clear();
        homePage.renderBackground();
    }
    const setEventListeners = () => {
        const menuButton = document.getElementById('menu');
        const homeButton = document.getElementById('home');
        const aboutButton = document.getElementById('about');
        menuButton.addEventListener('click', selectMenu);
        homeButton.addEventListener('click', selectHome);
        aboutButton.addEventListener('click', selectAbout);
        function selectMenu() {
            menuButton.setAttribute('style', 'text-decoration: underline');
            homeButton.removeAttribute('style', 'text-decoration: underline');
            aboutButton.removeAttribute('style', 'text-decoration: underline');
            homePage.remove();

        }
        function selectHome() {
            homePage.renderBackground();
            homeButton.setAttribute('style', 'text-decoration: underline');
            menuButton.removeAttribute('style', 'text-decoration: underline');
            aboutButton.removeAttribute('style', 'text-decoration: underline');

        }
        function selectAbout() {
            aboutButton.setAttribute('style', 'text-decoration: underline');
            menuButton.removeAttribute('style', 'text-decoration: underline');
            homeButton.removeAttribute('style', 'text-decoration: underline');
            homePage.remove();


        }

    }
    const setHomeActive = () => {
        const homeButton = document.getElementById('home');
        homeButton.setAttribute('style', 'text-decoration: underline');
    }

    return { addNavbar }

}

export default navbar