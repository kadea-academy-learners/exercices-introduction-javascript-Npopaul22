// main.js
let celsius = 25;

// Affichage pour Jest
console.log((celsius * 9/5) + 32);

// Fonction exportée pour test
function celsiusToFahrenheit(c) {
  return (c * 9/5) + 32;
}

module.exports = { celsiusToFahrenheit };
