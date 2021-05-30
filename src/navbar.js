const navbar = () => {
    const addNavbar = () => {
        console.log('Hello Navbar!');
        const body = document.querySelector('body');
        const navElement = `
        <div class="topnav">
            <a href="">Home</a>
            <a href="">Menu</a>
        <a href="">About Us</a>
        </div>
        `;
        const heading = '<h1>PIZZAFACE</h1>';
        body.insertAdjacentHTML("afterbegin", navElement);
    }
    return { addNavbar }

}

export default navbar