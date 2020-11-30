import React, { useState } from "react";
import { TouchableOpacity, StyleSheet, Text } from "react-native";
//import AppText from "./AppText";
import defaultStyles from "../config/styles";
import colors from "../config/colors"

function PickerItem({ label, onPress }) {

  return (
    <TouchableOpacity onPress={onPress}>
      <Text style={styles.text}>{label}</Text>
    </TouchableOpacity>
  );
}
const styles = StyleSheet.create({
  text: {
  padding: 15,
   color: colors.primary,
   fontSize: 20,
  },
});
export default PickerItem;
