const home = () => {
    const renderBackground = () => {
        const body = document.querySelector('body');
        const bg = `<div class="home"></div>`;
        body.insertAdjacentHTML("afterend", bg);

    }
    return { renderBackground };

}

export default home