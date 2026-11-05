# Journal météorologique de la ferme

> Projet individuel du SAS DFS, brief 4 (sujet : [SUJET.md](SUJET.md)). Remplacez chaque ✏️ par votre texte, puis supprimez cette ligne.

## Contexte

cet outil est utilisé par les exploitants agricoles. il permet de faire le point de l'activité climatique (temperature, pluie,humidité) à des dates précises. 
cependant, il ne permet pas de determiner l'humidité du sol.

## Prérequis et lancement

- Node.js 20 ou plus récent, Git ; aucune bibliothèque à installer.

```bash
git clone https://github.com/VOTRE-COMPTE/brief-4-journal-meteo.git
cd brief-4-journal-meteo
node app.js
npm test
```

Sous PowerShell, si `npm` est bloqué : `npm.cmd test`.

## Fonctionnalités

- [x] Données lues et enregistrées dans `donnees/releves.json`
- [x] Ajouter un relevé, saisies invalides refusées sans arrêter le programme
- [x] Lister les relevés, message si le journal est vide
- [x] Rechercher par identifiant ou par date ; journées pluvieuses (au moins 10 mm)
- [x] Trier par température ou par pluie
- [x] Synthèse : température moyenne, minimale et maximale de la série, cumul de pluie, journées pluvieuses
- [x] Bonus : supprimer et modifier un relevé (choix 6 et 7)
- [x] Bonus : tri par température décroissante, journée la plus chaude

## Données

✏️ *Le fichier, le nombre de relevés, les champs (voir [docs/dictionnaire-donnees.md](docs/dictionnaire-donnees.md)), les unités. Rappelez qu'ils sont fictifs.*

## Limites

- ne permettent pas de determiner l'humidité du sol
- ne permmettent pas de determiner le climat à un moment précis de la journée (heures, minute)
- permettent pas de determiner si la plante est suffisament hydraté

## Documents

[Dictionnaire des données](docs/dictionnaire-donnees.md) · [Tâches](docs/taches.md) · [Relevé des tests](docs/releve-tests.md) · [Journal de recherche](docs/journal-recherche.md) · [Fiche agronomique](docs/fiche-agronomique.md) · [Fiche individuelle](docs/fiche-individuelle.md)

## Auteur

ANHO Levi emmanuel Appia, livingston-hackerman . 

Entraide : 
OUEDRAOGO BOURAHIMA : app.js
FAKAYODE ABDUL : registre.js / synthes.js / bonus.js
Falle sereko jaures : rechercher.js
Thyedie Akpli : docs
Koné Pagadjoufougou Abdoulaye : docs / app.js
