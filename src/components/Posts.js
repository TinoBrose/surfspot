import React from "react";
import Post from "./Post";

const Posts = ({ cards }) => {
  return (
    <div className="cards">
      {cards.map((article, index) => (
        <Post article={article} key={index} />
      ))}
    </div>
  );
};

export default Posts;
