import React from "react";
import { auth } from "../firebase";
const Feed = () => {
  return (
    <div>
      Feeeeeeed!!!
      <button
        onClick={() => {
          auth.signOut();
        }}
      >
        Logout
      </button>
    </div>
  );
};

export default Feed;
