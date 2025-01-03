import React from "react";
import Map, {Marker} from 'react-map-gl';
import "./App.css";

function App() {
  return (
    <div className="map-container">
      <Map
        mapboxAccessToken={process.env.REACT_APP_MAPBOX} 
        initialViewState={{
          longitude: -51.23,
          latitude: -30.04,
          zoom: 14,
        }}
        //style={{ width: "50vw", height: "100vh" }}
        mapStyle="mapbox://styles/mapbox/streets-v9"
      >
        <Marker longitude={-100} latitude={40} anchor="bottom" >
              <img src="./pin.png" />
            </Marker>
      </Map>;
    </div>
  );
}

export default App;
