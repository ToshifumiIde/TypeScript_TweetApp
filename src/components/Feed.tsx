import React, { useState, useEffect } from "react";
import { db } from "../firebase";
import TweetInput from "./TweetInput";
import styles from "./Feed.module.css";
import Post from "./Post";

const Feed: React.FC = () => {
  const [posts, setPosts] = useState([
    {
      id: "",
      avatar: "",
      image: "",
      text: "",
      timestamp: null,
      username: "",
    },
  ]);
  //postデータをオブジェクトとして取得、初期値は上記の通り
  useEffect(() => {
    const unSub = db
      .collection("posts")
      .orderBy("timestamp", "desc")
      .onSnapshot((snapshot) => {
        setPosts(
          snapshot.docs.map((doc) => ({
            id: doc.id,
            avatar: doc.data().avatar,
            image: doc.data().image,
            text: doc.data().text,
            timestamp: doc.data().timestamp,
            username: doc.data().username,
          }))
        );
      });
    return () => {
      unSub();
    };
  }, []);
  return (
    <div className={styles.feed}>
      Feed!!!
      <TweetInput />
      {/* <button
        onClick={() => {
          auth.signOut();
        }}
      >
        Logout
      </button> */}
      {posts.map((post) => (
        // <h3>{post.text}</h3>
        <Post
          key={post.id}
          postId={post.id}
          avatar={post.avatar}
          image={post.image}
          text={post.text}
          timestamp={post.timestamp}
          username={post.username}
        />
      ))}
      {/* postsをmapで個々のpostに展開し、postオブジェクト各プロパティにアクセス */}
    </div>
  );
};

export default Feed;
