// Exercice 9 : Répartition de l'héritage de Monsieur Jean MUKUNA
// Héritage total
const totalHeritage = 120000000;

const paul = totalHeritage * 0.25;
const marie = totalHeritage * 0.25;
const eric = (totalHeritage * 0.75) / 3 / 2;
const clair = (totalHeritage * 0.75) / 3 / 2;
const madameMukuna = 10000000;
const joseph = 10000000;
const sarah = 10000000;

// Affichage
console.log("Répartition de l'héritage de Monsieur Jean MUKUNA :");
console.log("Paul :", paul, "CDF");
console.log("Marie :", marie, "CDF");
console.log("Éric :", eric, "CDF");
console.log("Claire :", clair, "CDF");
console.log("Madame MUKUNA :", madameMukuna, "CDF");
console.log("Joseph :", joseph, "CDF");
console.log("Sarah :", sarah, "CDF");

// Exportation pour Jest
module.exports = {
  totalHeritage,
  paul,
  marie,
  eric,
  clair,
  madameMukuna,
  joseph,
  sarah
};
