import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA7IFUofB9mHS_GJI3hFYpzDg1_k4jWAH4",
    authDomain: "coder-showgram.firebaseapp.com",
    projectId: "coder-showgram",
    storageBucket: "coder-showgram.appspot.com",
    messagingSenderId: "432430740812",
    appId: "1:432430740812:web:d1e6de9771cec2fabf4be9"
};

// Initialize Firebase
// initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);

const projectStorage = getStorage(app);

const projectFirestore = getFirestore();

export { projectStorage, projectFirestore };