// Exercice 7
// 1. Créer une variable ageEnfant et lui assigner une valeur
let ageEnfant = 10;

// 2. Créer une variable agePère (double de l'âge de l'enfant)
let agePère = ageEnfant * 2;

// 3. Créer une variable ageMère (âge du père moins 5)
let ageMère = agePère - 5;

// 4. Créer une variable ageGrandPère (double de l'âge de la mère + moitié de l'âge de l'enfant)
let ageGrandPère = (ageMère * 2) + (ageEnfant / 2);

// 5. Créer une variable ageOncle (âge du père + 10)
let ageOncle = agePère + 10;
// Affichage des résultats
console.log("Âge de l'enfant :", ageEnfant);
console.log("Âge du père :", agePère);
console.log("Âge de la mère :", ageMère);
console.log("Âge du grand-père :", ageGrandPère);
console.log("Âge de l'oncle :", ageOncle);