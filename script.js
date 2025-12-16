function showSection(id) {
    const pages = document.querySelectorAll(".page");
    pages.forEach(page => page.classList.remove("active"));

    document.getElementById(id).classList.add("active");
}

const form = document.getElementById("contactForm");

form.addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Merci pour votre message ! L’équipe PoolFun vous répondra bientôt.");
    form.reset();
});
