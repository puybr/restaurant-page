"use strict";

class Pizza {
    constructor(title, price, description) {
        this.title = title;
        this.price = price;
        this.description = description;
    };
    renderPizza() {
        const pizzaMenu = `
        <div>
            <h2>${this.title} </h2>
            <h3>${this.price}</h3>
            <p>${this.description}</p>
        </div>
        `;
        const body = document.querySelector('body')
        const content = document.createElement('div');
        content.classList.add('menu');
        body.appendChild(content);
        content.innerHTML = pizzaMenu;
    };
};

class Vegan {
    constructor(title, price, description) {
        this.title = title;
        this.price = price;
        this.description = description;
    }; 
    sayHi() {
        console.log(`Hi! I'm a ${this.title} pizza!`);
    };
};


export { Pizza, Vegan }
