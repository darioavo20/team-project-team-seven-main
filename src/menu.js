import { initializeApp } from 'firebase/app';
import{
    getFirestore, collection, getDocs, addDoc, deleteDoc, updateDoc, doc, onSnapshot, firebase, ref, getDoc
}from 'firebase/firestore';

//initialize our app
const firebaseConfig = {
    apiKey: "AIzaSyB5iR3jCStWO5zPOCWUKyu6fEEd7JD4E_Y",
    authDomain: "team-7-site-59ff2.firebaseapp.com",
    projectId: "team-7-site-59ff2",
    storageBucket: "team-7-site-59ff2.appspot.com",
    messagingSenderId: "1045219635404",
    appId: "1:1045219635404:web:9b25fb5047f6fcf40cd269"
  };

//Start up the firebase app
initializeApp(firebaseConfig);

//initialize services
const db = getFirestore();

// get menuItem Collection
const menuRef = collection(db , 'menuItems');

console.log("Hello");

getMenuData();
displayTable();





function getMenuData(){
    // view database files in the table
    onSnapshot(menuRef, (snapshot) => {
        let menuItemCollection =[];
        snapshot.docs.forEach((doc) => {
        menuItemCollection.push({ ...doc.data(), id: doc.id })
        })
        console.log(menuItemCollection);
    })  , err => {
      console.error(err);
    };
  }
  
  
  
  function displayTable() {
    getDocs(menuRef)                                           
    .then((snapshot) =>{                                      
      let menuItems = [];
      snapshot.docs.forEach((doc)=>{
          menuItems.push({...doc.data(), id: doc.id})
          
            var menuItem = doc.data().itemName;
            var menuEDescription = doc.data().englishDescription;
            var menuSDescription = doc.data().spanishDescription; 
            var menuItemIngredients = doc.data().ingredients; 
            var menuItemPrice = doc.data().price;
            var menuItemType = doc.data().type;   
            
            if(menuItemType == "entree"){
              document.getElementById('entreeBody').innerHTML += `<tr>
              <td>${menuItem}</td>
              <td>${menuEDescription}</td>
              <td>${menuSDescription}</td>
              <td>${menuItemIngredients}</td>
              <td>${menuItemPrice}</td>
              </tr>`;
            }
            if(menuItemType == "main"){
              document.getElementById('tableBody').innerHTML += `<tr>
              <td>${menuItem}</td>
              <td>${menuEDescription}</td>
              <td>${menuSDescription}</td>
              <td>${menuItemIngredients}</td>
              <td>${menuItemPrice}</td>
              </tr>`;
            }
            if(menuItemType == "breakfast"){
              document.getElementById('breakfastBody').innerHTML += `<tr>
              <td>${menuItem}</td>
              <td>${menuEDescription}</td>
              <td>${menuSDescription}</td>
              <td>${menuItemIngredients}</td>
              <td>${menuItemPrice}</td>
              </tr>`;
            }
            if(menuItemType == "drink"){
              document.getElementById('drinkBody').innerHTML += `<tr>
              <td>${menuItem}</td>
              <td>${menuEDescription}</td>
              <td>${menuSDescription}</td>
              <td>${menuItemIngredients}</td>
              <td>${menuItemPrice}</td>
              </tr>`;
            }
            if(menuItemType == "desert"){
              document.getElementById('desertBody').innerHTML += `<tr>
              <td>${menuItem}</td>
              <td>${menuEDescription}</td>
              <td>${menuSDescription}</td>
              <td>${menuItemIngredients}</td>
              <td>${menuItemPrice}</td>
              </tr>`;
            }
      })
    }) , err => {
      console.error(err);
    };
  }
  
