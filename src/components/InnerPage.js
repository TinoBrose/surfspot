import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
//
import InnerCard from "./InnerCard";
//
import "../App.css";

const InnerPage = ({spots}) => {
  const { slug } = useParams();

  const [currentSpot, setCurrentSpot] = useState();


  useEffect( () => {
    if (!slug) return
    setCurrentSpot(spots.find(spot => spot.slug === slug))
  }, [spots, slug])

  // // https://www.npmjs.com/package/react-loading-skeleton
  // const loadingPost = {
  //   image: 'http://sample.com'
  // }
  // const {image} = currentSpot || loadingPost 


  return (
    <div className="wrapper">
      {currentSpot && (
        <div className="hero" style={{ backgroundImage: `url(${currentSpot.image})` }}>
          <div className="hero-inner">
            <InnerCard spot={currentSpot} />

            <div className="description-ctn">
              <h1 className="head-title">{currentSpot.name}</h1>
              <h1 className="head-title country">{currentSpot.country}</h1>

              <div className="inner-description">
                <p>{currentSpot.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InnerPage;
