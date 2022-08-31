const navBarElement = document.querySelector(".navBar");
const bottomContainerElement = document.querySelector(".bottom-container");

window.addEventListener('scroll', () => {
    if (window.scrollY >
        (bottomContainerElement.offsetTop) -
        (navBarElement.offsetHeight) - 50) {
        navBarElement.classList.add("active")
    } else {
        navBarElement.classList.remove("active")
    }
});