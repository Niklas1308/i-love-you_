document.addEventListener("DOMContentLoaded", function () {
    const envelope = document.getElementById("envelope");
    const card = document.querySelector(".card");
    const yesButton = document.querySelector(".yes");
    const noButton = document.querySelector(".no");
    const gifContainer = document.getElementById("gif-container");
    const cardText = document.querySelector(".text");
    const buttons = document.querySelector(".buttons");
    const popup = document.getElementById("popup");

    let noButtonHoverCount = 0;

    if (!envelope || !card || !yesButton || !noButton || !gifContainer || !cardText || !buttons || !popup) {
        console.error("Ein oder mehrere Elemente wurden nicht gefunden!");
        return;
    }

    // Briefumschlag öffnen beim Klicken
    envelope.addEventListener("click", function () {
        envelope.style.top = "150%"; // Briefumschlag nach unten bewegen
        card.style.opacity = "1"; // Karte einblenden
    });

    yesButton.addEventListener("click", function () {
        gifContainer.innerHTML = `
            <img src="https://media.tenor.com/al4a1pG1f8YAAAAC/jump-bear.gif" alt="Jumping Bear">
            <p>Yay! Ich liebe dich so, mein loml!</p>
        `;

        gifContainer.style.display = "block";
        setTimeout(() => {
            gifContainer.classList.add("fade-in");
        }, 10);

        cardText.style.display = "none";
        buttons.style.display = "none";
    });

    noButton.addEventListener("mouseover", function () {
        const maxX = window.innerWidth - noButton.offsetWidth;
        const maxY = window.innerHeight - noButton.offsetHeight;

        const randomX = Math.max(0, Math.floor(Math.random() * maxX));
        const randomY = Math.max(0, Math.floor(Math.random() * maxY));

        noButton.style.position = "fixed";
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;

        noButtonHoverCount++;
        if (noButtonHoverCount === 3) {
            popup.style.display = "block";
            setTimeout(() => {
                popup.style.display = "none";
            }, 5000); // Popup nach 2 Sekunden ausblenden
        }
    });
});
