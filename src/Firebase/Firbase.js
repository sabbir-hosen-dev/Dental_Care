import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.config";
import { GoogleAuthProvider, getAuth } from "firebase/auth";

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const googleProvider = new GoogleAuthProvider();

export const mongoDbaddUser = (user) => {
  fetch("https://dental-care-server-xirg.onrender.com/addUser", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(user),
  })
    .then((res) => res.json())
    .catch((err) => console.log(err));
};
