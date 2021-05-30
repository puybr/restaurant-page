import home from './home'

const navbar = () => {
    const addNavbar = () => {
        console.log('Hello Navbar!');
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
    }
    const setHomeActive = () => {
        const home = document.getElementById('home');
        console.log(home);
        home.setAttribute('style', 'text-decoration: underline');
        navHome();
    }
    const navHome = () => {
        const homePage = home();
        homePage.renderBackground();
    }
    return { addNavbar }

}

export default navbar