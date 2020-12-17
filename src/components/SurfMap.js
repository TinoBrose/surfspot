import React from "react";
import { MapContainer, TileLayer, } from "react-leaflet";
import MarkerClusterGroup from 'react-leaflet-markercluster';
import SurfMapMarker from './SurfMapMarker';

export default function SurfMap({ posts }) {


    
  return (
    <MapContainer center={[20, -10]} zoom={2.5} scrollWheelZoom={true}>
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <MarkerClusterGroup showCoverageOnHover={false}>
      {posts.map((article, index) => <SurfMapMarker article={article} key={index} />)}
      </MarkerClusterGroup>
    </MapContainer>
  );
}
