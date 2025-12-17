window.onload = function () {
    showSection("accueil");
};

function showSection(id) {
    document.querySelectorAll(".page").forEach(page => {
        page.style.display = "none";
    });

    const section = document.getElementById(id);
    if (section) {
        section.style.display = "block";
    }

    window.scrollTo(0, 0);
}

const form = document.getElementById("contact-form");
if (form) {
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        alert("Merci pour votre message ! L’équipe PoolFun vous répondra rapidement.");
        form.reset();
    });
}
