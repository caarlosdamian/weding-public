import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import { getDatabase } from 'firebase/database';


const firebaseConfig = {
  apiKey: import.meta.env.VITE_REACT_APP_API_KEY_TWO,
  authDomain: import.meta.env.VITE_REACT_APP_API_KEY_AUTH,
  projectId:import.meta.env.VITE_REACT_APP_API_KEY_PRO_ID,
  storageBucket: import.meta.env.VITE_REACT_APP_API_KEY_BUCKET,
  messagingSenderId: import.meta.env.VITE_REACT_APP_API_KEY_MESS,
  appId: import.meta.env.VITE_REACT_APP_API_KEY,
};

console.log({firebaseConfig})

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
// const db = firebase.firestore();
// export default db;
export const db = getDatabase(firebaseApp);