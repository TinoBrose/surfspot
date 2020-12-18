import React, { useState, useEffect } from "react";
import client from "../client.js";
import { useParams } from "react-router-dom";
//
import InnerCard from "./InnerCard";
//
import "../App.css";

const InnerPage = () => {
  const [spot, setSpot] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    client
      .getEntries({
        content_type: "surftrip",
        "fields.slug": slug,
      })
      .then((res) => setSpot(res.items[0]))
      .catch(() => console.log("Request failed"));
  }, []);

  let imageUrl = spot && spot.fields.image.fields.file.url;
  const style = { backgroundImage: `url(${imageUrl})` };

  return (
    <div className="wrapper">
      {spot && (
        <div className="hero" style={style}>
          <div className="hero-inner">
            <InnerCard spot={spot} />

            <div className="description-ctn">
              <h1 className="head-title">{spot.fields.name}</h1>
              <h1 className="head-title country">{spot.fields.country}</h1>

              <div className="inner-description">
                <p>{spot.fields.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default InnerPage;
