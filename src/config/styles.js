import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    //color: colors.white,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    //flex: 1,
    //padding:Platform.OS === "android" ? 20 : 0,
  },
};
