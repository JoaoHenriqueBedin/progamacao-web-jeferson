import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJx1AZgiDUe7QvZ82hEfW629EZ3Gzfr34",
  authDomain: "gerenciamento-pessoal-815cc.firebaseapp.com",
  projectId: "gerenciamento-pessoal-815cc",
  storageBucket: "gerenciamento-pessoal-815cc.appspot.com",
  messagingSenderId: "418365898654",
  appId: "1:418365898654:web:043a643c9c4e8ef98a608f",
  measurementId: "G-Z06FJVHCSS"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);