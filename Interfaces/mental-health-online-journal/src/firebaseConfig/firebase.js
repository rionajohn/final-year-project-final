//Reference: https://github.com/atharvadeosthale/firebase-auth-article/tree/master/src 
//Author: Atharva Deosthale

import { initializeApp } from "firebase/app";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
} from "firebase/auth";
import {
    getFirestore,
    collection,
    addDoc,
} from "firebase/firestore";

import { getDatabase } from "firebase/database";

/**This is unique to the firebase system I have created through the website:
 * dabataseURL is the real-time database I have created.
 * The rest of the contents is to help with authentication and the cloud firestore database.**/
const firebaseConfig = {
    apiKey: "AIzaSyDBTJ0AS_qBgLdHgCw4qEXYHE8bfDVGhxc",
    authDomain: "mental-health-online-journal.firebaseapp.com",
    databaseURL: "https://mental-health-online-journal-default-rtdb.firebaseio.com",
    projectId: "mental-health-online-journal",
    storageBucket: "mental-health-online-journal.appspot.com",
    messagingSenderId: "1097951503499",
    appId: "1:1097951503499:web:b970f32c72f7192c6ea08e",
    measurementId: "G-TPYN9EEZ9W"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export const journalEntryDatabase = getDatabase(app); 
/**the database used stores general real-time information not authentication**/

/**
 * logInWithEmailAndPassword takes email and password gets authenticated and 
 * logs in a valid user that exists in the database
 * 
 * @param {*} email user inputs email address
 * @param {*} password user inputs password
 */
const logInWithEmailAndPassword = async (email, password) => {
    try {
        await signInWithEmailAndPassword(auth, email, password);
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

/**
 * registerWithEmailAndPassword takes first name, last name, email and password and 
 * adds it to the authentication cloudstore database. The authProvider just mentions 
 * if this is done by local host or an external provider.
 * 
 * @param {*} firstName 
 * @param {*} lastName 
 * @param {*} email 
 * @param {*} password 
 */
const registerWithEmailAndPassword = async (firstName, lastName, email, password) => {
    try {
        const res = await createUserWithEmailAndPassword(auth, email, password);
        const user = res.user;
        await addDoc(collection(db, "users"), {
            uid: user.uid,
            firstName,
            lastName,
            authProvider: "local",
            email,
        });
    } catch (err) {
        console.error(err);
        alert(err.message);
    }
};

/**
 * logout method logs out the current user
 */
const logout = () => {
    signOut(auth);
};

export {
    auth,
    db,
    logInWithEmailAndPassword,
    registerWithEmailAndPassword,
    logout,
};
