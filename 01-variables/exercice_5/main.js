
//Exercice 5 : conversion celsius en fahrenheit

function celsiusToFahrenheit(celsius) {
  return (celsius * 9/5) + 32;
}

// Exemple d'utilisation
let tempCelsius = 25;
console.log(`${tempCelsius}°C équivaut à ${celsiusToFahrenheit(tempCelsius)}°F`);
module.exports = { celsiusToFahrenheit };
