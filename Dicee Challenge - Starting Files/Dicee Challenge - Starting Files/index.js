var random= Math.floor(Math.random() * 7);
var imageselector="dice" +random + ".png";
var images="images/" +imageselector;
document.querySelectorAll("img")[0].setAttribute("src","images");

var random1= Math.floor(Math.random() * 7);
var imageselector1="dice" +random1 + ".png";
var images1="images/" +imageselector1;
document.querySelectorAll("img")[1].setAttribute("src","images1");

if(random1>random){
  document.querySelector("h1").innerHTML="Player 2 won."
}
else if(random>random1){
  document.querySelector("h1").innerHTML="Player 1 won."
}
else{
  document.querySelector("h1").innerHTML="Player 1 won."
}
