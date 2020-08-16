import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBfvvNlbhUKt0EjjgHsZm528pz9qCpqroc",
    authDomain: "react-ecommerce-754de.firebaseapp.com",
    databaseURL: "https://react-ecommerce-754de.firebaseio.com",
    projectId: "react-ecommerce-754de",
    storageBucket: "react-ecommerce-754de.appspot.com",
    messagingSenderId: "1081665660038",
    appId: "1:1081665660038:web:3ad88ad1dd15000ba69d07",
    measurementId: "G-9LY0KV6H0P"
  };

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    //QueryReference or QuerySnapshot
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    console.log(snapShot);

    if (!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }catch (error){
            console.log(`error creating user`, error.message);
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider );

export default firebase;