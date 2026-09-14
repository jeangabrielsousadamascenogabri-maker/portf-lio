// =========================
// MENU MOBILE
// =========================

const menuButton = document.querySelector(".menu-button");
const menu = document.querySelector(".menu");

if (menuButton && menu) {
    menuButton.addEventListener("click", () => {
        menu.classList.toggle("active");
    });

    // Fecha o menu ao clicar em um link
    const menuLinks = menu.querySelectorAll("a");

    menuLinks.forEach(link => {
        link.addEventListener("click", () => {
            menu.classList.remove("active");
        });
    });
}


// =========================
// ANIMAÇÃO AO APARECER
// =========================

const revealElements = document.querySelectorAll(".reveal");

const revealObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
                revealObserver.unobserve(entry.target);
            }
        });
    },
    {
        threshold: 0.1
    }
);

revealElements.forEach(element => {
    revealObserver.observe(element);
});


// =========================
// CONTADOR DOS NÚMEROS
// =========================

const counters = document.querySelectorAll("[data-count]");

const counterObserver = new IntersectionObserver(
    (entries) => {
        entries.forEach(entry => {

            if (!entry.isIntersecting) return;

            const counter = entry.target;
            const target = Number(counter.dataset.count);

            let current = 0;
            const duration = 1200;
            const increment = target / (duration / 16);

            const updateCounter = () => {
                current += increment;

                if (current < target) {
                    counter.textContent = Math.floor(current);
                    requestAnimationFrame(updateCounter);
                } else {
                    counter.textContent = target;
                }
            };

            updateCounter();

            counterObserver.unobserve(counter);
        });
    },
    {
        threshold: 0.5
    }
);

counters.forEach(counter => {
    counterObserver.observe(counter);
});


// =========================
// ANO AUTOMÁTICO
// =========================

const yearElements = document.querySelectorAll(".current-year");

yearElements.forEach(element => {
    element.textContent = new Date().getFullYear();
});


// =========================
// EFEITO NO HEADER AO ROLAR
// =========================

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if (!header) return;

    if (window.scrollY > 50) {
        header.classList.add("scrolled");
    } else {
        header.classList.remove("scrolled");
    }
});


// =========================
// SCROLL SUAVE
// =========================

document.querySelectorAll('a[href^="#"]').forEach(link => {

    link.addEventListener("click", function(event) {

        const targetId = this.getAttribute("href");

        if (!targetId || targetId === "#") return;

        const target = document.querySelector(targetId);

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });

});


// =========================
// FECHAR MENU AO CLICAR FORA
// =========================

document.addEventListener("click", (event) => {

    if (!menu || !menuButton) return;

    const clickedInsideMenu = menu.contains(event.target);
    const clickedButton = menuButton.contains(event.target);

    if (!clickedInsideMenu && !clickedButton) {
        menu.classList.remove("active");
    }

});


// =========================
// EFEITO 3D NOS CARDS
// =========================

const cards = document.querySelectorAll(
    ".service-card, .project-card, .process-item"
);

cards.forEach(card => {

    card.addEventListener("mousemove", event => {

        const rect = card.getBoundingClientRect();

        const x = event.clientX - rect.left;
        const y = event.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * -3;
        const rotateY = ((x - centerX) / centerX) * 3;

        card.style.transform =
            `perspective(800px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-5px)`;
    });

    card.addEventListener("mouseleave", () => {
        card.style.transform = "";
    });

});


// =========================
// BOTÕES DO WHATSAPP
// =========================

const whatsappNumber = "55459911425371";

document.querySelectorAll(".whatsapp-link").forEach(button => {

    button.addEventListener("click", event => {

        event.preventDefault();

        const message =
            "Olá! Vi seu portfólio e gostaria de saber mais sobre a criação de um site.";

        const url =
            `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

        window.open(url, "_blank");
    });

});


// =========================
// CONSOLE
// =========================

console.log("Biel Sites carregado com sucesso 🚀");
