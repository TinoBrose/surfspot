import React from "react";
import { NavLink } from "react-router-dom";
//
import { GiBigWave } from "react-icons/gi";
import { FaTemperatureHigh } from "react-icons/fa";
import { FiWind } from "react-icons/fi";

const Post = ({ item }) => {
  const {
    name,
    slug,
    country,
    image,
    airtemperature,
    wavemaxheight,
    windspeed,
  } = item;

  return (
    <NavLink to={`/${slug}`} className="card">
      <div>
        {image && (
          <img
            className="card-image"
            src={image}
            alt={name}
            title={name}
          />
        )}
        <div className="card-text">
          <div className="card-text-title">
            <span className="card-title">
              {name}, {country}
            </span>
          </div>
          <div className="quick-info-wrapper">
            <div className="quick-info">
              <GiBigWave className="icon" /> {wavemaxheight.$numberDecimal} ft
            </div>
            <div className="quick-info">
              <FaTemperatureHigh className="icon" /> {airtemperature.$numberDecimal} °C
            </div>
            <div className="quick-info">
              <FiWind className="icon" /> {windspeed.$numberDecimal} mph
            </div>
          </div>
        </div>
      </div>
    </NavLink>
  );
};

export default Post;
