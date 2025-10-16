// Exercice 5 : Conversion de la température de Celsius en Fahrenheit

// Déclaration de la température en Celsius
let temperatureCelsius = 25;

// Conversion en Fahrenheit
let temperatureFahrenheit = (temperatureCelsius * 9) / 5 + 32;

// Affichage du résultat
console.log(
  `${temperatureCelsius}°C équivaut à ${temperatureFahrenheit}°F`
);

// Exportation pour les tests Jest
module.exports = { temperatureCelsius, temperatureFahrenheit };
