// Flips the Project cards back and forth via a button
var cardDiv;
function flipCard(cardID) {
    const cardDiv = document.getElementById(cardID);
    cardDiv.style.transition = 'transform 0.4s ease-in-out, max-height 0.2s ease-in-out';
    cardDiv.style.transform = 'rotateY(180deg)';

    const front = cardDiv.querySelector('.project-card-front');
    const back = cardDiv.querySelector('.project-card-back');

    // Set initial height based on front before flipping
    cardDiv.style.maxHeight = `${front.offsetHeight}px`;

    setTimeout(() => {
        cardDiv.childNodes[1].style.display = 'none';
        cardDiv.childNodes[3].style.display = 'block';
        cardDiv.style.maxHeight = `${back.offsetHeight}px`;
    }, 200);
}

function flipCardBack(cardID) {
    const cardDiv = document.getElementById(cardID);
    cardDiv.style.transition = 'transform 0.4s ease-in-out, max-height 0.2s ease-in-out';
    cardDiv.style.transform = 'rotateY(0deg)';
    setTimeout(() => {
        cardDiv.childNodes[1].style.display = 'block';
        cardDiv.childNodes[3].style.display = 'none'; 
        cardDiv.style.maxHeight = '100%'; 
    }, 200);
}