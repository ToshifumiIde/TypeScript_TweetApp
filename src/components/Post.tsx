import React, { useState, useEffect } from "react";
import styles from "./Post.module.css";
import { db } from "../firebase";
import firebase from "firebase";
import { useSelector } from "react-redux";
import { selectUser } from "../features/userSlice";
import { Avatar } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import MessageIcon from "@material-ui/icons/Message";
import SendIcon from "@material-ui/icons/Send";
import { TodayTwoTone } from "@material-ui/icons";

//親コンポーネントから引き継ぐ際、TypeScriptの場合はPROPSの型宣言を実施する。
//Feed.tsxからの引継ぎ
interface PROPS {
  postId: string;
  avatar: string;
  image: string;
  text: string;
  timestamp: any;
  username: string;
}

const Post: React.FC<PROPS> = (props) => {
  return (
    <div className={styles.post}>
      <div className={styles.post_avatar}>
        <Avatar src={props.avatar} />
      </div>
      <div className={styles.post_body}>
        <div>
          <div className={styles.post_header}>
            <h3>
              <span className={styles.post_headerUser}>@{props.username}</span>
              <span className={styles.post_headerTime}>
                {new Date(props.timestamp?.toDate()).toLocaleString()}
                {/* JavaZScriptのdate型に変換するために、.toDate()メソッドを使用 */}
              </span>
            </h3>
          </div>
          <div className={styles.post_tweet}>
            <p>{props.text}</p>
          </div>
        </div>
        {props.image && (
          <div className={styles.post_tweetImage}>
            <img src={props.image} alt="つぶやき" />
          </div>
        )}
      </div>
    </div>
  );
};

export default Post;
