document.addEventListener('DOMContentLoaded', function() {
    const langOptElements = document.querySelectorAll('.lang-opt');
    const menuLanguagesElement = document.querySelector('.menu-languages');
    const arrowElements = document.querySelectorAll('.lang-opt .material-symbols-outlined');

    langOptElements.forEach(function(opt) {
        const arrow = opt.querySelector('.material-symbols-outlined');
        
        opt.addEventListener('mouseover', function() {
            menuLanguagesElement.classList.add('show');
            arrow.classList.add('rotate-arrow');
        });

        opt.addEventListener('mouseout', function(event) {
            const relatedTarget = event.relatedTarget;
            if (!menuLanguagesElement.contains(relatedTarget)) {
                menuLanguagesElement.classList.remove('show');
                arrow.classList.remove('rotate-arrow');
            }
        });
    });

    menuLanguagesElement.addEventListener('mouseover', function() {
        this.classList.add('show');
        arrowElements.forEach(arrow => arrow.classList.add('rotate-arrow'));
    });

    menuLanguagesElement.addEventListener('mouseout', function(event) {
        const relatedTarget = event.relatedTarget;
        if (!menuLanguagesElement.contains(relatedTarget)) {
            this.classList.remove('show');
            arrowElements.forEach(arrow => arrow.classList.remove('rotate-arrow'));
        }
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const menuClose = document.querySelector('.menu-close');
    const menuOptionsMobile = document.querySelector('.menu-options-mobile');

    menuToggle.addEventListener('click', function() {
        menuOptionsMobile.style.display = 'flex';
        menuToggle.style.display = 'none';
        menuClose.style.display = 'inline';
    });

    menuClose.addEventListener('click', function() {
        menuOptionsMobile.style.display = 'none';
        menuClose.style.display = 'none';
        menuToggle.style.display = 'inline';
    });
});