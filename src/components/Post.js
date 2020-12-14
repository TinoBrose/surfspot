

import React from "react";
//import marked from "marked";
import { GiBigWave } from "react-icons/gi";
import { FaTemperatureHigh } from "react-icons/fa";
import { FiWind } from "react-icons/fi";

const Post = ({ article }) => {
  console.log(article);

  const {
    name,
    country,
    //description,
    image,
    airtemperature,
    wavemaxheight,
    windspeed,
  } = article.fields;

  //const postDescription = marked(description);

  return (
    <div className="card">
      {image && (
        <img
          className="card-image"
          src={image.fields.file.url}
          alt={name}
          title={name}
        />
      )}
      <div className="card-text">
        <h2 className="card-title">
          {name} ({country})
        </h2>
        <ul>
          <li><GiBigWave className="icon" /> {wavemaxheight} ft</li>
          <li><FaTemperatureHigh className="icon" /> {airtemperature} °C</li>
          <li><FiWind className="icon" /> {windspeed} mph</li>
        </ul>
      </div>
    </div>
  );
};

export default Post;
