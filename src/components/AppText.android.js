import React from "react";
import { Text, StyleSheet } from "react-native";
import colors from "../config/colors";
import defaultStyles from "../config/styles";

function AppText({ children }) {
  return <Text style={defaultStyles.text}>{children}</Text>;
}

export default AppText;
