// src/components/MapView.jsx
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';  // ← don’t forget this!

const LOCATIONS = [
  { name: "Trader Joe’s",       coords: [37.7749, -122.4212] },
  { name: "Costco Wholesale",   coords: [37.7762, -122.4188] },
  { name: "Sightglass Coffee",  coords: [37.7766, -122.4089] },
  { name: "ANINA",              coords: [37.7761, -122.4136] },
  { name: "Bill Graham Civic",  coords: [37.7787, -122.4162] },
  { name: "NEMA San Francisco", coords: [37.7750, -122.4125] },
];

const MapView = () => (
<MapContainer
  center={[37.776, -122.414]}
  zoom={14}
  style={{ height: '500px', width: '100%' }}
  scrollWheelZoom={false}   // turn off mouse scroll zoom
  dragging={false}          // disable dragging/panning
  doubleClickZoom={false}   // disable double click zoom
  zoomControl={false}       // hide the +/– controls
  touchZoom={false}         // prevent pinch-to-zoom on mobile
  keyboard={false}          // prevent zoom via keyboard
>

    <TileLayer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; OpenStreetMap contributors"
    />

    {LOCATIONS.map((loc, i) => (
      <Marker key={i} position={loc.coords}>
        <Popup>
          <strong>{loc.name}</strong>
        </Popup>
      </Marker>
    ))}
  </MapContainer>
);

export default MapView;