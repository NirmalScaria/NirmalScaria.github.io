function navigateTo(target) {
    window.scrollTo({
        top: document.getElementById(target).offsetTop,
        left: 0,
        behavior: 'smooth'
    });
}
function openresume() {
    window.open("https://drive.google.com/file/d/1spOV3PCW2gFkQIHBFKV_paZdGLgxtTjO/view?usp=share_link", "_blank");
}
function opencontact() {
    window.open("mailto:scaria@scaria.dev");
}