// Flips the Project cards back and forth via a button
var cardDiv;

function flipCard(cardID) {
    cardDiv = document.getElementById(cardID);
    cardDiv.style.transition = '0.2s ease-in-out';
    cardDiv.style.opacity = '0.3';
    setTimeout(() => {
        cardDiv.style.opacity = '1';
    }, 200)
    cardDiv.childNodes[1].style.display = 'none';
    cardDiv.childNodes[3].style.display = 'block';
}

function flipCardBack(cardID) {
    cardDiv = document.getElementById(cardID);
    cardDiv.style.transition = '0.2s ease-in-out';
    cardDiv.style.opacity = '0.3';
    setTimeout(() => {
        cardDiv.style.opacity = '1';
    }, 200)
    cardDiv.childNodes[1].style.display = 'block';
    cardDiv.childNodes[3].style.display = 'none';
}
