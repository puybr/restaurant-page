const home = () => {
    console.log('Hello Home!');
    const renderBackground = () => {
        const body = document.querySelector('body');
        const bg = `<div class="intro"></div>`;
        body.insertAdjacentHTML("afterend", bg);
        console.log(bg);

    }
    return { renderBackground };

}

export default home