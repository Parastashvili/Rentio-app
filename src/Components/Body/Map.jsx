import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
const containerStyle = {
  width: "1200px",
  height: "500px",
  margin: "20px auto",
};
const center = {
  lat: 41.68072,
  lng: 44.9818,
};
function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY,
  });
  return isLoaded ? (
    <>
      <GoogleMap
        mapContainerStyle={containerStyle}
        center={center}
        zoom={17}
        mapContainerClassName="map-container"
      >
        <Marker
          position={{
            lat: 41.6,
            lng: 44.98,
          }}
        />
      </GoogleMap>
      <GoogleMap mapContainerStyle={containerStyle} zoom={17} center={center}>
        <Marker
          position={{
            lat: center.lat,
            lng: center.lng,
          }}
        />
      </GoogleMap>
    </>
  ) : (
    <>Map Loading ...</>
  );
}

export default React.memo(MyComponent);
