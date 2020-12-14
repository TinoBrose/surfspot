import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default function MyMap({ lng, lat }) {
  const position = [lng, lat];
  const Peahi = [-156,297538, 20,941877];

  return (
    <MapContainer center={position} zoom={2.5} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup. <br /> Easily customizable.
        </Popup>
      </Marker>
    </MapContainer>
  );
}
