// import firebase from 'firebase/compat/app';
import { initializeApp } from 'firebase/app';
// import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyAuHCMaPvyyZybKe09cy16f3H5ZhZuWu-Q',
  authDomain: 'social-test-cc678.firebaseapp.com',
  projectId: 'social-test-cc678',
  storageBucket: 'social-test-cc678.appspot.com',
  messagingSenderId: '184699412781',
  appId: '1:184699412781:web:9d0d279a7c388db028f3a4',
};

// firebase.initializeApp(firebaseConfig);
const app = initializeApp(firebaseConfig);
// const db = getFirestore(app);

// export default firebase;
export default app;
// export default db;

