class Pizza {
    constructor(title, price, description) {
        this.title = title;
        this.price = price;
        this.description = description;
    };
    renderPizza() {
        const pizzaMenu = `
        <div class="menu">
            <h1>${this.title} </h1>
            <h3>${this.price}</h3>
            <p>${this.description}</p>
        </div>
        `;
        const body = document.querySelector('body')
        const content = document.createElement('div');
        content.classList.add('wrapper');
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
