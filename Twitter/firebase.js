import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8t0-jMQMUHE9-3y6hLOvUQcbtLdg9BqQ",
  authDomain: "twitter-clone-sid.firebaseapp.com",
  projectId: "twitter-clone-sid",
  storageBucket: "twitter-clone-sid.appspot.com",
  messagingSenderId: "382191806125",
  appId: "1:382191806125:web:fa022e95349c7907064824"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app