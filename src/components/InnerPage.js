import React, { useState, useEffect } from "react";
import client from "../client.js";
import { useParams } from "react-router-dom";
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
          <div className="inner">{spot.fields.country}</div>
        </div>
      )}
    </div>
  );
};

export default InnerPage;
