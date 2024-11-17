"use strict";

const home = () => {
    const renderHome = () => {
        const home = `
        <div class="home">
            <section class="splash">
                <h1>PIZZAFACE</h1>
                <ul class="subtext">
                    <li id="facebook"><a href="http://facebook.com/pizzafacepizza" target="_blank">FACEBOOK</a></li>
                    <li id="twitter"><a href="https://twitter.com/pizzafacepizza" target="_blank">TWITTER</a></li>
                    <li id="order"><a href="https://pizzaface.orderswift.com" target="_blank">ORDER <nobr>ONLINE</a></li>
                </ul>
            <img src="images/1.jpg" alt="home">
            <span class="wrapper">
            <section class="address">
                <h2>HOVE</h2>
                202 Portland Rd Hove, BN3 5QN
                <h3>01273 965651</h3>
                Mon 4 - 10pm<br>
                Tue 4 - 10pm<br>
                Wed 4 - 10pm<br>
                Thu 4 - 10pm<br>
                Fri 12 - 10pm<br>
                Sat 12 - 10pm<br>
                Sun 4 - 9pm<br>
            </section>
            <section class="address">
                <h2>KEMPTOWN</h2>
                35 St Georges Rd Brighton, BN2 1ED
                <h3>01273 699082</h3>
                Mon 4 - 10pm<br>
                Tue 4 - 10pm<br>
                Wed 12 - 2pm + 4 - 10pm<br>
                Thu 12 - 2pm + 4 - 10pm<br>
                Fri 12 - 10pm<br>
                Sat 12 - 10pm<br>
                Sun 4 - 9pm<br>
            </section>
            <section class="address">
               <h2>WORTHING</h2>
                138 Montague Street Worthing, BN11 3HG
                <h3>01903 202026</h3>
                Mon 4 - 10pm<br>
                Tue 4 - 10pm<br>
                Wed 4 - 10pm<br>
                Thu 4 - 10pm<br>
                Fri 12 - 10pm<br>
                Sat 12 - 10pm<br>
                Sun 4 - 9pm<br>
            </section>
            </span>
        </div>
        </div>`;
        const body = document.querySelector('body');
        body.insertAdjacentHTML('beforeend', home);  
    };
    return { renderHome };
};

export default home
