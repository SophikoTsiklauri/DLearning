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
  var currentImg = document.getElementsByClassName("currentImg");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
      currentImg[i].style.display = "none";
  }
  slides[slideIndex-1].style.display = "block";
  currentImg[slideIndex-1].style.display = "block";
}

var lect_butt=document.getElementsByClassName("lect_butt");
var slider_1=document.querySelector(".slider_1");
var ss=document.getElementById("ss");

// var slider_2=document.getElementsByClassName("slider_2");
// var slider_3=document.getElementsByClassName("slider_3");
// var slider_4=document.getElementsByClassName("slider_4");
// var slider_5=document.getElementsByClassName("slider_5");
ss.addEventListener("click", function(){
  slider_1.style.display="block";
 });
// lect_butt[1].addEventListener("click", function(){
//   slider_2.style.display="block";
// });
// lect_butt[2].addEventListener("click", function(){
//   slider_3.style.display="block";
// });
// lect_butt[3].addEventListener("click", function(){
//   slider_4.style.display="block";
// });
// lect_butt[4].addEventListener("click", function(){
//   slider_5.style.display="block";
// });















