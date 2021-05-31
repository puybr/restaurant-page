import home from './home'
import { Pizza, Vegan } from './menu'

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
    }
    const setEventListeners = () => {
        const menuButton = document.getElementById('menu');
        const homeButton = document.getElementById('home');
        menuButton.addEventListener('click', selectMenu);
        homeButton.addEventListener('click', selectHome);
        const homePage = home();
        function selectMenu() {
            homePage.remove();
            menuButton.setAttribute('style', 'text-decoration: underline');
            homeButton.removeAttribute('style', 'text-decoration: underline');
        }
        function selectHome() {
            homePage.renderBackground();
            const homeButton = document.getElementById('home');
            homeButton.setAttribute('style', 'text-decoration: underline');
            const menuButton = document.getElementById('menu');
            menuButton.removeAttribute('style', 'text-decoration: underline');
        }

    }
    const setHomeActive = () => {
        const homeButton = document.getElementById('home');
        homeButton.setAttribute('style', 'text-decoration: underline');
        navHome();
    }
    const navHome = () => {
        const homePage = home();
        homePage.renderBackground();
    }
    return { addNavbar }

}

export default navbar