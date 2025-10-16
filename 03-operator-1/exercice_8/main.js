// Exercice 8
// 1️⃣ Déclarer le salaire mensuel
let salaireMensuel = 500;

// 2️⃣ Calculer le loyer (30% du salaire)
let loyer = salaireMensuel * 0.3;

// 3️⃣ Calculer la nourriture (20% du salaire)
let nourriture = salaireMensuel * 0.2;

// 4️⃣ Calculer le transport (10% du salaire)
let transport = salaireMensuel * 0.1;

// 5️⃣ Déclarer autresDepenses et ajouter 25 à sa valeur initiale de 50
let autresDepenses = 50;
autresDepenses += 25; 

// 6️⃣ Calculer le total des dépenses
let totalDepenses = loyer + nourriture + transport + autresDepenses;

// 7️⃣ Calculer le reste
let reste = salaireMensuel - totalDepenses;

// 🔹 Afficher les résultats (optionnel pour vérification)
console.log("Salaire mensuel:", salaireMensuel);
console.log("Loyer:", loyer);
console.log("Nourriture:", nourriture);
console.log("Transport:", transport);
console.log("Autres dépenses:", autresDepenses);
console.log("Total des dépenses:", totalDepenses);
console.log("Reste:", reste);
