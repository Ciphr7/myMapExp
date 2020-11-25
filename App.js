import React from "react";

import { StyleSheet, Text, View, Dimensions } from "react-native";
import { createAppContainer, createSwitchNavigator } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createStackNavigator } from "react-navigation-stack";
import { setNavigator } from "./src/navigationRef";

import MapDetailScreen from "./src/screen/MapDetailScreen";
import Icon from "react-native-vector-icons/Ionicons";
import MapScreen from "./src/screen/MapScreen";
import WeatherScreen from "./src/screen/Weather";
import MapListScreen from "./src/screen/MapListScreen";
import AppButton from "./src/components/AppButton";

const mapListFlow = createStackNavigator({
  MapList: MapListScreen,
  MapDetail: MapDetailScreen,
});

mapListFlow.navigationOptions = {
  tabBarIcon: ({ tintColor }) => (
    <Icon name="ios-list" color={tintColor} size={30} />
  ),
};

const switchNavigator = createSwitchNavigator({
  mainFlow: createBottomTabNavigator(
    {
      Map: MapScreen,
      // Trip: TripPlanner,
      mapListFlow,
    },
    {
      tabBarOptions: {
        showLabel: false,
        activeTintColor: "#3D8836",
      },
    }
  ),
});

const App = createAppContainer(switchNavigator);

export default () => {
  return (
    <App
      ref={(navigator) => {
        setNavigator(navigator);
      }}
    />
  );
};
