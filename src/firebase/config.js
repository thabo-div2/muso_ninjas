import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const firebaseConfig = {
	apiKey: "AIzaSyAW2ohBmzjnjB-rFhQALfcV5PAYGRZe07I",
	authDomain: "muso-ninjas-713a9.firebaseapp.com",
	projectId: "muso-ninjas-713a9",
	storageBucket: "muso-ninjas-713a9.appspot.com",
	messagingSenderId: "906785119342",
	appId: "1:906785119342:web:d661fe7ce8cd5c36cc5a7f",
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();
const projectAuth = firebase.auth();

//  timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export { projectAuth, projectFirestore, timestamp };
