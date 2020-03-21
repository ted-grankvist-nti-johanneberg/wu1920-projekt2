window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}



var modal = document.getElementById("myModal");
var span = document.getElementsByClassName("close")[0];
function modalactivate() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}



function changetoindex() {
  window.location.href='index.html';
}

function changetowifi() {
  window.location.href='wifi.html';
}

function changetosakringar() {
  window.location.href='sakringar.html';
}

function changetoljudljus() {
  window.location.href='ljudljus.html';
}

function changetolarmlas() {
  window.location.href='larmlas.html';
}




function fadetoindex() {
  var fullpage = $(".fadeclass");
  fullpage.addClass("pagefade");
  setTimeout(changetoindex, 700);
}

function fadetowifi() {
  var fullpage = $(".fadeclass");
  fullpage.addClass("pagefade");
  setTimeout(changetowifi, 700);
}

function fadetoljudljus() {
  var fullpage = $(".fadeclass");
  fullpage.addClass("pagefade");
  setTimeout(changetoljudljus, 700);
}

function fadetolarmlas() {
  var fullpage = $(".fadeclass");
  fullpage.addClass("pagefade");
  setTimeout(changetolarmlas, 700);
}

function fadetosakringar() {
  var fullpage = $(".fadeclass");
  fullpage.addClass("pagefade");
  setTimeout(changetosakringar, 700);
}



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
  swal({
    type: 'error',
    title: "Fel!",
    text: "Knappens funktion finns inte än.",
    button: "OK"
    
})
});