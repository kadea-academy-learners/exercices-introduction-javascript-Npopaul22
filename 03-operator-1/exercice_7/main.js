// Exercice 7
// Écrivez votre code ici
// Exercice 7 — relations d'âges
let ageEnfant = 10;
let agePere = ageEnfant * 2;            // père = double de l'enfant
let ageMere = agePere - 5;              // mère = père - 5
let ageGrandPere = ageMere * 2 + ageEnfant / 2; // double de la mère + moitié de l'enfant
let ageOncle = agePere + 10;            // oncle = père + 10

// Affichages attendus par certains tests :
console.log("Âge de l'enfant :", ageEnfant);
console.log("Âge du père :", agePere);
console.log("Âge de la mère :", ageMere);
console.log("Âge du grand-père :", ageGrandPere);
console.log("Âge de l'oncle :", ageOncle);
module.exports = {
  ageEnfant,
  ageGrandPere,
  ageMere,
  ageOncle,
  agePere
  
};
