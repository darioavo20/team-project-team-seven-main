import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


// Sign up form logic 
const signUpForm = document.getElementById('signUpLive');
signUpForm.addEventListener('submit',(event)=>{
    event.preventDefault();
    console.log(signUpForm.newUserEmail.value);
    console.log(signUpForm.newUserPassword.value);

    const email = signUpForm.newUserEmail.value;
    const password = signUpForm.newUserPassword.value;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCred)=>{
        // Account created and Signed in
        const user = userCred.user;
        console.log(user); 
    })
    .catch((error) =>{
        console.log(error);
    })
})