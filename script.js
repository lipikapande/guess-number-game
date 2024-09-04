"use strict";

let number = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

document.querySelector(".check").addEventListener("click", function () {
  const guess = Number(document.querySelector(".guess").value);
  console.log(guess);
  if (score > 1) {
    //when guess is invalid
    if (!guess) {
      document.querySelector(".message").textContent = "No number!";
    }
    //when user wins
    else if (guess === number) {
      document.querySelector(".message").textContent = "Correct number!";
      document.querySelector("body").style.backgroundColor = "#60b347";
      document.querySelector(".number").style.width = "30rem";
      document.querySelector(".number").textContent = number;
      if (score > highScore) {
        highScore = score;
        document.querySelector(".highscore").textContent = score;
      }
    }
    //normal working
    else if (guess > number) {
      document.querySelector(".message").textContent = "Too high!";
      score--;
      document.querySelector(".score").textContent = score;
    } else if (guess < number) {
      document.querySelector(".message").textContent = "Too low!";
      score--;
      document.querySelector(".score").textContent = score;
    }
  } else if (score <= 1) {
    document.querySelector(".message").textContent = "Guesses over!";
    score--;
    document.querySelector(".score").textContent = score;
  }
});

document.querySelector(".again").addEventListener("click", function () {
  number = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector(".score").textContent = score;
  document.querySelector(".guess").value = "";
  document.querySelector("body").style.backgroundColor = "#222";
  document.querySelector(".number").style.width = "15rem";
  document.querySelector(".number").textContent = "?";
  document.querySelector(".message").textContent = "Start guessing...";
});
