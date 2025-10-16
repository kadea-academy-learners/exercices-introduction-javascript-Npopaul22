// Exercice 8 : Gestion d’un budget mensuel

const salaire = 500000;       // en CDF
const loyer = 200000;
let nourriture = 150000;
let transport = 50000;
let autres = 30000;

const depensesTotales = loyer + nourriture + transport + autres;
const reste = salaire - depensesTotales;

console.log("Dépenses totales :", depensesTotales);
console.log("Reste après dépenses :", reste);

module.exports = { salaire, loyer, nourriture, transport, autres, depensesTotales, reste };
