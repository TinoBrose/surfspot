import React from "react";

const Innercard = ({ spot }) => {
  const {
    name,
    slug,
    country,
    image,
    airtemperature,
    watertemperature,
    waveminheight,
    wavemaxheight,
    swelldirection,
    windspeed,
    winddirection,
  } = spot.fields;
  return (
    <>
      <div className="inner-card">
        <div className="card-item">
          <div className="card-item-title">Surf Height</div>
          <div className="card-item-info">
            {waveminheight} / {wavemaxheight}ft
          </div>
        </div>
        <div className="card-item">
          <div className="card-item-title">Swell Direction</div>
          <div className="card-item-info">{swelldirection}</div>
        </div>
        <div className="card-item">
          <div className="card-item-title">Wind Speed</div>
          <div className="card-item-info">{windspeed} Knots</div>
        </div>
        <div className="card-item">
          <div className="card-item-title">Wind Direction</div>
          <div className="card-item-info">{winddirection}</div>
        </div>
      </div>
    </>
  );
};

export default Innercard;
