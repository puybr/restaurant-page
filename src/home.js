const home = () => {
    const renderBackground = () => {
        const body = document.querySelector('body');
        const bg = document.createElement('div');
        bg.classList.add('homepage');
        body.appendChild(bg);
    }

    const remove = () => {
        const body = document.querySelector('body');
        body.removeChild(document.querySelector('.homepage'));
    };
    return { renderBackground, remove };

}

export default home