window.onload = function() {
    var scrollbtn = document.getElementById("scrollbtn");
};

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  // This number is hardcoded and I know this, but it's my site my rules.
  if (document.body.scrollTop > 600 || document.documentElement.scrollTop > 600) {
    scrollbtn.style.display = "block";
  } else {
    scrollbtn.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}