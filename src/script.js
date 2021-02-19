const topIcon = document.querySelector('.top'),
    bars = document.querySelector('.hamburger-menu'),
    menu = document.querySelector('#nav'),
    links = menu.querySelectorAll('a');



window.addEventListener('scroll', scrollFunction);
bars.addEventListener('click', navToggle);
links.forEach((link) => {
    link.addEventListener('click', navToggle)
});

function navToggle() {
    bars.classList.toggle('active');
    menu.classList.toggle('active');
    document.body.classList.toggle('hide-scrolling');
}

function scrollFunction() {
    if (document.body.scrollTop > 90 || document.documentElement.scrollTop > 90) {
        topIcon.style.display = "block";
    } else {
        topIcon.style.display = "none";
    }
};