import React, { useState, Component } from "react";

import {
    Dimensions,
    StyleSheet,
    Image,
    View,
    Text,
    Button,
    Switch
} from "react-native";
import {
    TouchableWithoutFeedback,
    TouchableOpacity,
} from "react-native-gesture-handler";
import CupertinoRadio1 from "../components/CupertinoRadio1";

import AppTextInput from "./AppTextInput";
import defaultStyles from "../config/styles";
import AppButton from "./AppButton";
import colors from "../config/colors";
import AppPicker from "./AppPicker"
//import CheckBox from "@react-native-community/checkbox";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

const rtMethods = [
    {label: "Practical", value: 1},
    {label: "shortest", value: 2},
    {label: "Interstate", value: 3},
  ];
  

const TripPlanner = () => {
    const [rtMethod, setrtMethod] = useState(rtMethods[0]);
    //const [rtMethods, setrtMethod] = useState();

    return (
        <>
            <View style={styles.cardRT}>
                <Image style={styles.image2} source={require("../../assets/tm.png")} />
                <Text style={styles.cupertinoRadio1Lbl}>Use My Location as Origin</Text>
                <CupertinoRadio1 style={styles.cupertinoRadio1}></CupertinoRadio1>
                <Text style={styles.titleTrip}>Plan Trip IOS</Text>
         
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

                <View style={styles.switchRow}>

                    <Switch
                        value={false}
                        trackColor={{ true: "rgba(227,45,45,1)", false: "rgba(0,0,0,7)" }}
                        style={styles.switch1}
                    ></Switch>

                    <Switch
                        value={true}
                        trackColor={{ true: "rgba(227,45,45,1)", false: "rgba(0,0,0,1)" }}
                        style={styles.switch1}
                    ></Switch>
                </View>


                <AppPicker
                    selectedItem={rtMethod}
                    onSelectItem={item=> setrtMethod(item)}
                    items={rtMethods}
                    icon="apps"
                    placeholder="Route Method"
                >

                </AppPicker>

                <TouchableOpacity style={styles.runTripBTN}>
                    <AppButton title="Run Trip" onPress={console.log("button1 tapped")} />
                </TouchableOpacity>

                <Text style={styles.descriptionPoweredByt}>
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


    descriptionPoweredByt: {
        position: "absolute",
        paddingLeft: 100,
        marginTop: 330,
        //paddingTop: 330,
        fontSize: 10,
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

    title: {
        position: "absolute",
        paddingLeft: 150,
        marginTop: 5,
        textAlign: "center",
        fontWeight: "bold",
        fontSize: 20,
    },
    titleTrip: {
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
        //margin: 10,
        //marginLeft: 28,
        // marginRight: 204
    },
});

export default TripPlanner;


