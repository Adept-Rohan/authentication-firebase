
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAJvM3AF4DSSLoiu0G_lP-uJ2nw44iyI-0",
  authDomain: "movie-app-react-8f218.firebaseapp.com",
  projectId: "movie-app-react-8f218",
  storageBucket: "movie-app-react-8f218.appspot.com",
  messagingSenderId: "156304664216",
  appId: "1:156304664216:web:13edb31c77198ddfc1d2ed"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);