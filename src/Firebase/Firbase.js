import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();


export const mongoDbaddUser = (user) => {
  fetch("http://localhost:5003/addUser",{
    method : "POST",
    headers:{
      "Content-Type" : "application/json"
    },
    body: JSON.stringify(user)
  })
  .then(res => res.json())
  .catch(err => console.log(err))
}