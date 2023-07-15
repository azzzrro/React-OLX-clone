import firebase from 'firebase/compat/app'
import 'firebase/compat/firestore'
import 'firebase/compat/auth'
import 'firebase/compat/storage'

const firebaseConfig = {
    apiKey: "AIzaSyAzQyqH4oi33numXjJBTJuCLYeF90gw-iI",
    authDomain: "olx-clone-78ff0.firebaseapp.com",
    projectId: "olx-clone-78ff0",
    storageBucket: "olx-clone-78ff0.appspot.com",
    messagingSenderId: "444580784497",
    appId: "1:444580784497:web:b3d56d2de5cd02482f2ed0"
  };

export default firebase.initializeApp(firebaseConfig)