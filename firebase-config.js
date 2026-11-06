/* À remplir une seule fois (voir GUIDE.md, étapes 2 et 3).
   Ces valeurs ne sont pas secrètes : c'est normal qu'elles soient visibles sur GitHub.
   La sécurité vient des règles Firestore (firestore.rules) et de la liste des domaines autorisés. */

export const FIREBASE_CONFIG = {
  apiKey: "AIzaSyDcWLPwCRAUu1XusWsOcj7rNaDjNVDzDSI",
  authDomain: "mon-app-d5e10.firebaseapp.com",
  projectId: "mon-app-d5e10",
  storageBucket: "mon-app-d5e10.firebasestorage.app",
  messagingSenderId: "395052922726",
  appId: "1:395052922726:web:2ef64f1504c39290a3baa7"
};

/* ID client OAuth « Application Web » créé dans Google Cloud (étape 3) */
export const GOOGLE_CLIENT_ID = "146585661949-kpokg3nrt2nj7sl7gipqdi9supif6i72.apps.googleusercontent.com";

/* Le seul compte autorisé à ouvrir l'appli */
export const ALLOWED_EMAIL = "alessia.caruso2511@gmail.com";

/* Adresse du petit script Google qui renouvelle l'accès à l'agenda en arrière-plan
   (voir scripts/jeton-agenda/LISEZMOI.md). Vide = ancienne méthode avec la fenêtre Google. */
export const AGENDA_TOKEN_URL = "";
