// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtnCcgR3g7TrFSbOoxr9l2g-_c38i-gus",
  authDomain: "fir-module-51-f4df3.firebaseapp.com",
  projectId: "fir-module-51-f4df3",
  storageBucket: "fir-module-51-f4df3.appspot.com",
  messagingSenderId: "492112352820",
  appId: "1:492112352820:web:b4dce1296457993a391c61"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;