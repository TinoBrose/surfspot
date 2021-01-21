import React from "react";

const Innercard = ({ spot }) => {
  const {
    airtemperature,
    watertemperature,
    waveminheight,
    wavemaxheight,
    swelldirection,
    windspeed,
    winddirection,
  } = spot;


  return (
    <>
      <div className="inner-card">
        <div className="card-item">
          <div className="card-item-title">Surf Height</div>
          <div className="card-item-info">
            {waveminheight.$numberDecimal} / {wavemaxheight.$numberDecimal}ft
          </div>
        </div>
        <div className="card-item">
          <div className="card-item-title">Swell Direction</div>
          <div className="card-item-info">{swelldirection}</div>
        </div>
        <div className="card-item">
          <div className="card-item-title">Wind Speed</div>
          <div className="card-item-info">{windspeed.$numberDecimal} Knots</div>
        </div>
        <div className="card-item">
          <div className="card-item-title">Wind Direction</div>
          <div className="card-item-info">{winddirection}</div>
        </div>
        <div className="card-item">
          <div className="card-item-title">Air Temperature</div>
          <div className="card-item-info">{airtemperature.$numberDecimal} °C</div>
        </div>
        <div className="card-item">
          <div className="card-item-title">Water Temperature</div>
          <div className="card-item-info">{watertemperature.$numberDecimal} °C</div>
        </div>
      </div>
    </>
  );
};

export default Innercard;
