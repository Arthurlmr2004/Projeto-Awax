const menuOpener = document.querySelector('.menuOpener');
const menu = document.querySelector('.menu');

menuOpener.addEventListener('click', function () {
    menu.classList.toggle('active');
});
