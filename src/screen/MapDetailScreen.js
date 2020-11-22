import React from "react";
import { Text, StyleSheet, Dimensions, Image, ScrollView } from "react-native";

import { SafeAreaView } from "react-navigation";
import Spacer from "../components/Spacer";

const width = Dimensions.get("window").width;
const height = Dimensions.get("window").height / 2;

const MapDetailScreen = ({ navigation }) => {
  const _id = navigation.getParam("_id");
  const _title = navigation.getParam("_title");

  MapDetailScreen.navigationOptions = {
    title: _title,
  };

  return (
    <>
      <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
        <ScrollView scrollEnabled={true}>
          <Image
            style={styles.image}
            source={require("../../assets/us75.jpeg")}
          />
          <Spacer>
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
              Description
            </Text>
          </Spacer>
          <Spacer>
            <Text style={{ fontSize: 16 }}>Region: Belize</Text>
            <Text style={{ fontSize: 16 }}>Capital: Belmopan</Text>
            <Text style={{ fontSize: 16 }}>Area: 8,867, mi2</Text>
            <Text style={{ fontSize: 16 }}>Population: 383,071</Text>
            <Text style={{ fontSize: 16 }}>Border: Guatemala, Mexico</Text>
          </Spacer>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width,
    height: 350,
  },
});

export default MapDetailScreen;
