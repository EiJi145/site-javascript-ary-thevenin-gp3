document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuNav = document.querySelector('.menu-nav');

    menuToggle.addEventListener('click', () => {
        menuNav.classList.toggle('active');
    });
});



/* j'ai laissé mes codes pour le menu burger mais j'ai pas réussi a le faire marcher*/