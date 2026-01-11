const switchButton = document.getElementById("lang-switch");
const langIcon = document.getElementById("lang-icon");

let currentLang = localStorage.getItem("lang") || "fr";
toggle_hiden()
update_button()

switchButton.addEventListener("click", () => {
    currentLang = currentLang === "fr" ? "en" : "fr";
    localStorage.setItem("lang", currentLang);

    toggle_hiden()
    update_button()
});

function toggle_hiden() {
    document.querySelectorAll("[data-lang]").forEach(el => {
        el.classList.toggle("hidden", el.dataset.lang !== currentLang);
    });
}

function update_button() {
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
}
