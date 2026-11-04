// Journal météorologique de la ferme — point d'entrée : le menu.
// À vous d'écrire tout le menu : accueil, chargement des données, menu affiché avant chaque choix,
// actions, sortie et gestion des erreurs. Comportement et textes imposés : fiches/3-ajouter-lister.md.
// Lancer : node app.js
import { demander, fermerSaisie, ouvrirSaisie } from './src/saisie.js';
import { chargerJson, enregistrerJson } from './src/stockage.js';
import { ajouterReleve, formaterReleve, listerReleves, trouverParId } from './src/registre.js';
import { SEUIL_JOUR_PLUVIEUX, joursPluvieux, trierParPluie, trierParTemperature, trouverParDate } from './src/recherche.js';
import { cumulPluie, moyenneTemperature, temperatureMinMax } from './src/synthese.js';

const FICHIER_DONNEES = 'donnees/releves.json';

async function main() {
  ouvrirSaisie();

  // Afficher le menu
  // puis la question Votre choix :

console.log('==================================================');
console.log('        JOURNAL MÉTÉOROLOGIQUE DE LA FERME        ');
console.log('    Suivi agroclimatique de la ferme pédagogique  ');
console.log('==================================================');

  // lire les données
let releves = []
try {
releves = await chargerJson(FICHIER_DONNEES); // importe les données du fichier donnes.json
}
catch(erreur){
releves = []
const message = erreur.message;
console.log(`Impossible de lire donnees/releves.json : ${message} Le journal démarre vide.`)
}
  // Demander un nouveau choix
 

let choix = '';
while (choix !== '0' && choix !== null) {
console.log('--------------------- MENU ---------------------');
console.log('1. Ajouter un relevé');
console.log('2. Lister les relevés');
console.log('3. Rechercher (identifiant, date, journées pluvieuses)');
console.log('4. Trier (température, pluie)');
console.log('5. Synthèse de la série');
console.log('0. Quitter');
choix = await demander('Votre choix : ');

try {
switch(choix){
  case '0':
    break;
  case null:
    break;
  case '1':
    console.log('Ajouter un relevé')
    break;
  case '2':
    console.log('Lister les relevés')
    break;
  default :
    console.log('Choix invalide. Veuillez choisir entre 0 et 5.')
    break;
}
}
catch(erreur){
  if(erreur.message.startsWith('TODO')){
    console.log(`À compléter : ${erreur.message}`)
}
  else{
    console.log(`Erreur inattendue : ${erreur.message}`)
}
}
}
console.log("Au revoir !")

  fermerSaisie();
}

main();
