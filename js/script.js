window.onscroll = function() {myFunction()};
/* window.onload = function() {typeWriter()};
const block = document.querySelector(".block")

const tl = new TimelineMax();

tl.fromTo(block, 1, {width: "0%"}, {width: "70vmin"}, ease, Power2.easeInOut ) */ //Något fungerar inte, kolla på videon av Dev Ed igen och se ifall du gör något fel.

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";

  /* if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("knapp1").style.display = "block";  och här 
   } else {
    document.getElementById("knapp1").style.display = "none";  Skriv här din kod för att rotera din ikon 
  }  */

}

/* function erroranimation() {

  
}

function error_return() {

} */


var lastScrollTop = 0;
$(function () {
  var element = $("#arrow");
  $(window).scroll(function () {
    if($(window).scrollTop() > 20) {
      element.addClass("animate1");
    }
    else {
      element.removeClass("animate1");
    }

    if($(window).scrollTop() < 30) {
      element.addClass("animate2");
    }
    else {
      element.removeClass("animate2");
    }

  });
}); 

$(document).on('click', '.error', function(e) {
  swal(
    'Fel!',
    'Knappens funktion finns inte än.',
    'error',
  )
});

/*var hchange = (document.getElementsByClassName('container').offsetHeight)*0.01 ;   ---> en variabel för att använda i funktionen ovan, till när fuktionen skall aktiveras */


/*var $arrow = $('.arrow');
var $window = $(window);
$win.on('scroll', function() {
  var top = $win.scrollTop();  "Om du ex skriver $win.scrollTop()/2; och ändrar kan du dividera och multiplicera hur snabbt den roterar typ"        
  $arrow.css('transform', 'rotate('+ top +'deg)');
  console.log('arrowscroll');
}); */  /* https://www.youtube.com/watch?v=CtebaT3VXcI WATCH THIS TUTORIAL - YOU ONLY NEED TO FIX SO THAT YOU HAVE THE RIGHT JQUERY */




/*if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
  document.getElementById("knapp1").style.display = "block";  och här 
 } else {
  document.getElementById("knapp1").style.display = "none";  Skriv här din kod för att rotera din ikon 
} */

/*
var i = 0;
var txt = 'Lorem ipsum dummy text blabla.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("changethis").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
} */


/* window.onscroll = function() {rotateFunction()};

function rotateFunction() {
  if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
    document.getElementById("knapp1").style.display = "block";
  } else {
    document.getElementById("knapp1").style.display = "none";
  }
} */

// https://www.youtube.com/watch?v=4uL9bAKOaVQ

/*Skapa en animation för den lilla arrowen somm gör att den rotera 180 grader efter du scrollat x grader ner, och sedan när du scrollar upp igen förbi den punkten
på y-axeln så roterar den runt 180 grader tillbaka. */