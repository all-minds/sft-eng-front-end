import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

/** Put it on env */
const firebaseConfig = {
  apiKey: "AIzaSyDSGAl3eyYa5wC5GYvwbiiYFG5gbIM8Mm0",
  authDomain: "carboncreditsfiap.firebaseapp.com",
  projectId: "carboncreditsfiap",
  storageBucket: "carboncreditsfiap.appspot.com",
  messagingSenderId: "506336034868",
  appId: "1:506336034868:web:e1eb35f0759e56e4a78a61",
  measurementId: "G-QMV4GTQJL0",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth();
