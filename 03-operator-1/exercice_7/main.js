// Exercice 7
// Écrivez votre code ici
// Exercice 7 : Calcul des âges
let ageEnfant = 10;
let agePere = ageEnfant * 2;
let ageMere = agePere - 5;
let ageGrandPere = ageMere * 2 + ageEnfant / 2;
let ageOncle = agePere + 10;

// Affichage des résultats
console.log("Age de l'enfant :", ageEnfant);
console.log("Age du père :", agePere);
console.log("Age de la mère :", ageMere);
console.log("Age du grand-père :", ageGrandPere);
console.log("Age de l'oncle :", ageOncle);

    module.exports = {
    ageEnfant,
    agePere,
    ageGrandPere,
    ageMere,
    ageOncle,
  }