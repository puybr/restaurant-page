"use strict";

const home = () => {
    const renderHome = () => {
        const home = `
        <div class="home">
        <span><h1>PIZZAFACE</h1></span>
        <span>
        <p>FACEBOOK | TWITTER | ORDER ONLINE</p>
        </span>
        </div>`;
        const body = document.querySelector('body');
        body.insertAdjacentHTML('beforeend', home);  
    };
    return { renderHome };
};

export default home
