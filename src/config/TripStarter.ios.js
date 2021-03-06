import React, { useState } from "react";
import {
  Dimensions,
  Image,
  Modal,
  Text,
  TouchableHighlight,
  StyleSheet,
  View,
  Switch,
} from "react-native";

import { TouchableOpacity } from "react-native-gesture-handler";
import CupertinoRadio1 from "./CupertinoRadio1";

import AppTextInput from "./AppTextInput";
import AppButton from "./AppButton";
import AppPicker from "./AppPicker";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const rtMethods = [
  { label: "Practical", value: 1 },
  { label: "shortest", value: 2 },
  { label: "Interstate", value: 3 },
];

const TripStarter = () => {
  const [modalVisible, setModalVisible] = useState(false);
  const [rtMethod, setrtMethod] = useState(rtMethods[0]);
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          Alert.alert("Modal has been closed.");
        }}
      >
        <>
          <View style={styles.cardTP}>
            <Image
              style={styles.imageTP}
              source={require("../../assets/tm.png")}
            />
            <Text numberOfLines={2} style={styles.cupertinoRadio1Lbl}>
              Use My Location as Origin
            </Text>
            <CupertinoRadio1 style={styles.cupertinoRadio1}></CupertinoRadio1>
            <Text style={styles.titleTrip}>Plan Trip IOS</Text>

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
                trackColor={{
                  true: "rgba(227,45,45,1)",
                  false: "rgba(0,0,0,7)",
                }}
                style={styles.switch1}
              ></Switch>
              <Text>Avoid Tolls</Text>

              <Switch
                value={true}
                trackColor={{
                  true: "rgba(227,45,45,1)",
                  false: "rgba(0,0,0,1)",
                }}
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
            <Text style={styles.descriptionPoweredByTP}>
              Powered by ProMiles Software Develpment Corp
            </Text>

            <TouchableHighlight style={styles.runTripBTN}>
              <AppButton
                onPress={() => {
                  setModalVisible(!modalVisible);
                }}
                title="Run Trip"
              />
            </TouchableHighlight>
          </View>
        </>
      </Modal>

      <View>
        <View style={styles.card}>
          <Text style={styles.title}>TruckMiles M</Text>

          <View style={styles.logoNbtn}>
            <Image
              style={styles.image}
              source={require("../../assets/tm.png")}
            />

            <TouchableHighlight style={styles.startTripBTN}>
              <AppButton
                onPress={() => setModalVisible(true)}
                title="Start Trip"
                //style={styles.startTripBTN}
                //onPress={console.log("button tapped")}
              />
            </TouchableHighlight>
          </View>
          <Text style={styles.descriptionPoweredBy}>
            Powered by ProMiles Software Develpment Corp
          </Text>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
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
  cardTP: {
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

  descriptionPoweredBy: {
    position: "absolute",
    paddingLeft: 100,
    marginTop: 80,
    fontSize: 10,
  },
  descriptionPoweredByTP: {
    position: "absolute",
    paddingLeft: 70,
    //marginBottom: 10,
    marginTop: 360,
    //paddingTop: 330,
    fontSize: 10,
  },

  image: {
    height: 60,
    width: 60,
    marginHorizontal: 10,
    marginTop: -15,
  },
  imageTP: {
    height: 40,
    width: 40,
    marginLeft: 5,
    marginTop: 15,
  },
  logoNbtn: {
    flexDirection: "row",
    marginTop: 30,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },

  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },

  runTripBTN: {
    marginLeft: 10,
    width: width - 20,
  },
  startTripBTN: {
    width: width - 70,
    // paddingLeft: 100,
    //marginBottom: 5,
    //marginTop: 40,
  },
  switchRow: {
    height: 35,
    flexDirection: "row",
  },
  title: {
    position: "absolute",
    paddingLeft: 150,
    marginTop: 5,
    textAlign: "center",
    fontWeight: "bold",
    fontSize: 20,
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
});

export default TripStarter;
