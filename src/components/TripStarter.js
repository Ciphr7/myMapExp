import React, { useState } from "react";
import { Dimensions, Image,  Modal,Text,TouchableHighlight, StyleSheet, View } from "react-native";

import {
  TouchableOpacity,
  
} from "react-native-gesture-handler";

import AppButton from "./AppButton";
import TripPlanner from "./TripPlanner";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const TripStarter = () => {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <>
      <View style={styles.modalView}>
        <View style={styles.card}>
          <Modal>
          <Text style={styles.title}>TruckMiles M</Text>

          <View style={styles.logoNbtn}>
            <Image
              style={styles.image}
              source={require("../../assets/tm.png")}
            />

            <TouchableOpacity style={styles.startTripBTN}>
              <AppButton
                onPress={() => setModalVisible(true)}
                title="Start Trip"
                //style={styles.startTripBTN}
                onPress={console.log("button tapped")}
              />
            </TouchableOpacity>
          </View>
          <Text style={styles.descriptionPoweredBy}>
            Powered by ProMiles Software Develpment Corp
          </Text>
          </Modal>
          </View>
        <TouchableHighlight
        style={styles.openButton}
        onPress={() => {
          setModalVisible(true);
        }}
        >
        <Text style={styles.textStyle}>Show Modal</Text>
      </TouchableHighlight>
    
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

  descriptionPoweredBy: {
    position: "absolute",
    paddingLeft: 100,
    marginTop: 80,
    fontSize: 10,
  },

  image: {
    height: 60,
    width: 60,
    margin: 5,
    //marginTop: -15,
  },
  logoNbtn: {
    flexDirection: "row",
    //marginTop: 5,
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
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5
  },

  openButton: {
    backgroundColor: "#F194FF",
    borderRadius: 20,
    padding: 10,
    elevation: 2
  },

  startTripBTN: {
    width: width - 70,
    // paddingLeft: 100,
    //marginBottom: 5,
    //marginTop: 40,
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

export default TripStarter;
