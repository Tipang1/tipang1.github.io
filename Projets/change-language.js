const switchButton = document.getElementById("lang-switch");
const langIcon = document.getElementById("lang-icon");

let currentLang = "🇫🇷";

switchButton.addEventListener("click", () => {
    currentLang = currentLang === "🇫🇷" ? "🇬🇧" : "🇫🇷";

    document.querySelectorAll("[data-lang]").forEach(el => {
        el.classList.toggle("hidden", el.dataset.lang !== currentLang);
    });

    // Changer l’icône
    if (currentLang === "🇫🇷") {
        langIcon.src = "./images/French.png";
        langIcon.alt = "🇫🇷";
        document.documentElement.lang = "fr";
    } else {
        langIcon.src = "./images/English.png";
        langIcon.alt = "🇬🇧";
        document.documentElement.lang = "en";
    }
});
