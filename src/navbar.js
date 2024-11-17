"use strict";

import home from './home'
import { Pizza, Vegan } from './menu'
import about from './about'

const holyCheeses = new Pizza('HOLY CHEESES', '£11.50', 'Gorgonzola, Parmesan, mascarpone, caramelised onion', 'images/holy-cheeses.jpg');
const johnno = new Pizza('JOHNNO', '£13.50', 'Red onions, olives, peppers, sautéed mushrooms, Parmesan, fresh and dried chillies', 'images/johnno.jpg');
const meathead = new Pizza('MEATHEAD', '£15.00', 'Chorizo, pepperoni, pancetta, pork and wild boar salami, and lamb Prosciutto with onions and mushrooms', 'images/meathead.jpg');

const homePage = home();
const aboutPage = about();

const navbar = () => {
    const addNavbar = () => {
        homePage.renderHome();
        const body = document.querySelector('body');
        const navElement = `
        <ul class="topnav">
           <span>
                <li id="home">HOME</li>
            </span>
            <span>
                <li id="menu">MENU</li>
            </span>
            <span>
                <li id="about">ABOUT</li>
            </span>
        </ul>
        `;
        body.insertAdjacentHTML("afterbegin", navElement);
        setActive('home');       
        setEventListeners();
        clearDisplay('home');   
    };
    const clearDisplay = target => {
        const elements = document.querySelectorAll('div');
        elements.forEach((element) => {
            if (element.className !== `${target}`){
                element.remove();
            };
        });
    };
    const setEventListeners = () => {
        const menuButton = document.getElementById('menu');
        menuButton.addEventListener('click', selectMenu);
        function selectMenu(e) {
            if (!menuButton.classList.contains('active')) {
                setActive(e.target.id);
                clearDisplay(e.target.id);
                johnno.renderPizza();
                holyCheeses.renderPizza();
                meathead.renderPizza();
            } else return;
        };
        const homeButton = document.getElementById('home');
        homeButton.addEventListener('click', selectHome);
        function selectHome(e) {
            if (!homeButton.classList.contains('active')) {
                setActive(e.target.id);
                clearDisplay(e.target.id);
                homePage.renderHome();
            } else return;
        };
        const aboutButton = document.getElementById('about');
        aboutButton.addEventListener('click', selectAbout);
        function selectAbout(e) {
            if (!aboutButton.classList.contains('active')) {
                setActive(e.target.id);
                clearDisplay(e.target.id);
                aboutPage.renderAboutPage();
            } else return;
        };
    
    };
    const setActive = target => {
        const elements = document.querySelectorAll('li')
        elements.forEach((element) => {
           element.classList.remove('active');
        });
        const link = document.getElementById(`${target}`);
        link.classList.add('active');
    };

    return { addNavbar }
};

export default navbar
