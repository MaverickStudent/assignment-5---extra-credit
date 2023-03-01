import firebase from "firebase/app"
import "firebase/firestore"
// ADD YOUR FIREBASE CONFIG OBJECT HERE:
var firebaseConfig = {
  apiKey: "AIzaSyDIZdHabDiROucAMqG_tZtFgy0p6z1Djhw",
  authDomain: "movie-app-fac36.firebaseapp.com",
  // databaseURL: "",
  projectId: "movie-app-fac36",
  storageBucket: "movie-app-fac36.appspot.com",
  messagingSenderId: "644342339794",
  appId: "1:644342339794:web:9bb4de86d87c7b268c350b"
}

let firebaseApp = firebase.initializeApp(firebaseConfig)
let db = firebaseApp.firestore()
db.enablePersistence()
  .catch(err => {
    if (err.code == 'failed-precondition') {
      console.log('persistance failed')
    } else if (err.code == 'unimplemented') {
      console.log('persistance unvailable')
    }
  })
export {db}
