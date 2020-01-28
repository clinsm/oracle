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
