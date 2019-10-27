import firebase from "../../node_modules/@firebase/app";
import "../../node_modules/@firebase/storage";

var Config = {
 apiKey: "AIzaSyDNWlNBaV4UpmXISICGr63wif-0I5UKbt0",
 authDomain: "testing-d88c3.firebaseapp.com",
 databaseURL: "https://testing-d88c3.firebaseio.com",
 projectId: "testing-d88c3",
 storageBucket: "testing-d88c3.appspot.com",
 messagingSenderId: "887026610125",
 appId: "1:887026610125:web:e682cf9428fd9da4b45e84",
 measurementId: "G-BWJHCRLFKT"
};

firebase.initializeApp(Config);

const storage = firebase.storage();
export { storage, firebase as default };