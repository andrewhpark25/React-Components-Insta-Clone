//Complete the necessary code in this file
// import useState
import React, { useState } from "react";
import Post from "./Post";
import "./Posts.css";
import dummyData from "../../dummy-data";
// import data 

const PostsPage = props => {
  // set up state for your data



  return (
    <div className="posts-container-wrapper">
      {/* map through data here to return a Post and pass data as props to Post */}
      {props.data.map((p, index) => (
        <Post key={index} post={p} />
      ))}
    </div>
  );
};

export default PostsPage;

