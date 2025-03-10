let countLeft = 0;

let countRight = 0;

let scoreNumberLeftElement = document.getElementById("score-number-left");

let scoreNumberRightElement = document.getElementById("score-number-right");

function incrementButton1() {
  console.log("Botón 1 clickeado");
  countLeft += 1;
  scoreNumberLeftElement.textContent = countLeft;
}

function incrementButton2() {
  console.log("Botón 2 clickeado");
  countLeft += 2;
  scoreNumberLeftElement.textContent = countLeft;
}

function incrementButton3() {
  console.log("Botón 3 clickeado");
  countLeft += 3;
  scoreNumberLeftElement.textContent = countLeft;
}

function incrementButton4() {
    countRight += 1
    scoreNumberRightElement.textContent = countRight;
}

function incrementButton5() {
    countRight += 2
    scoreNumberRightElement.textContent = countRight;
}

function incrementButton6() {
    countRight += 3
    scoreNumberRightElement.textContent = countRight;
}

function resetGame() {
    countLeft = 0;
    countRight = 0;
    scoreNumberLeftElement.textContent = countLeft;
    scoreNumberRightElement.textContent = countRight;  
}