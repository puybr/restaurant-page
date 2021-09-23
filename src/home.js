const home = () => {
    const renderBackground = () => {
        const body = document.querySelector('body');
        const bg = document.createElement('div');
        bg.classList.add('home');
        body.appendChild(bg);
    };
    return { renderBackground };

};


export default home