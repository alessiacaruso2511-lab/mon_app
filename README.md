# Mon carnet

Le tableau de bord de vie d'Alessia : une appli web installable (PWA) au style carnet aquarelle, avec un décor par mois.

- **Données :** Firebase (Auth Google + Firestore, avec cache hors ligne).
- **Agenda :** API Google Agenda, appelée directement depuis le navigateur. Seul l'agenda `alessia.caruso2511@gmail.com` est utilisé.
- **Saisie en langage naturel :** 100 % locale (`localParse` dans `index.html`), sans IA ni clé d'API.
- **Gazette :** GitHub Action chaque matin vers 6h (`scripts/gazette.mjs`), à partir des flux Google Actualités en français.

Mise en ligne pas à pas : voir **[GUIDE.md](GUIDE.md)**.

| Fichier | Rôle |
|---|---|
| `index.html` | L'appli : interface, décors, logique, compréhension des phrases |
| `app-firebase.js` | Connexion Google, base Firestore, Google Agenda |
| `firebase-config.js` | Les identifiants publics du projet, à remplir |
| `sw.js` | Fonctionnement hors connexion (changer `VERSION` à chaque mise à jour) |
| `firestore.rules` | Règles de sécurité à coller dans Firebase |
| `.github/workflows/gazette.yml` + `scripts/gazette.mjs` | La Gazette du matin |
| `img/`, `stk/`, `fonts/`, `icons/` | Illustrations, stickers, polices et icônes |
