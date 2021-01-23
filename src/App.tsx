import React, { useEffect } from "react";
import styles from "./App.module.css";
import { useSelector, useDispatch } from "react-redux";
import { selectUser, login, logout } from "./features/userSlice";
import { auth } from "./firebase";

const App: React.FC = () => {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unSub = auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        //userが存在する場合、userSliceで作成したloginのreducerをdispatch経由で実行
        dispatch(
          login({
            uid: authUser.uid,
            photoUrl: authUser.photoUrl,
            displayName: authUser.displayName,
          })
        );
      } else {
        dispatch(logout());
      }
    });
    return ()=>{
      unSub();
    }
  }, [dispatch]);
  return <div className={styles.app}></div>;
};

export default App;
