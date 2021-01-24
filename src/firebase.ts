import firebase from "firebase";

const {
  REACT_APP_FIREBASE_API_KEY,
  REACT_APP_FIREBASE_AUTH_DOMAIN,
  REACT_APP_FIREBASE_PROJECT_ID,
  REACT_APP_FIREBASE_STORAGE_BUCKET,
  REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  REACT_APP_FIREBASE_APP_ID,
  REACT_APP_MEASUREMENT_ID,
} = process.env;

const firebaseConfig = {
  apiKey: REACT_APP_FIREBASE_API_KEY,
  authDomain: REACT_APP_FIREBASE_AUTH_DOMAIN,
  projectId: REACT_APP_FIREBASE_PROJECT_ID,
  storageBucket: REACT_APP_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
  appId: REACT_APP_FIREBASE_APP_ID,
  measurementId: REACT_APP_MEASUREMENT_ID,
};

//firebaseの初期化
const firebaseApp = firebase.initializeApp(firebaseConfig);
//firebaseのデータベース
export const db = firebaseApp.firestore();
//firebaseのauthentication(ユーザー認証)
export const auth = firebase.auth();
//firebaseのストレージにアクセス
export const storage = firebase.storage();
//firebaseのgoogleアカウント認証
export const provider = new firebase.auth.GoogleAuthProvider();