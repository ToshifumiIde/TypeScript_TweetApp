import React , { useEffect } from 'react';
import styles from './App.module.css';
import {useSelector , useDispatch } from "react-redux";
import { selectUser , login ,logout } from "./features/userSlice";
import 

function App() {
  console.log(process.env.REACT_APP_FIREBASE_API_KEY);
  return (
    <div className={styles.app}>
      
    </div>
  );
}

export default App;
