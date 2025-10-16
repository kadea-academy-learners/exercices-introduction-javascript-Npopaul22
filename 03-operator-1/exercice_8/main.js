// Exercice 8
// Déclaration des variables
const salaireMensuel = 500000; // Exemple
const loyer = salaireMensuel * 0.3;
let nourriture = salaireMensuel * 0.2;
let transport = salaireMensuel * 0.1;
let autresDepenses = 50 + 25; // exemple en unités arbitraires
let totalDepenses = loyer + nourriture + transport + autresDepenses;
let reste = salaireMensuel - totalDepenses;
 
// Affichage
console.log("Dépenses totales :", totalDepenses);
console.log("Reste après dépenses :", reste);

// Exportation pour les tests Jest
module.exports = {
  salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste
};

