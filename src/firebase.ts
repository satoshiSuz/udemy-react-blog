import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyB-qHoRTZfNx2cHf_0C-exm8Qu1607wykY',
  authDomain: 'blog-2d54d.firebaseapp.com',
  projectId: 'blog-2d54d',
  storageBucket: 'blog-2d54d.appspot.com',
  messagingSenderId: '664296496211',
  appId: '1:664296496211:web:7ae0a971f9508d492c7aa6',
  measurementId: 'G-BTEB92TBBQ',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();
const db = getFirestore(app);

export { auth, provider, db };
