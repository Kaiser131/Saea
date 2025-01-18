import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
    apiKey: import.meta.apiKey,
    authDomain: import.meta.authDomain,
    projectId: import.meta.projectId,
    storageBucket: import.meta.storageBucket,
    messagingSenderId: import.meta.messagingSenderId,
    appId: import.meta.appId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;