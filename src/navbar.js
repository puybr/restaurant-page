import home from './home'
import Menu from './menu'

const navbar = () => {
    const addNavbar = () => {
        const body = document.querySelector('body');
        const navElement = `
        <div class="topnav">
            <li id="home">HOME</li>
            <li id="menu">MENU</li>
            <li id="about">ABOUT US</li>
        </div>
        `;
        const heading = '<h1>PIZZAFACE</h1>';
        body.insertAdjacentHTML("afterbegin", navElement);
        setHomeActive();
        setEventListeners();
    }
    const setEventListeners = () => {
        const home = document.getElementById('home');
        const menu = document.getElementById('menu');
        const about = document.getElementById('about');
    }
    const setHomeActive = () => {
        const home = document.getElementById('home');
        home.setAttribute('style', 'text-decoration: underline');
        navHome();
        setMenuActive();
    }
    const setMenuActive = () => {
        const menu = new Menu();
        menu.sayHi();
    }
    const navHome = () => {
        const homePage = home();
        homePage.renderBackground();
    }
    return { addNavbar }

}

export default navbar