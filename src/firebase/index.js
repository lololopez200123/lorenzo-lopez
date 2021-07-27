import firebase from 'firebase/app'
import 'firebase/firestore'

const firebaseConfig = {
    apiKey: 'AIzaSyCpqwNtyWVFTyXyaJzHWraRUAa_GNyOG5U',
    authDomain: 'coderhouseecommerce.firebaseapp.com',
    projectId: 'coderhouseecommerce',
    storageBucket: 'coderhouseecommerce.appspot.com',
    messagingSenderId: '227695481377',
    appId: '1:227695481377:web:96415e1057095540b28960',
    measurementId: 'G-MJM9BESDG7'
}
// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig)

export function getFirebase () {
    return app
}

export function getFirestore () {
    return firebase.firestore(app)
}
