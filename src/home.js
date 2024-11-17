"use strict";

const home = () => {
    const renderHome = () => {
        const home = `
        <div class="home">
        <h1>PIZZAFACE</h1>
        <h3>FACEBOOK | TWITTER | ORDER ONLINE</h3>
        <img src="images/1.jpg" alt="home" width="100%">
        </div>`;
        const body = document.querySelector('body');
        body.insertAdjacentHTML('beforeend', home);  
    };
    return { renderHome };
};

export default home
