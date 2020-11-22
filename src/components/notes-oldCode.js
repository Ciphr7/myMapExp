import React, { useState, Component } from "react";
import MapView, { Marker } from "react-native-maps";
import {
  Dimensions,
  StyleSheet,
  Image,
  View,
  Text,
  Button,
} from "react-native";
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native-gesture-handler";

import AppTextInput from "./AppTextInput";
import defaultStyles from "../config/styles";
import AppButton from "./AppButton";
import colors from "../config/colors";
import CheckBox from "@react-native-community/checkbox";

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
  const [visible, setVisible] = useState(false);
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
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
      <View style={styles.cardRT}>
        <Image style={styles.image2} source={require("../../assets/tm.png")} />
        <Text style={styles.title}>Plan Trip</Text>
        <CheckBox
          disabled={false}
          value={toggleCheckBox}
          onValueChange={(newValue) => setToggleCheckBox(newValue)}
        />
        <AppTextInput
          autoCapitalize="none"
          autoCorrect={false}
          icon="map"
          // onChangeText={handleChange("password")}
          placeholder="org ex:19145"
          secureTextEntry
          //textContentType="number"
        ></AppTextInput>
        <AppTextInput
          style={styles.input2}
          autoCapitalize="none"
          autoCorrect={false}
          icon="map"
          // onChangeText={handleChange("password")}
          placeholder="#2 ex: Hou,TX"
          secureTextEntry
          //textContentType="text"
        ></AppTextInput>

        <TouchableOpacity style={styles.runTripBTN}>
          <AppButton title="Run Trip" onPress={console.log("button1 tapped")} />
        </TouchableOpacity>

        <Text style={styles.descriptionPoweredByt}>
          Powered by ProMiles Software Develpment Corp
        </Text>
      </View>

      <View style={styles.card}>
        <Text style={styles.title}>TruckMiles M</Text>
        <TouchableOpacity style={styles.startTripBTN}>
          <AppButton
            title="Start Trip"
            //style={styles.startTripBTN}
            onPress={console.log("button tapped")}
          />
        </TouchableOpacity>
        <Image style={styles.image} source={require("../../assets/tm.png")} />

        <Text style={styles.descriptionPoweredBy}>
          Powered by ProMiles Software Develpment Corp
        </Text>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height,
  },
  cardRT: {
    backgroundColor: "#fff",
    height: 350,
    width: width - 20,
    position: "absolute",
    overflow: "hidden",
    margin: 10,
    bottom: 270,
    shadowRadius: 20,
    borderRadius: 10,
    elevation: 20,
    borderColor: "tomato",
    borderEndColor: "tomato",
    borderBottomWidth: 2,
    padding: 5,
  },
  card: {
    backgroundColor: "#fff",
    height: 100,
    width: width - 20,
    position: "absolute",
    overflow: "hidden",
    margin: 10,
    bottom: 160,
    shadowRadius: 20,
    borderRadius: 10,
    elevation: 20,
    borderColor: "tomato",
    borderEndColor: "tomato",
    borderBottomWidth: 2,
  },

  descriptionPoweredBy: {
    position: "absolute",
    paddingLeft: 100,
    marginTop: 80,
    fontSize: 10,
  },
  descriptionPoweredByt: {
    position: "absolute",
    paddingLeft: 100,
    marginTop: 330,
    //paddingTop: 330,
    fontSize: 10,
  },
  image: {
    height: 60,
    width: 60,
    marginLeft: 5,
    marginTop: -65,
  },
  image2: {
    height: 40,
    width: 40,
    marginLeft: 5,
    marginTop: 15,
  },
  input2: {
    margin: 4,
  },
  startTripBTN: {
    width: width - 50,
    paddingLeft: 100,
    marginBottom: 15,
  },
  title: {
    position: "absolute",
    paddingLeft: 150,
    marginTop: 5,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
});
