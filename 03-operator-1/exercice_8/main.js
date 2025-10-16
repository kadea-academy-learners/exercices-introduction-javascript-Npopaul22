// Déclaration des variables
const salaireMensuel = 500;
const loyer = 150;
let nourriture = 100;
let transport = 50;
let autresDepenses = 75;

// Calculs
const totalDepenses = loyer + nourriture + transport + autresDepenses;
const reste = salaireMensuel - totalDepenses;

// Affichage
console.log("Salaire mensuel :", salaireMensuel);
console.log("Loyer :", loyer);
console.log("Nourriture :", nourriture);
console.log("Transport :", transport);
console.log("Autres dépenses :", autresDepenses);
console.log("Dépenses totales :", totalDepenses);
console.log("Reste après dépenses :", reste);

// Export pour les tests
module.exports = {
  salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste
};
