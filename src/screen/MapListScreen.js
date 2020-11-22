import React from "react";
import { SafeAreaView } from "react-navigation";
import {
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  View,
  Image,
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import { ListItem } from "react-native-elements";

const response = [
  {
    id: "1",
    title: "Cayo Dist",
    image: require("../../assets/gil30.jpeg"),
  },
  {
    id: "2",
    title: "Corozal",
    image: require("../../assets/yvett9.jpeg"),
  },
  {
    id: "3",
    title: "Stan Creek",
    image: require("../../assets/yvettc.jpeg"),
  },
  {
    id: "4",
    title: "Toledo",
    image: require("../../assets/gil2.jpeg"),
  },
  {
    id: "5",
    title: "Orange Walk",
    image: require("../../assets/yvettb.jpeg"),
  },
  {
    id: "6",
    title: "Belize",
    image: require("../../assets/gil3.jpeg"),
  },
];

const MapListScreen = ({ navigation }) => {
  return (
    <>
      <SafeAreaView style={styles.container} forceInset={{ top: "always" }}>
        <FlatList
          data={response}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => {
            return (
              <TouchableOpacity
                onPress={() =>
                  navigation.navigate("MapDetail", {
                    _id: item.id,
                    _title: item.title,
                  })
                }
              >
                <ListItem
                  chevron
                  title={item.title}
                  leftAvatar={
                    <View>
                      <Image style={styles.listImage} source={item.image} />
                    </View>
                  }
                />
              </TouchableOpacity>
            );
          }}
        />
      </SafeAreaView>
    </>
  );
};

MapListScreen.navigationOptions = {
  title: "Districts",
  tabBarIcon: ({ tinColor }) => (
    <Icon name="ios-list" color={tinColor} size={30} />
  ),
};
const styles = StyleSheet.create({
  container: {
    margin: 4,
    padding: 30,
    flex: 1,
  },
  listImage: {
    height: 60,
    width: 60,
  },
});
export default MapListScreen;
