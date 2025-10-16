// Exercice 9
// Écrivez votre code ici
// Exercice 9 : Répartition de l'héritage

console.log("Répartition de l'héritage de Monsieur Jean MUKUNA :");

const totalHeritage = 120000000;

// 75 % pour les enfants (3 personnes : Paul, Marie, Éric)
let paul = (totalHeritage * 0.75) / 3;
let marie = (totalHeritage * 0.75) / 3;
let eric = (totalHeritage * 0.75) / 3 / 2;  // s’il doit avoir la moitié d’un autre

// 25 % pour les autres (3 personnes : Madame MUKUNA, Joseph, Sarah)
let madameMUKUNA = (totalHeritage * 0.25) / 3;
let joseph = (totalHeritage * 0.25) / 3;
let sarah = (totalHeritage * 0.25) / 3;

// Affichage
console.log("Paul : " + paul + " CDF");
console.log("Marie : " + marie + " CDF");
console.log("Éric : " + eric + " CDF");
console.log("Claire : " + eric + " CDF");
console.log("Madame MUKUNA : " + madameMUKUNA + " CDF");
console.log("Joseph : " + joseph + " CDF");
console.log("Sarah : " + sarah + " CDF");
