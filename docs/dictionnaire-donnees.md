# Dictionnaire des données

> Un champ par ligne, d'après `SUJET.md` et le fichier de `donnees/`. La première ligne sert de modèle.

| Champ | Signification | Type | Règle de validation | Unité | Exemple |
| --- | --- | --- | --- | --- | --- |
| `id` | Identifiant unique | texte | non vide, absent des données | — | M01 |
| date | Date du relevé| nombre| AAA-MM-JJ | — | 2026-10-15|
| temperatureC | Température de l'air au moment du relevé| nombre| négatif ou décimal possible| °C| 27°C|
| pluieMm | Pluie en mm| nombre| positif ou nul| mm| 12mm|
| humiditeAirPct | Humidité relative de l'air|  nombre| nombre entre 0 et 100| %| 82%|

**Listes de valeurs autorisées** : texte, nombre

**Sources** : SUJET.md
