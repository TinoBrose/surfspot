import React from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-markercluster";
import SurfMapMarker from "./SurfMapMarker";

export default function SurfMap({ spots }) {
  return (
    <MapContainer center={[20, -10]} zoom={2.5} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup showCoverageOnHover={false}>
        {spots.map((item, index) => (
          <SurfMapMarker item={item} key={index} />
        ))}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
