import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// Sign out form logic  
const signOutForm = document.getElementById('signOutLive');
signOutForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    signOut(auth)
    .then(()=>{
        console.log("Signed Out");
        window.location.replace("../dist/index.html");   
    })
    .catch((err)=>{
        console.log(err);
    })
})



// Check if currently sign in or not 
onAuthStateChanged(auth, (user)=>{
    if(user){
        // User is signed in
        const uid = user.uid;
        console.log(user);
        console.log(uid);
    }else{
        // User is signed Out
        console.log(user);
    }
})