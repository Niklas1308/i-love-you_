function createHearts() {
    const container = document.querySelector('.container');
    const button = document.getElementById('glowButton');
    const messageElement = document.getElementById("message");

    // Button verschwinden lassen
    button.style.display = 'none';

    // Nachricht anzeigen
    messageElement.textContent = "Ich liebe dich ❤️";
    messageElement.style.opacity = "1";


    function showLoveMessage() {
        const popup = document.getElementById('lovePopup');
        popup.style.display = 'block'; // Popup anzeigen
    }

    function closePopup() {
        const popup = document.getElementById('lovePopup');
        popup.style.display = 'none'; // Popup schließen
    }

    // Herzen erzeugen
    for (let i = 0; i < 50; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');

        // Zufällige Position und Animation
        const size = Math.random() * 30 + 10; // Größe zwischen 10px und 40px
        heart.style.width = `${size}px`;
        heart.style.height = `${size}px`;
        heart.style.left = `${Math.random() * 100}%`;
        heart.style.animationDuration = `${Math.random() * 2 + 3}s`; // Dauer 3-5 Sekunden

        // Herz hinzufügen
        container.appendChild(heart);

        // Herz nach Animation entfernen
        setTimeout(() => heart.remove(), 5000);
    }

    // Frage einblenden
    setTimeout(() => {
        document.getElementById('question').style.display = 'block';
        avoidClick(); // Aktiviert das Springen des "Nein"-Buttons
    }, 2000); // Nach 2 Sekunden einblenden
}

function showLoveMessage() {
    alert("Ich liebe dich auch!!!");
}

function avoidClick() {
    const noButton = document.getElementById('noButton');
    const container = document.querySelector('.container');

    noButton.addEventListener('mouseover', () => {
        // Zufällige Position innerhalb des Containers
        const randomX = Math.random() * (container.offsetWidth - noButton.offsetWidth);
        const randomY = Math.random() * (container.offsetHeight - noButton.offsetHeight);

        // Neue Position setzen
        noButton.style.position = 'absolute';
        noButton.style.left = `${randomX}px`;
        noButton.style.top = `${randomY}px`;
    });
}
