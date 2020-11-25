import React, { useState, Component } from "react";

import {
  Dimensions,
  StyleSheet,
  Image,
  View,
  Text,
  Button,
  Switch,
} from "react-native";
import {
  TouchableWithoutFeedback,
  TouchableOpacity,
} from "react-native-gesture-handler";
import CupertinoRadio1 from "../components/CupertinoRadio1";

import AppTextInput from "../components/AppTextInput";
import defaultStyles from "./styles";
import AppButton from "../components/AppButton";
import colors from "./colors";
import AppPicker from "../components/AppPicker";
//import CheckBox from "@react-native-community/checkbox";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const rtMethods = [
  { label: "Practical", value: 1 },
  { label: "shortest", value: 2 },
  { label: "Interstate", value: 3 },
];

const TripPlanner = () => {
  const [rtMethod, setrtMethod] = useState(rtMethods[0]);
  //const [rtMethods, setrtMethod] = useState();

  return (
    <>
      <View style={styles.card}>
        <Image style={styles.image} source={require("../../assets/tm.png")} />
        <Text numberOfLines={2} style={styles.cupertinoRadio1Lbl}>
          Use My Location as Origin
        </Text>
        <CupertinoRadio1 style={styles.cupertinoRadio1}></CupertinoRadio1>
        <Text style={styles.titleTrip}>Plan Trip Android</Text>

        <AppTextInput
          style={styles.input3}
          autoCapitalize="none"
          autoCorrect={false}
          icon="map"
          // onChangeText={handleChange("password")}
          placeholder="org ex:19145"
          secureTextEntry
          //textContentType="number"
        ></AppTextInput>
        <AppTextInput
          style={styles.input3}
          autoCapitalize="none"
          autoCorrect={false}
          icon="map"
          // onChangeText={handleChange("password")}
          placeholder="#2 ex: Hou,TX"
          secureTextEntry
          //textContentType="text"
        ></AppTextInput>

        <View style={styles.switchRow}>
          <Switch
            value={false}
            trackColor={{ true: "rgba(227,45,45,1)", false: "rgba(0,0,0,7)" }}
            style={styles.switch1}
          ></Switch>
          <Text>Avoid Tolls</Text>

          <Switch
            value={true}
            trackColor={{ true: "rgba(227,45,45,1)", false: "rgba(0,0,0,1)" }}
            style={styles.switch1}
          ></Switch>
          <Text>Close Border</Text>
        </View>

        <AppPicker
          selectedItem={rtMethod}
          onSelectItem={(item) => setrtMethod(item)}
          items={rtMethods}
          icon="apps"
          placeholder="Route Method"
        ></AppPicker>
        <Text style={styles.descriptionPoweredBy}>
          Powered by ProMiles Software Develpment Corp
        </Text>

        <TouchableOpacity style={styles.runTripBTN}>
          <AppButton title="Run Trip"  />
        </TouchableOpacity>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  map: {
    height,
  },
  card: {
    backgroundColor: "#fff",
    height: 450,
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

  cupertinoRadio1: {
    position: "absolute",
    marginLeft: 310,
    height: 31,
    width: 31,
    borderWidth: 1,
    borderColor: "rgba(238,16,16,1)",
    backgroundColor: "rgba(230, 230, 230,1)",
    shadowColor: "rgba(0,0,0,1)",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    top: 5,
  },
  cupertinoRadio1Lbl: {
    position: "absolute",
    marginLeft: 200,
    top: 5,
  },

  descriptionPoweredByTP: {
    position: "absolute",
    paddingLeft: 70,
    //marginBottom: 10,
    marginTop: 360,
    //paddingTop: 330,
    fontSize: 10,
  },

  imageTP: {
    height: 40,
    width: 40,
    marginLeft: 5,
    marginTop: 15,
  },

  titleTP: {
    position: "absolute",
    paddingLeft: 150,
    marginTop: 5,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  titleTripTP: {
    position: "absolute",
    paddingLeft: 65,
    marginTop: 5,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
  },
  switch1: {
    width: 45,
    height: 23,
    margin: 5,
  },
  switch2: {
    width: 45,
    height: 23,
    margin: 5,
  },
  switchRow: {
    height: 35,
    flexDirection: "row",
  },
  runTripBTN: {
    marginLeft: 10,
    width: width - 20,
  },
});

export default TripPlanner;
