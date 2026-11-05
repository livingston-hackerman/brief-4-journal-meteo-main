# Tableau des tâches

> Planifiez vous-même, puis tenez le tableau à jour. Une preuve : un commit, un test vert, un document.

| Tâche | Prévu | Fait le | Preuve |
| --- | --- | --- | --- |
| Poste et dépôt prêts ; besoin compris ; documents commencés | 02/11/2026| 02/11/2026| https://github.com/livingston-hackerman/brief-4-journal-meteo-main/commit/162023be0525cd5fb7afb377bffe32ccf28f7197|
| Fiche 2 : lire et écrire le JSON | 02/11/2026| 02/11/2026| https://github.com/livingston-hackerman/brief-4-journal-meteo-main/commit/df207017afcea4f466a9cea92f782b30e1f11591|
| Fiche 3 : ajouter et lister ; choix 1 et 2 ; erreurs | 02/11/2026| 03/11/2026| https://github.com/livingston-hackerman/brief-4-journal-meteo-main/commit/ba76844c3e7636eecf96733c9737056039f51567|
| Fiche 4 : rechercher et trier ; choix 3 et 4 | 03/11/2026| 04/11/2026| https://github.com/livingston-hackerman/brief-4-journal-meteo-main/commit/58e903b64b0899f4759d253cee59d3c3c6724af8|
| Fiche 5 : synthèse ; choix 5 | 04/11/2026| 05/11/2026| https://github.com/livingston-hackerman/brief-4-journal-meteo-main/commit/73aae801f6c22646357a28f6f326d9fcac9e1cd6|
| Tests par un camarade ; mes propres tests | 04/11/2026| 05/11/2026| https://github.com/livingston-hackerman/brief-4-journal-meteo-main/commit/0919a5d98d376922dd4b5656f030e5d833d9b92a|
| Fiche agronomique ; README ; documents | 02/11/2026| 05/11/2026| https://github.com/livingston-hackerman/brief-4-journal-meteo-main/commit/6954eeed0bd75a12cac7efa099675cd598f95a62|
| Dépôt cloné et lancé ailleurs ; démonstration répétée | | | |
| Bonus | 05/11/2026| 05/11/2026| https://github.com/livingston-hackerman/brief-4-journal-meteo-main/commit/cee9fd1ff8289e2a8287b617904db2b9528a37e5|

**Blocages** (le message exact, ce que j'ai essayé, la solution) :
1- Renvoie un tableau de messages d'erreur, un par règle non respectée ; [] signifie « valide ». 
ce que j'ai essayé : 
const erreurs = [];

if (saisie.id === '') {
  erreurs.push('identifiants obligatoires');
}

if (trouverParId(releves, saisie.id) === undefined) {

} else {
  erreurs.push('identifiant existe déjà');
}

return erreurs;

la solution : 
  if (!saisie.id || releves.some(r => r.id === saisie.id)) {
    erreurs.push("Identifiant invalide ou déjà utilisé");
  }
