import mapboxgl from "mapbox-gl";
import React, { useEffect, useContext } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import { UberContext } from "@/context/uberContext";

mapboxgl.accessToken =
  "pk.eyJ1IjoibXJrY3I3MDciLCJhIjoiY2wzN2dmbnI5MDhhdDNkcTM2YzdqdTJ1byJ9.XgdIg4Si5aPMMFXxpxfmLw";

const style = {
  wrapper: `flex-1 h-full w-full`,
};

const Map = () => {
  const { pickupCoordinates, dropoffCoordinates } = useContext(UberContext);
  console.log("loda", pickupCoordinates)
  console.log("lasson", dropoffCoordinates)
  useEffect(() => {
    const map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph",
      center: [77.102493, 28.70406],
      zoom: 3,
    });

    if (pickupCoordinates) {
      addToMap(map, pickupCoordinates);
    }

    if (dropoffCoordinates) {
      addToMap(map, dropoffCoordinates);
    }

    if (pickupCoordinates && dropoffCoordinates) {
      map.fitBounds([dropoffCoordinates, pickupCoordinates]);
    }
  }, [pickupCoordinates, dropoffCoordinates]);

  const addToMap = (map, coordinates) => {
    const marker1 = new mapboxgl.Marker().setLngLat(coordinates).addTo(map);
  };

  return <div className={style.wrapper} id="map" />;
};

export default Map;
