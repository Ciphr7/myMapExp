import { Platform } from "react-native";
import colors from "./colors";

export default {
  colors,
  text: {
    //color: colors.danger,
    fontSize: 18,
    fontFamily: Platform.OS === "android" ? "Roboto" : "Avenir",
    // flex: 1,
    // padding: 20,
  },
};
