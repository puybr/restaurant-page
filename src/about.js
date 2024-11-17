"use strict";

const about = () => { 
    const renderAboutPage = () => {
        const aboutUs = `
        <div class="about">
            <h1>ABOUT</h1>
            <div class="wrapper">
                <div>
                    <img src="images/face.jpg" alt="face" id="face">
                </div>
                <div>
                    <p>
                    It's hard to find a good pizza!
                    But good pizza isn't hard to do. With great ingredients, a proper oven, and a bit of practice, it's actually pretty simple.     
                    We use fresh veg deliverd daily, the best meats that we can find, and Sardinian '00' flour, and cook it all propertly in a 300 degree stone-based oven.           
                    Good pizza is as simple as that, and that's what we do.
                    Started in 2009 by Bertie and Woody, a chef and a graphic designer, Pizzaface was born out of a run down pizzeria in Kemptown Village.
                    Without much of an idea on how to run a business and relying on a lot of help from friends and family, the shop opened with its 20-year old Blodgett oven, basic equipment, and a very small menu of 6 pizzas.
                    </p>
                    <p>
                    We set out purely to make the best pizza that we could, and having grown organically, learning along the way, and slowly reinvesting what we make into improving what we have, this is what we have been trying to do.
                    But that is indeed the challenge that we have set ourselves and one that we will stick to.
                    </p>
                    <p>
                    Over the past three years a unique menu has begun to blossom, specialising in showcasing bold flavours, interesting ingredients, and taking pride in preparing everything by hand.
                    Amazing meats, great cheeses, and fresh herbs and veg, we make some damn good pizza. We've also added vegan and gluten-free options, and most excitingly have teamed up with Boho Gelato to add some inventive and ever-changing ice-creams and sorbets to the menu.
                    We've had great input and support from so many in the Brighton and Hove community that has really shaped what we have become. Without it, we wouldn't be who we are today, so thank you very much!
                    We always like to get feedback good and bad, so tweet us, facebook us or email us.
                    </p>
                </div>
            </div>
            <h2>DELIVERY</h2>
            <section>
                <div>£2 charge for delivery</div>
                <div>£15 minimum bill</div>
                <div>We accept cards</div>
                <div>Max delivery are: <b>3 miles</b></div>
            </section>
        </div>
        `;
        const body = document.querySelector('body');
        body.insertAdjacentHTML('beforeend', aboutUs);
    };
    return { renderAboutPage};
};

export default about
