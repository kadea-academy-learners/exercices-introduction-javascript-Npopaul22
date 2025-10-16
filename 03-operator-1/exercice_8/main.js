// Exercice 8
// Écrivez votre code ici
// Contexte : Gestion d’un budget mensuel simple.
// Objectif : Calculer les dépenses totales et le reste du salaire.

const salaireMensuel = 500000;

// Répartition des dépenses
const loyer = salaireMensuel * 0.3;        // 30%
const nourriture = salaireMensuel * 0.2;   // 20%
const transport = salaireMensuel * 0.1;    // 10%
const autresDepenses = 50000;              // Montant fixe

const totalDepenses = loyer + nourriture + transport + autresDepenses;
const reste = salaireMensuel - totalDepenses;

console.log("Dépenses totales :", totalDepenses);
console.log("Reste après dépenses :", reste);

module.exports = {
  salaireMensuel,
  loyer,
  nourriture,
  transport,
  autresDepenses,
  totalDepenses,
  reste,
};
