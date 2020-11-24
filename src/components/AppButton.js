import React from "react";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { SafeAreaView } from "react-navigation";
import colors from "../config/colors";

function AppButton({ title, color = "primary", onPress, style }) {
  return (
    <SafeAreaView>
      <TouchableOpacity
        style={[styles.button, { backgroundColor: colors[color], style }]}
        onPress={onPress}
      >
        <Text style={styles.text}>{title}</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: colors.primary,
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    padding: 5,
    width: "90%",
    //marginVertical: 5,
    //,
  },

  text: {
    color: colors.white,
    fontSize: 18,
    textTransform: "uppercase",
    fontWeight: "400",
  },
});

export default AppButton;
