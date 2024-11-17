"use strict";

const home = () => {
    const renderHome = () => {
        const home = `
        <div class="home">
            <section class="splash">
                <h1>PIZZAFACE</h1>
                <ul class="subtext">
                    <li id="facebook">FACEBOOK</li>
                    <li id="twitter">TWITTER</li>
                    <li id="order">ORDER ONLINE</li>
                </ul>
            </section>
            <span><img src="images/1.jpg" alt="home"></span>
        </div>`;
        const body = document.querySelector('body');
        body.insertAdjacentHTML('beforeend', home);  
    };
    return { renderHome };
};

export default home
