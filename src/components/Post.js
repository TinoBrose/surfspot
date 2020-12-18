import React from "react";
import { NavLink } from "react-router-dom";
//
import { GiBigWave } from "react-icons/gi";
import { FaTemperatureHigh } from "react-icons/fa";
import { FiWind } from "react-icons/fi";

const Post = ({ article }) => {
  const {
    name,
    slug,
    country,
    image,
    airtemperature,
    wavemaxheight,
    windspeed,
  } = article.fields;

  return (
    <NavLink to={`/${slug}`} className="card">
      <div>
        {image && (
          <img
            className="card-image"
            src={image.fields.file.url}
            alt={name}
            title={name}
          />
        )}
        <div className="card-text">
          <div className="card-text-title">
            <span className="card-title">
              {name} ({country})
            </span>
          </div>
          <div className="quick-info-wrapper">
            <div className="quick-info">
              <GiBigWave className="icon" /> {wavemaxheight} ft
            </div>
            <div className="quick-info">
              <FaTemperatureHigh className="icon" /> {airtemperature} °C
            </div>
            <div className="quick-info">
              <FiWind className="icon" /> {windspeed} mph
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Post;
