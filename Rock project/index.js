var randomNumber1 = Math.floor(Math.random()*3)+1;

randomImage1 = "img"+randomNumber1+".png";

document.querySelector(".img1").setAttribute("src", randomImage1)

var randomNumber2 = Math.floor(Math.random()*3)+1;

randomImage2 = "img"+randomNumber2+".png";

document.querySelector(".img2").setAttribute("src", randomImage2)

if (randomNumber1>randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 Wins"
}
else if (randomNumber1<randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 Wins"
}
else {
    document.querySelector("h1").innerHTML = "Draw"
}