const switchButton = document.getElementById("lang-switch");
const langIcon = document.getElementById("lang-icon");

let currentLang = "fr";

switchButton.addEventListener("click", () => {
    currentLang = currentLang === "fr" ? "en" : "fr";

    document.querySelectorAll("[data-lang]").forEach(el => {
        el.classList.toggle("hidden", el.dataset.lang !== currentLang);
    });

    // Changer l’icône
    if (currentLang === "fr") {
        langIcon.src = "./images/French.png";
        langIcon.alt = "🇫🇷";
        document.documentElement.lang = "fr";
    } else {
        langIcon.src = "./images/English.png";
        langIcon.alt = "🇬🇧";
        document.documentElement.lang = "en";
    }
});
