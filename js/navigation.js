function navigateTo(target) {
    window.scrollTo({
        top: document.getElementById(target).offsetTop,
        left: 0,
        behavior: 'smooth'
    });
}
function openresume() {
    window.open("https://drive.google.com/file/d/13z9vtE6Z8SqrjR4u79WStR77yL8l-NhW/view?usp=sharing", "_blank");
}
function opencontact() {
    window.open("mailto:scaria@scaria.dev");
}