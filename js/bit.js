//for changing the nav bar background after scroll
var navbar = document.getElementById('nav');
var hom = document.getElementsByClassName('hom');
var logo = document.getElementById('logo');
window.onscroll = function() {
// pageYOffset or scrollY
if (window.pageYOffset > 0) {
navbar.style.backgroundColor = "#ffbd17";
navbar.style.boxShadow = "0px 4px 8px -2px rgba(0,0,0,0.75)";
logo.style.color = "black";
for(var i=0; i< hom.length; i++){
hom[i].style.color = "black";
}

} else {
navbar.style.backgroundColor = "rgba(0,0,0,0.0)";
navbar.style.boxShadow = "inset 1px 32px 35px -26px rgba(0,0,0,0.75)";
logo.style.color = "white";
for(var i=0; i< hom.length; i++){
hom[i].style.color = "white";
}
}
}
//for the slide thing on our work
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}
