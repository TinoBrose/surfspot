import React from "react";
import { Marker, Popup } from "react-leaflet";
import { GiBigWave } from "react-icons/gi";
import { FaTemperatureHigh } from "react-icons/fa";
import { FiWind } from "react-icons/fi";
import { Icon } from "leaflet";

const surfer = new Icon({
  iconUrl: "/surf_icon.svg",
  iconSize: [40, 40],
  className: "surficon",
  iconColor: "red",
});

const SurfMapMarker = ({ article }) => {
  const {
    name,
    country,
    //description,
    image,
    airtemperature,
    wavemaxheight,
    windspeed,
    lat,
    lng,
  } = article.fields;

  //const postDescription = marked(description);

  return (
    <>
      <Marker position={[lat, lng]} icon={surfer} className="surficon">
        <Popup style={{ width: 200 }}>
          {image && (
            <img
              className="card-image-popup"
              src={image.fields.file.url}
              alt={name}
              title={name}
            />
          )}
          <div className="popup">
            <div className="popup-text">
              <div className="popup-title">
                {name}, {country}
              </div>
              <div className="popup-info-wrp">
                <div className="popup-info">
                  <GiBigWave className="icon" /> {wavemaxheight} ft
                </div>
                <div className="popup-info">
                  <FaTemperatureHigh className="icon" /> {airtemperature} °C
                </div>
                <div className="popup-info">
                  <FiWind className="icon" /> {windspeed} mph
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
