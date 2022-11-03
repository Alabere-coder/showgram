import { initializeApp } from 'firebase/app';
import 'firebase/storage'
import 'firebase/firestore'

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
const app = initializeApp(firebaseConfig);

const projectStorage = app.storage();

const projectFirestore = app.firestore();

export { projectStorage, projectFirestore };