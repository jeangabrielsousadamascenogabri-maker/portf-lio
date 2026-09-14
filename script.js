// ======================================
// BIEL SITES - JAVASCRIPT
// ======================================


// ======================================
// MENU MOBILE
// ======================================

const menuButton = document.getElementById("menuButton");
const menu = document.getElementById("menu");

if (menuButton && menu) {

    menuButton.addEventListener("click", () => {

        menu.classList.toggle("open");
        menuButton.classList.toggle("active");

    });


    // Fecha o menu quando clicar em um link

    const menuLinks = menu.querySelectorAll("a");

    menuLinks.forEach(link => {

        link.addEventListener("click", () => {

            menu.classList.remove("open");
            menuButton.classList.remove("active");

        });

    });

}


// ======================================
// HEADER AO ROLAR
// ======================================

const header = document.getElementById("header");

function updateHeader() {

    if (!header) return;

    if (window.scrollY > 30) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }

}

window.addEventListener("scroll", updateHeader);

updateHeader();


// ======================================
// ANIMAÇÃO DOS ELEMENTOS
// ======================================

const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(

    (entries) => {

        entries.forEach(entry => {

            if (entry.isIntersecting) {

                entry.target.classList.add("show");

                observer.unobserve(entry.target);

            }

        });

    },

    {
        threshold: 0.12
    }

);


revealElements.forEach(element => {

    observer.observe(element);

});


// ======================================
// ANO AUTOMÁTICO
// ======================================

const year = document.getElementById("year");

if (year) {

    year.textContent = new Date().getFullYear();

}


// ======================================
// FECHAR MENU AO REDIMENSIONAR
// ======================================

window.addEventListener("resize", () => {

    if (window.innerWidth > 700 && menu) {

        menu.classList.remove("open");

        if (menuButton) {
            menuButton.classList.remove("active");
        }

    }

});


// ======================================
// PROTEÇÃO CONTRA SCROLL HORIZONTAL
// ======================================

document.documentElement.style.overflowX = "hidden";
document.body.style.overflowX = "hidden";


// ======================================
// EFEITO NOS CARDS DE SERVIÇO
// ======================================

const serviceCards = document.querySelectorAll(".service-card");

serviceCards.forEach(card => {

    card.addEventListener("mouseenter", () => {

        card.style.transform = "translateY(-8px)";

    });

    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


// ======================================
// LINKS EXTERNOS
// ======================================

const externalLinks = document.querySelectorAll(
    'a[target="_blank"]'
);

externalLinks.forEach(link => {

    link.addEventListener("click", () => {

        // Mantém o comportamento normal do navegador.
        // Apenas garante que o clique não seja bloqueado.

        link.blur();

    });

});
