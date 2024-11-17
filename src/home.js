"use strict";

const home = () => {
    const renderHome = () => {
        const home = `
        <div class="home">
            <span class="splash">
                <h1>PIZZAFACE</h1>
                <ul class="subtext">
                <span>
                        <li id="facebook">FACEBOOK</li>
                    </span>
                    <span>
                        <li id="twitter">TWITTER</li>
                    </span>
                    <span>
                        <li id="order">ORDER ONLINE</li>
                    </span>
                </ul>
            </span>
            <span>
                <img src="images/1.jpg" alt="home">
            </span>
        </div>`;
        const body = document.querySelector('body');
        body.insertAdjacentHTML('beforeend', home);  
    };
    return { renderHome };
};

export default home
