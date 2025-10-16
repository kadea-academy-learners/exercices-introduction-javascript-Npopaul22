// Exercice 9 : Répartition de l'héritage de Monsieur Jean MUKUNA

const totalHeritage = 120000000;

// Répartition selon les règles
const paul = (totalHeritage * 0.75) / 3;          // 30 000 000
const marie = (totalHeritage * 0.75) / 3;         // 30 000 000
const eric = (totalHeritage * 0.75) / 6;          // 15 000 000
const claire = (totalHeritage * 0.75) / 6;        // 15 000 000
const madameMukuna = (totalHeritage * 0.25) / 3;  // 10 000 000
const joseph = (totalHeritage * 0.25) / 3;        // 10 000 000
const sarah = (totalHeritage * 0.25) / 3;         // 10 000 000

console.log("Répartition de l'héritage de Monsieur Jean MUKUNA :");
console.log("Paul :", paul, "CDF");
console.log("Marie :", marie, "CDF");
console.log("Éric :", eric, "CDF");
console.log("Claire :", claire, "CDF");
console.log("Madame MUKUNA :", madameMukuna, "CDF");
console.log("Joseph :", joseph, "CDF");
console.log("Sarah :", sarah, "CDF");

module.exports = { totalHeritage, paul, marie, eric, claire, madameMukuna, joseph, sarah };
