class Pizza {
    constructor(title, price, description) {
        this.title = title;
        this.price = price;
        this.description = description;
    }; 
    render() {
        const pizzaMenu = `
        <div class="menu">
            <h1>${this.title} </h1>
            <h3>${this.price}</h3>
            <p>${this.description}</p>
        </div>
        `;
        const body = document.querySelector('body');
        body.insertAdjacentHTML('afterend', pizzaMenu);
    }

};


class Vegan {
    constructor(title, price, description) {
        this.title = title;
        this.price = price;
        this.description = description;
    }; 
    sayHi() {
        console.log(`Hi! I'm a ${this.title} pizza!`);
    }

};

export { Pizza, Vegan }


const holyCheeses = new Pizza('HOLY CHEESES', '£11.50', 'Gorgonzola, Parmesan, mascarpone, caramelised onion');
const johnno = new Pizza('JOHNNO', '£11.50', 'Gorgonzola, Parmesan, mascarpone, caramelised onion');
holyCheeses.render();
johnno.render();