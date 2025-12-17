// Au chargement de la page, on affiche automatiquement l'accueil
document.addEventListener("DOMContentLoaded", function () {
    showSection("accueil");
});

// Fonction qui affiche une section et cache les autres
function showSection(sectionId) {
    const sections = document.querySelectorAll(".page");

    sections.forEach(section => {
        section.style.display = "none";
    });

    const activeSection = document.getElementById(sectionId);
    if (activeSection) {
        activeSection.style.display = "block";
        window.scrollTo(0, 0); // remonte en haut de la page
    }
}

// Gestion du formulaire de contact
const contactForm = document.getElementById("contact-form");

if (contactForm) {
    contactForm.addEventListener("submit", function (event) {
        event.preventDefault();

        alert(
            "Merci pour votre message !\n" +
            "L’équipe PoolFun vous répondra dans les plus brefs délais."
        );

        contactForm.reset();
    });
}
