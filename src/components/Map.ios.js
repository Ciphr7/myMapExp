import React, { useState, Component } from "react";
import MapView, { Marker } from "react-native-maps";
import { Dimensions, StyleSheet, Image } from "react-native";

//import TripPlanner from "./TripPlanner";
import TripStarter from "./TripStarter";
//import CheckBox from "@react-native-community/checkbox";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const response = [
  {
    id: "1",
    coordinates: {
      latitude: 17.0984,
      longitude: -88.9414,
    },
    title: "Yvett",
    description: "Boss Lady",
    icon: require("../../assets/yvettc.jpeg"),
  },
  {
    id: "2",
    coordinates: {
      latitude: 29.9744,
      longitude: -93.9924,
    },
    title: "Gil",
    description: "Bossman",
    icon: require("../../assets/gil2.jpeg"),
  },
];

const Map = () => {
  const [spot, setSpot] = useState(null);

  return (
    <>
      <MapView
        style={styles.map}
        loadingEnabled={true}
        region={{
          latitude: 12.769,
          longitude: -85.6024,
          latitudeDelta: 70,
          longitudeDelta: 1,
        }}
      >
        {response.map((marker) => (
          <MapView.Marker
            key={marker.id}
            coordinate={marker.coordinates}
            title={marker.title}
            description={marker.description}
          >
            <Image source={marker.icon} style={{ height: 32, width: 32 }} />
          </MapView.Marker>
        ))}
      </MapView>
      <TripStarter></TripStarter>
      {/* <TripPlanner></TripPlanner> */}
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height,
  },
});

export default Map;
