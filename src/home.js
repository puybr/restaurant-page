"use strict";

const home = () => {
    const renderHome = () => {
        const home = `
        <div class="home">
        <h1>PIZZAFACE</h1>
        <p>FACEBOOK | TWITTER | ORDER ONLINE</p>
        </div>`;
        const body = document.querySelector('body');
        body.insertAdjacentHTML('beforeend', home);  
    };
    return { renderHome };
};

export default home
