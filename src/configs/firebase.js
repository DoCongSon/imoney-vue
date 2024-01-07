import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDgO8MYs6aBK1YQCDOxT54TrdUqSJIEPOM',
  authDomain: 'money-vue-cbc6d.firebaseapp.com',
  projectId: 'money-vue-cbc6d',
  storageBucket: 'money-vue-cbc6d.appspot.com',
  messagingSenderId: '109967894710',
  appId: '1:109967894710:web:3c112c9d1b6d1e847a9e17',
  measurementId: 'G-2L29KTX7KD',
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
