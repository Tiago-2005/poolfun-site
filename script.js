/* Changer de page */
function showSection(id) {
    document.querySelectorAll(".page").forEach(page => {
        page.classList.remove("active");
    });
    document.getElementById(id).classList.add("active");
}

/* Afficher les détails d'un ballon */
function showBallon(type) {
    const data = {
        basique: {
            titre: "Ballon de piscine basique",
            image: "https://www.clubpiscine.ca/images/detailed/69/9001_24_Inch_Coloured_Inflatable_Beach_Ball_1.png",
            utilisation: "Utilisation : jeu libre, détente, piscine familiale.",
            endroits: "Endroits idéaux : piscines privées, vacances, plages.",
            prix: "Prix : 5 €"
        },
        enfant: {
            titre: "Ballon de piscine enfant",
            image: "https://www.francegrossiste.com/destockage/wp-content/uploads/2022/07/1354400746-1.jpg",
            utilisation: "Utilisation : jeux sécurisés pour enfants.",
            endroits: "Endroits idéaux : piscines peu profondes, jardins.",
            prix: "Prix : 7 €"
        },
        design: {
            titre: "Ballon de piscine design",
            image: "https://www.francegrossiste.com/destockage/wp-content/uploads/2022/07/1222262555-1.jpg",
            utilisation: "Utilisation : décoration et loisirs aquatiques.",
            endroits: "Endroits idéaux : piscines modernes, hôtels, soirées d’été.",
            prix: "Prix : 15 €"
        },
        xxl: {
            titre: "Ballon de piscine XXL",
            image: "https://img.fruugo.com/product/1/49/569058491_max.jpg",
            utilisation: "Utilisation : jeux collectifs et détente.",
            endroits: "Endroits idéaux : grandes piscines, événements.",
            prix: "Prix : 12 €"
        }
    };

    const ballon = data[type];

    document.getElementById("ballonTitre").textContent = ballon.titre;
    document.getElementById("ballonImage").src = ballon.image;
    document.getElementById("ballonUtilisation").textContent = ballon.utilisation;
    document.getElementById("ballonEndroits").textContent = ballon.endroits;
    document.getElementById("ballonPrix").textContent = ballon.prix;

    showSection("ballonDetails");
}

/* Formulaire contact */
const form = document.getElementById("contactForm");
if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Merci pour votre message ! L’équipe PoolFun vous répondra bientôt.");
        form.reset();
    });
}
