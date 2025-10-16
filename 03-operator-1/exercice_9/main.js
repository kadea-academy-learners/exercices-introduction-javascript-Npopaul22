// Exercice 9
// Valeur totale de l'héritage
let maison = 60000000;
let terrains = 40000000;
let liquidites = 20000000;
let heritageTotal = maison + terrains + liquidites;

// Répartition par catégorie
let partPremiereCategorie = heritageTotal * 0.75;
let partDeuxiemeCategorie = heritageTotal * 0.25;

// === Première catégorie : enfants ===
// Chaque enfant ou groupe d'enfants reçoit 1/3 de 75%
let partEnfant = partPremiereCategorie / 3;
// Paul
let partPaul = partEnfant;

// Marie
let partMarie = partEnfant;

// Alain (représenté par Éric et Claire)
let partAlain = partEnfant;
let partEric = partAlain / 2;
let partClaire = partAlain / 2;
// === Deuxième catégorie : conjoint + frères ===
// Chaque héritier reçoit 1/3 de 25%
let partDeuxieme = partDeuxiemeCategorie / 3;

// Madame MUKUNA
let partMadameMukuna = partDeuxieme;

// Joseph
let partJoseph = partDeuxieme;

// Sarah
let partSarah = partDeuxieme;

// === Affichage des résultats ===
console.log("Répartition de l'héritage de Monsieur Jean MUKUNA :");
console.log("Paul :", partPaul.toLocaleString(), "CDF");
console.log("Marie :", partMarie.toLocaleString(), "CDF");
console.log("Éric :", partEric.toLocaleString(), "CDF");
console.log("Claire :", partClaire.toLocaleString(), "CDF");
console.log("Madame MUKUNA :", partMadameMukuna.toLocaleString(), "CDF");
console.log("Joseph :", partJoseph.toLocaleString(), "CDF");
console.log("Sarah :", partSarah.toLocaleString(), "CDF");