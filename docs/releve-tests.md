# Relevé des tests

> Écrivez le résultat attendu avant d'essayer. Un écart n'est pas une faute : notez-le, corrigez, refaites le test.

**Calculs à la main** : refaites à la main les résultats de référence de `SUJET.md`, puis comparez avec votre programme. 

- Températures : 27 + 28 + 26 + 29 + 27 + 30 + 28 + 26 + 29 + 30 = 280 °C-relevés. Moyenne : 280 / 10 = **28 °C**.
- Température minimale de la série : **26 °C** (M03 et M08).
- Température maximale de la série : **30 °C** (M06 et M10).
- Cumul de pluie : 0 + 5 + 12 + 0 + 3 + 0 + 8 + 15 + 0 + 2 = **45 mm**.
- Jours avec au moins 10 mm : **2** (M03 : 12 mm ; M08 : 15 mm).

**Essais dans le menu** : un ajout valide (encore là après redémarrage), chaque règle refusée, une recherche introuvable, chaque tri, la synthèse, un choix inconnu.

| Action | Attendu | Obtenu | Testeur |
| --- | --- | --- | --- |
| Id(ex:M01):, Date(AAAA-MM-JJ):, Temperature(°C):, Pluie(mm):, Humidite de l'Air(%):, | relevé refusé :| invalide, Identifiant invalide ou déjà utilisé  Date invalide Température invalide   Quantité de pluie invalide, Humidité invalide| ANOH Levi emmanuel appia|
| Id(ex:M01): m11,  Date(AAAA-MM-JJ): ,  Temperature(°C): -2,  Pluie(mm):, Humidite de l'Air(%): 100     | relevé refusé :| invalide, Date invalide,  Quantité de pluie invalide - relevé pas enregistré| ANOH levi emmanuel appia|
| Votre choix : 1, Id(ex:M01): m11, Date(AAAA-MM-JJ): 2026-10-25, Temperature(°C): 27,5, Pluie(mm): 10 , Humidite de l'Air(%): 79 | relevé accepté | Relevé M11 ajouté. Le journal compte 11 relevé(s)| ANOH Levi emmanuel appia|
| Identifiant : m11 | supprimé| Relevé M11 supprimé. Le journal compte 10 relevé(s).| ANOH Levi emmanuel appia|
| ✏️ | | | |
| ✏️ | | | |

**Sur un autre poste** (`git clone`, `node app.js`, `npm test`, en suivant le README) : ✏️
