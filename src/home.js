const home = () => {
    const renderBackground = () => {
        const body = document.querySelector('body');
        const bg = document.createElement('div');
        bg.classList.add('homepage');
        body.appendChild(bg);
    }

    const remove = () => {
        const home = document.querySelector('.homepage');
        home.remove();
    };
    return { renderBackground, remove };

}


export default home