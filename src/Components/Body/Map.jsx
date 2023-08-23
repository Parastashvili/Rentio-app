import { React, useMemo } from "react";
import { GoogleMap, MarkerF, useJsApiLoader } from "@react-google-maps/api";
import { Spin } from "antd";
import { styled } from "styled-components";
const Map = () => {
  const containerStyle = {
    width: "90%",
    height: "500px",
    margin: "20px auto",
    maxWidth: "1200px",
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: import.meta.env.VITE_REACT_APP_GOOGLE_MAPS_API_KEY,
  });

  const center = useMemo(() => ({ lat: 41.67994, lng: 44.98073 }), []);

  const onLoad = (marker) => {
    console.log("marker: ", marker);
  };

  const options = {
    streetViewControl: false,
  };

  if (!isLoaded)
    return (
      <Loader>
        <Spin size="large" />
      </Loader>
    );

  return (
    <GoogleMap
      mapContainerStyle={containerStyle}
      zoom={17}
      options={options}
      center={center}
      mapContainerClassName="map-container"
    >
      <MarkerF onLoad={onLoad} position={center} />
    </GoogleMap>
  );
};

export default Map;

const Loader = styled.div`
  .ant-spin-dot-item {
    background-color: #febd18;
  }
  display: flex;
  align-items: center;
  justify-content: center;
  height: 50vh;
  scale: 1.5;
`;
