import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, sendPasswordResetEmail, GoogleAuthProvider, signInWithPopup, GithubAuthProvider } from "firebase/auth";


const firebaseConfig = {
    apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
    authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
    projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
    storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
    appId: import.meta.env.VITE_FIREBASE_APP_ID,
    measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
const auth = getAuth(app);
const googleAuthProvider = new GoogleAuthProvider()
const githubAuthProvider = new GithubAuthProvider()

const registerWithEmailAndPassword = async (email, password) => {
    try {
        const response = await createUserWithEmailAndPassword(auth, email, password)
        const user = response.user
        return user
    } catch (err) {
        throw (err.message)
    }
}
const loginWithEmailAndPassword = async (email, password) => {
    try {
        const response = await signInWithEmailAndPassword(auth, email, password);
        return response
    } catch (error) {
        throw (error.message)
    }
}

const resetPasswordByEmail = async (email) => {
    try {
        const response = await sendPasswordResetEmail(auth, email);
    } catch (err) {
        throw (err.message)
    }
}

const signInwithGoolge = async () => {
    try {
        const resposne = await signInWithPopup(auth, googleAuthProvider)
        const user = resposne.user
        return user
    } catch (err) {
        throw (err.message)
    }
}
const signInwithGithub = async () => {
    try {
        const resposne = await signInWithPopup(auth, githubAuthProvider)
        const user = resposne.user
        return user
    } catch (err) {
        throw (err.message)
    }
}

export { registerWithEmailAndPassword, loginWithEmailAndPassword, auth, resetPasswordByEmail, signInwithGoolge, signInwithGithub }