window.onload = function () {
    showSection("accueil");
};

function showSection(id) {
    const pages = document.querySelectorAll(".page");

    pages.forEach(page => {
        page.style.display = "none";
    });

    const activePage = document.getElementById(id);
    if (activePage) {
        activePage.style.display = "block";
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
