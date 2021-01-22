import React from "react";
import Post from "./Post";
import Loader from 'react-loader-spinner'

const Posts = ({ spots, isLoading, error }) => {

  if(isLoading) {
    return <Loader className="loader" type="Bars" color="#00a3a0" height={80} width={80} />
  } else
    return (
      <div className="cards"> 
        {spots.map((item, index) => (
          <Post item={item} key={index} />
          ))} : {error}
      </div>
    )
};

export default Posts;


  // return (
  //   <div className="cards">
  //     {spots.map((item, index) => (
  //       <Post item={item} key={index} />
  //     ))}
  //   </div>
  // );


  // if(isLoading) return <Loader type="Audio" color="#00BFFF" height={80} width={80} />
  
  //   return (
  //     <div className="cards"> 
  //       {spots} ? {spots.map((item, index) => (
  //         <Post item={item} key={index} />
  //         ))} 
  //         : {error}
  //     </div>
  //   )
  