import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { useContainerContext } from "./ContainerContext";
import {useLocation} from '../hooks/useLocation'
import Location from "../components/Location"
import TesterComponent from "./TesterComponent"

export const Counter = () => {
  const context = useContainerContext();
  const { count } = context.state;
  const { increase, decrease } = context.actions;
  //const {MyLoc,setLoc} = useState(this.state = TextHolder : '');
  //const MyLoc = useState(setLoc)
  
  return (
    
 <>
   
      <View>
        {/* <Text>
          {Location}
        </Text> */}
       
        <Text>Count: {count}</Text>
        {/* <Text>{MyLoc}</Text> */}
        <Text onPress={() => increase()}>+</Text>
        <Text onPress={() => decrease()}>-</Text>
        <Text onPress={() => setLoc}>Gil</Text>
      </View>
      <View style={{Backgroundcolor: "Tomato"}}>
      <TesterComponent />
      </View>
      </>
    
  
);
  
  
};
