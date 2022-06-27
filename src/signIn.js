
import firebaseConfig from "./firebaseConfig";
import { initializeApp } from "firebase/app";
import {createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut} from "firebase/auth";

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const employee_roles = [ 
    "{\"role\": \"Host\"}",
    "{\"role\": \"Server\"}",
    "{\"role\": \"Manager\"}",
    "{\"role\": \"Supervisor\"}",
    "{\"role\": \"admin\"}",
    "{\"role\": \"Owner\"}"
]


// Login form logic 
const loginForm = document.getElementById('loginLive');
loginForm.addEventListener('submit', (event)=>{
    event.preventDefault();
    const email = loginForm.loginEmailLive.value;
    const password = loginForm.loginPasswordLive.value;
    
    signInWithEmailAndPassword(auth, email, password)
    .then((userCred)=>{

        const user = userCred.user;
        console.log(user); 
        const userType = user.customAttributes;
        console.log(userType);
    
        
        if(userType){
            window.location.replace("../dist/sidebar.html");
        }
        else{
            window.location.replace("../dist/index.html");
        }
    })
    .catch((error) =>{
        console.log(error);
    })
})


