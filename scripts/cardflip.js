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
        is100PercentBigger(back) ? cardDiv.style.maxHeight = '100%' : cardDiv.style.maxHeight = `${back.offsetHeight}px`;
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

// Function to check if the element's height is 100% bigger than its max-height
function is100PercentBigger(element) {
    const computedStyle = window.getComputedStyle(element);
    
    // Get the numerical max-height value (or null if none is set)
    const maxHeight = parseInt(computedStyle.maxHeight, 10);
    
    // Temporarily set height to 100% and get its computed value
    const originalHeight = element.style.height;
    element.style.height = '100%';
    const fullHeight = element.offsetHeight;
    
    // Reset the height back to original
    element.style.height = originalHeight;

    // If max-height is not set (or is 'none'), assume no restriction
    if (isNaN(maxHeight)) return true;

    return fullHeight > maxHeight;
}