import React from "react";
import Post from "./Post";

const Posts = ({ spots }) => {
  return (
    <div className="cards">
      {spots.map((item, index) => (
        <Post item={item} key={index} />
      ))}
    </div>
  );
};

export default Posts;
