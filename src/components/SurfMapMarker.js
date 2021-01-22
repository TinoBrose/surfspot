import React from "react";
import { NavLink } from "react-router-dom";

import { Marker, Popup } from "react-leaflet";

import { GiBigWave } from "react-icons/gi";
import { FaTemperatureHigh } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { Icon } from "leaflet";

import SurfIcon from '../surf_icon.svg';





const SurfMapMarker = ({ item }) => {
  const {
    name,
    country,
    slug,
    image,
    airtemperature,
    wavemaxheight,
    windspeed,
    lat,
    lng,
  } = item;

  const surfer = new Icon({
    iconUrl: SurfIcon,
    iconSize: [40, 40],
  });

  //const postDescription = marked(description);

  return (
    <>
      <Marker position={[lat.$numberDecimal, lng.$numberDecimal]} icon={surfer} >
        <Popup style={{ width: 200 }}>
          {image && (
            <img
              className="card-image-popup"
              src={image}
              alt={name}
              title={name}
            />
          )}
          <div className="popup">
            <div className="popup-text">
              <NavLink to={`/${slug}`} className="popup-link">
                <div className="popup-title">
                  {name}, {country}
                </div>
              </NavLink>
              <div className="popup-info-wrp">
                <div className="popup-info">
                  <GiBigWave className="icon" /> {wavemaxheight.$numberDecimal} ft
                </div>
                <div className="popup-info">
                  <FaTemperatureHigh className="icon" /> {airtemperature.$numberDecimal} °C
                </div>
                <div className="popup-info">
                  <FiWind className="icon" /> {windspeed.$numberDecimal} mph
                </div>
              </div>
            </div>
          </div>
        </Popup>
      </Marker>
    </>
  );
};

export default SurfMapMarker;
