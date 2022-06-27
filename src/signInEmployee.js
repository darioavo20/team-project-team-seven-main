
import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);




// Login form logic 
const loginForm = document.getElementById('loginLive');
loginForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const email = loginForm.loginEmailLive.value;
    const password = loginForm.loginPasswordLive.value;
    signInWithEmailAndPassword(auth, email, password)
    .then((userCred)=>{
        // Account created and Signed in
        const user = userCred.user;
        console.log(user); 
        if(user){
            window.location.replace("../dist/sidebar.html");
        }
    })
    .catch((error) =>{
        console.log(error);
    })
})


