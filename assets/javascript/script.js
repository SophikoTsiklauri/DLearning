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
var slider_2=document.querySelector(".slider_2");
var slider_3=document.querySelector(".slider_3");
var slider_4=document.querySelector(".slider_4");
var slider_5=document.querySelector(".slider_5");
var slider_6=document.querySelector(".slider_6");
var slider_7=document.querySelector(".slider_7");
var slider_8=document.querySelector(".slider_8");
var slider_9=document.querySelector(".slider_9");
var slider_10=document.querySelector(".slider_10");
var slider_11=document.querySelector(".slider_11");
var slider_12=document.querySelector(".slider_12");
var leqt_1=document.getElementById("leqt_1");
var leqt_2=document.getElementById("leqt_2");
var leqt_3=document.getElementById("leqt_3");
var leqt_4=document.getElementById("leqt_4");
var leqt_5=document.getElementById("leqt_5");
var leqt_6=document.getElementById("leqt_6");
var leqt_7=document.getElementById("leqt_7");
var leqt_8=document.getElementById("leqt_8");
var leqt_9=document.getElementById("leqt_9");
var leqt_10=document.getElementById("leqt_10");
var leqt_11=document.getElementById("leqt_11");
var leqt_12=document.getElementById("leqt_12");
leqt_1.addEventListener("click", function(){
  slider_1.style.display="block";
 });
leqt_2.addEventListener("click", function(){
  slider_2.style.display="block";
});
leqt_3.addEventListener("click", function(){
  slider_3.style.display="block";
});
leqt_4.addEventListener("click", function(){
  slider_4.style.display="block";
});
leqt_5.addEventListener("click", function(){
  slider_5.style.display="block";
});
leqt_6.addEventListener("click", function(){
  slider_6.style.display="block";
});
leqt_7.addEventListener("click", function(){
  slider_7.style.display="block";
});
leqt_8.addEventListener("click", function(){
  slider_8.style.display="block";
});
leqt_9.addEventListener("click", function(){
  slider_9.style.display="block";
});
leqt_10.addEventListener("click", function(){
  slider_10.style.display="block";
});
leqt_11.addEventListener("click", function(){
  slider_11.style.display="block";
});
leqt_12.addEventListener("click", function(){
  slider_12.style.display="block";
});
















