function playMusic(event) {
    event.preventDefault();

    const music = document.getElementById("bg-music");
    const secondSection = document.getElementById("blank-section");
    const card = document.querySelector(".spotify-card");

    // Start music
    music.currentTime = 0;

    music.play()
        .then(() => {

            // Glow ng picture
            card.classList.add("music-playing");

            // Start hearts
            startHearts();

        })
        .catch((error) => {
            console.error("Music error:", error);
        });

    // Lipat sa second screen
    secondSection.scrollIntoView({
        behavior: "smooth"
    });
}


function goBackToTop(event) {
    event.preventDefault();

    const music = document.getElementById("bg-music");
    const firstSection = document.querySelector(".first-screen");
    const card = document.querySelector(".spotify-card");

    // Stop music
    music.pause();
    music.currentTime = 0;

    // Remove glow
    card.classList.remove("music-playing");

    // Stop hearts
    stopHearts();

    // Balik sa first screen
    firstSection.scrollIntoView({
        behavior: "smooth"
    });
}


/* =========================
   HEART EFFECT
========================= */

let heartInterval = null;

function createHeart() {

    const heart = document.createElement("div");

    heart.classList.add("heart");

    const hearts = [
        "❤️",
        "💕",
        "💗",
        "💖",
        "💘"
    ];

    heart.innerHTML =
        hearts[Math.floor(Math.random() * hearts.length)];

    heart.style.left =
        Math.random() * 100 + "vw";

    heart.style.fontSize =
        (15 + Math.random() * 20) + "px";

    heart.style.animationDuration =
        (3 + Math.random() * 3) + "s";

    document.body.appendChild(heart);

    setTimeout(() => {
        heart.remove();
    }, 6000);
}


function startHearts() {

    stopHearts();

    heartInterval = setInterval(() => {
        createHeart();
    }, 500);
}


function stopHearts() {

    if (heartInterval) {
        clearInterval(heartInterval);
        heartInterval = null;
    }

    document.querySelectorAll(".heart").forEach(heart => {
        heart.remove();
    });
}