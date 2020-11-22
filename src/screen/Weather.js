import React from "react";
import { SafeAreaView, Text, StyleSheet } from "react-native";

const WeatherScreen = ({ navigation }) => {
  return (
    <SafeAreaView forceInset={{ top: "always" }}>
      <Text style={{ fontSize: 50 }}>WeatherScreen</Text>
    </SafeAreaView>
  );
};

export default WeatherScreen;
