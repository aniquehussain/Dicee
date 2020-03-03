var randomNumber1 = (Math.floor(Math.random() * 6) + 1);
var randomNumber2 = (Math.floor(Math.random() * 6) + 1);

var randomImage1 = "dice" + randomNumber1 + ".png";
var randomImagesrc1 = randomImage1;
var image1 = document.querySelector("img.img1");
image1.setAttribute("src", randomImagesrc1);

var randomImage2 = "dice" + randomNumber2 + ".png";
var randomImagesrc2 = randomImage2;
var image1 = document.querySelector("img.img2");
image1.setAttribute("src", randomImagesrc2);





// Winner
if(randomNumber1 > randomNumber2){
  document.querySelector("h1").textContent = "Player 1 Wins!";
}
else if (randomNumber1 < randomNumber2) {
  document.querySelector("h1").textContent = "Player 2 Wins!";
}
else{
  document.querySelector("h1").textContent = "Draw!";
}
