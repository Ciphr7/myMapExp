import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Platform,
  Modal,
  Button,
  FlatList,
  Dimensions,
  TouchableHighlight,
  Text,
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import AppButton from "./AppButton";
//import defaultStyles from "../config/styles";

import colors from "../config/colors";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import PickerItem from "./PickerItem";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function AppPicker({
  icon,
  items,
  onSelectItem,
  placeholder,
  selectedItem,
  ...otherProps
}) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <React.Fragment>
      <TouchableHighlight underlayColor={colors.light} onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={colors.medium}
              style={styles.icon}
            />
          )}
          <Text style={styles.text}>
            {selectedItem ? selectedItem.label : placeholder}
          </Text>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={colors.medium}
          />
        </View>
      </TouchableHighlight >
      <Modal transparent={true} visible={modalVisible} animationType="slide">
        <View style={styles.card}>
          <View color={colors.black}>
            <AppButton
              
              title="Close"
              onPress={() => setModalVisible(false)}
            />
          </View>
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                style={styles.card}
                label={item.label}
                onPress={() => {
                  setModalVisible(false);
                  onSelectItem(item);
                }}
              />
            )}
          />
        </View>
      </Modal>
    </React.Fragment>
  );
}
const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.light,
    height: 250,
    width: width - 190,
    position: "absolute",
    overflow: "hidden",
    margin: 10,
    marginLeft: 170,
    //paddingTop: 35,
    shadowRadius: 20,
    borderRadius: 10,
    elevation: 20,
    borderColor: "tomato",
    borderEndColor: "tomato",
    borderBottomWidth: 2,
    padding: 5,
    top: 300,

    //color: colors.white,
    //opacity: 0.5,
  },
  container: {
    // backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 10,
    //alignSelf: "flex-start"
  },
  text: {
    flex: 1,
    color: colors.primary,
  },
});
export default AppPicker;
