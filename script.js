document.getElementById("card").addEventListener("click", function() {
    let front = document.querySelector(".card-front");
    let inside = document.querySelector(".card-inside");

    front.style.display = "none";
    inside.style.display = "flex";
});

function answerYes() {
    alert("Juhu! 💖 Ich freue mich!");
}

function answerNo() {
}
