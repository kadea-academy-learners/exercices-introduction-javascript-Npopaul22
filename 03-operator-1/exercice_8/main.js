// Exercice 8
// 1. Salaire mensuel
let salaireMensuel = 500;

// 2. Loyer = 30% du salaire
let loyer = salaireMensuel * 0.30;

// 3. Nourriture = 20% du salaire
let nourriture = salaireMensuel * 0.20;

// 4. Transport = 10% du salaire
let transport = salaireMensuel * 0.10;

// 5. Autres dépenses = 50 + 25
let autresDepenses = 50 + 25;

// Calcul des dépenses totales
let depensesTotales = loyer + nourriture + transport + autresDepenses;
// Calcul du reste après dépenses
let reste = salaireMensuel - depensesTotales;

// Affichage des résultats
console.log("Salaire mensuel :", salaireMensuel);
console.log("Loyer :", loyer);
console.log("Nourriture :", nourriture);
console.log("Transport :", transport);
console.log("Autres dépenses :", autresDepenses);
console.log("Dépenses totales :", depensesTotales);
console.log("Reste après dépenses :", reste);
