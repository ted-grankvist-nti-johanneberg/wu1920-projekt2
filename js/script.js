window.onscroll = function() {myFunction()};
const block = document.querySelector('article.block')

const tl = new TimelineMax();

tl.fromTo(block,1, {width: "0vmin"}, {width: "70vmin"}) //Något fungerar inte, kolla på videon av Dev Ed igen och se ifall du gör något fel.

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


// https://www.youtube.com/watch?v=4uL9bAKOaVQ

// Skapa en animation för den lilla arrowen somm gör att den rotera 180 grader efter du scrollat x grader ner, och sedan när du scrollar upp igen förbi den punkten
// på y-axeln så roterar den runt 180 grader tillbaka.