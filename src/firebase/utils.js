import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { encode } from 'entities';

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

    if (!snapShot.exists){
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try{
            await userRef.set({
                displayName: 'Test User',
                email: 'ranasdfasf',
                createdAt,
                ...additionalData
            })
        }catch (error){
            console.log(`error creating user`, error.message);
        }
    }

    return userRef;
};

export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
    const collectionRef = firestore.collection(collectionKey);
    console.log(collectionRef);

    const batch = firestore.batch();
    objectsToAdd.forEach(obj => {
        const newDocRef = collectionRef.doc();
        batch.set(newDocRef, obj);
        // console.log(newDocRef);
    })

    return await batch.commit();
}

firebase.initializeApp(config);

export const convertCollectionsSnapshotToMap = (collections) => {
    const transformedCollection = collections.docs.map(doc => {
        const { title, items } = doc.data();

        return {
            routeName: encodeURI(title.toLowerCase()),
            id: doc.id, 
            title,
            items
        }
    })

    return transformedCollection.reduce((accu, collection) => {
        accu[collection.title.toLowerCase()] = collection;
        return accu;
    }, {});
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider );

export default firebase;