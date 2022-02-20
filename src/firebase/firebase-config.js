import { initializeApp } from 'firebase/app';
import { getStorage, ref, getDownloadURL, uploadBytesResumable } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyD3VCqoUqK1drTIAXJqpP78beMkjbnb1MI",
  authDomain: "stormhacks2022-341900.firebaseapp.com",
  projectId: "stormhacks2022-341900",
  storageBucket: "stormhacks2022-341900.appspot.com",
  messagingSenderId: "902373617398",
  appId: "1:902373617398:web:9ffa2175febee2a97846d7",
  measurementId: "G-RD92PB4C1Y"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const storage = getStorage(app);

export { storage, app };

