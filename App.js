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
import location from "./src/components/Location"
import Input from "./src/components/Input"

const mapListFlow = createStackNavigator({
  //INPUTd: Input,
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
      //Yo: Input,
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
<script src="https://prime.promiles.com/WebAPI/Scripts/PRIME/PRIMEWebAPI.ashx?apikey=Nm1FY1FtQ2ZMeWoySU5oeElyMnY2Zz090">
</script>