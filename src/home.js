"use strict";

const home = () => {
    const renderBackground = () => {
        const home = `
        <div class="home">
        <span><h1>PIZZAFACE</h1></span>
        </div>`;
        const body = document.querySelector('body');
        body.insertAdjacentHTML('beforeend', home);  
    };
    return { renderBackground };
};

export default home
