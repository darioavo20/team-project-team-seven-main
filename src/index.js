import firebaseConfig from './firebaseConfig';
import { initializeApp } from 'firebase/app';
import {
    getFirestore, collection, getDocs,
    addDoc, deleteDoc, doc, updateDoc, onSnapshot
} from 'firebase/firestore';

  
//Start up the firebase app
initializeApp(firebaseConfig);

  //initialize services
  //const db = getFirestore();
