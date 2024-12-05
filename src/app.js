/* eslint-disable */
import "bootstrap";
import "./style.css";
//Declarar arrays palos y números
function generateCard() {
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let suits = [
    { name: "heart", symbol: "♥" },
    { name: "diamont", symbol: "♦" },
    { name: "club", symbol: "♣" },
    { name: "spade", symbol: "♠" }
  ];

  //Generar valores random
  let suit = suits[Math.floor(Math.random() * suits.length)];
  let number = numbers[Math.floor(Math.random() * numbers.length)];
  // Generar Card; inyectar
  let card = document.getElementById("card");
  document.querySelector(".top").textContent = suit.symbol;
  document.querySelector(".middle").textContent = number;
  document.querySelector(".bottom").textContent = suit.symbol;
  card.className = suit.name;
}

function resizeCard() {
  let card = document.getElementById("card");
  let widthInput = document.getElementById("card-width").value;
  let heightInput = document.getElementById("card-height").value;
  if (widthInput) {
    card.style.width = widthInput;
  }
  if (heightInput) {
    card.style.height = heightInput;
  }
}

window.onload = function() {
  generateCard();
  let total = document.getElementById("generate");
  //Tamaño de la carta
  let resizeButton = document.getElementById("resize");
  resizeButton.addEventListener("click", resizeCard);
  //Contador cada 10 segundos
  setInterval(generateCard, 10000);
  //botón de generar carta
  total.addEventListener("click", generateCard);
};
