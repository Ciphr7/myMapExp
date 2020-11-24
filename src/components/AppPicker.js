import React, { useState } from "react";
import {
  TextInput,
  View,
  StyleSheet,
  Platform,
  Modal,
  Button,
  FlatList,
  Dimensions
} from "react-native";
import { MaterialCommunityIcons } from "@expo/vector-icons";

import defaultStyles from "../config/styles";
import AppText from "./AppText";
import { TouchableWithoutFeedback } from "react-native-gesture-handler";

import PickerItem from "./PickerItem";

const height = Dimensions.get("window").height;
const width = Dimensions.get("window").width;

function AppPicker({ icon, items, onSelectItem, placeholder, selectedItem, ...otherProps }) {
  const [modalVisible, setModalVisible] = useState(false);
  return (
    <React.Fragment>
      <TouchableWithoutFeedback onPress={() => setModalVisible(true)}>
        <View style={styles.container}>
          {icon && (
            <MaterialCommunityIcons
              name={icon}
              size={20}
              color={defaultStyles.colors.medium}
              style={styles.icon}
            />
          )}
          <AppText style={styles.text}>{selectedItem ? selectedItem.label : placeholder}</AppText>
          <MaterialCommunityIcons
            name="chevron-down"
            size={20}
            color={defaultStyles.colors.medium}
          />
        </View>
      </TouchableWithoutFeedback>
      <Modal visible={modalVisible} animationType="slide">
        <View  style={styles.card}>
          <Button title="Close" onPress={() => setModalVisible(false)} />
          <FlatList
            data={items}
            keyExtractor={(item) => item.value.toString()}
            renderItem={({ item }) => (
              <PickerItem
                label={item.label}
                onPress={() => {
                 setModalVisible(false);
                  onSelectItem(item);

                } 
                
                }
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
    backgroundColor: "tomato",
    height: 300,
    width: width - 60,
    position: "absolute",
    overflow: "hidden",
    margin: 10,
    //bottom: 270,
    shadowRadius: 20,
    borderRadius: 10,
    elevation: 20,
    borderColor: "tomato",
    borderEndColor: "tomato",
    borderBottomWidth: 2,
    padding: 5,
    top: 300,
    opacity: 0.5,
},
  container: {
    backgroundColor: defaultStyles.colors.light,
    borderRadius: 25,
    flexDirection: "row",
    width: "100%",
    padding: 15,
    marginVertical: 10,
  },
  icon: {
    marginRight: 0,
  },
  text: {
    flex: 1,
    color: "tomato",
  },
});
export default AppPicker;
