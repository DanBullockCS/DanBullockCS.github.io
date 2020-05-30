var cardDiv;

function flipCard(cardID) {
    cardDiv = document.getElementById(cardID);
    cardDiv.style.transition = '0.8s';
    cardDiv.style.transform = 'rotateY(180deg)';
    cardDiv.childNodes[1].style.display = 'none';
    cardDiv.childNodes[3].style.display = 'block';
}

function flipCardBack(cardID) {
    cardDiv = document.getElementById(cardID);
    cardDiv.style.transition = '0.8s';
    cardDiv.style.transform = 'rotateY(0deg)';
    cardDiv.childNodes[1].style.display = 'block';
    cardDiv.childNodes[3].style.display = 'none';
}
