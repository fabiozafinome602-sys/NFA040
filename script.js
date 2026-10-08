const btnOui = document.getElementById("btn-oui");
const btnNon = document.getElementById("btn-non");
const titre = document.getElementById("titre");
const message = document.getElementById("message");
const emoji = document.getElementById("emoji");
const boutons = document.getElementById("boutons");
const conteneurCoeurs = document.getElementById("coeurs");

const phrasesNon = [
    "Tu es sûre ? 🥺",
    "Réfléchis encore...",
    "Même pas un petit peu ? 💔",
    "Allez, dis oui !",
    "Je t'offre un dessert 🍰",
    "Le bouton Oui est plus joli 😏"
];
let compteur = 0;

// Coeurs qui flottent en continu
function creerCoeur() {
    const coeur = document.createElement("span");
    coeur.classList.add("coeur");
    coeur.textContent = ["💖", "💕", "💗", "❤️", "💘"][Math.floor(Math.random() * 5)];
    coeur.style.left = Math.random() * 100 + "vw";
    coeur.style.fontSize = 16 + Math.random() * 28 + "px";
    coeur.style.animationDuration = 4 + Math.random() * 4 + "s";
    conteneurCoeurs.appendChild(coeur);
    setTimeout(() => coeur.remove(), 8000);
}
setInterval(creerCoeur, 300);

// Le bouton Non s'enfuit
function fuir() {
    btnNon.style.position = "fixed";

    const maxX = window.innerWidth - btnNon.offsetWidth - 10;
    const maxY = window.innerHeight - btnNon.offsetHeight - 10;
    btnNon.style.left = Math.random() * maxX + "px";
    btnNon.style.top = Math.random() * maxY + "px";

    message.textContent = phrasesNon[compteur % phrasesNon.length];
    compteur++;

    // Le bouton Oui grossit à chaque tentative
    const taille = 1 + compteur * 0.15;
    btnOui.style.transform = "scale(" + Math.min(taille, 2.2) + ")";
}

btnNon.addEventListener("mouseenter", fuir);
btnNon.addEventListener("touchstart", function (event) {
    event.preventDefault(); // pour le téléphone
    fuir();
});
btnNon.addEventListener("click", fuir);

// Elle a dit oui
btnOui.addEventListener("click", function () {
    emoji.textContent = "🥰";
    titre.textContent = "Yessss ! 🎉";
    message.textContent = "Rendez-vous ce soir, je suis impatient de te voir ! 💕";
    boutons.style.display = "none";
    btnNon.style.display = "none";

    // Pluie de coeurs
    for (let i = 0; i < 60; i++) {
        setTimeout(creerCoeur, i * 40);
    }
});