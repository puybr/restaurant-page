"use strict";

const about = () => { 
    const renderAboutPage = () => {
        const aboutUs = `
        <div class="about">
            <h2>ABOUT US</h2>
            <p>
            It’s hard to find a good pizza.
            But good pizza isn’t hard to do. With great ingredients, a proper oven, and a bit of practice, it’s actually pretty simple.     
            We use fresh veg deliverd daily, the best meats that we can find, and Sardinian ‘00’ flour, and cook it all propertly in a 300 degree stone-based oven.           
            Good pizza is as simple as that, and that’s what we do.
            </p>
            <img src="images/face.jpg" alt="logo" width="150">
        </div>
        `;
        const body = document.querySelector('body');
        body.insertAdjacentHTML('beforeend', aboutUs);
    };
    return { renderAboutPage};
};

export default about
