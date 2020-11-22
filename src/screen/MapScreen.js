import React from "react";
import { SafeAreaView } from "react-navigation";
import Map from "../components/Map";
import Icon from "react-native-vector-icons/Ionicons";

const MapScreen = ({ navigation }) => {
  return (
    <SafeAreaView>
      <Map />
    </SafeAreaView>
  );
};

MapScreen.navigationOptions = {
  tabBarIcon: ({ tinColor }) => (
    <Icon name="md-map" color={tinColor} size={30} />
  ),
};

export default MapScreen;
