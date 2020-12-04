import React from 'react';
import { View } from 'react-native';

import Screen from "./Screen"

import { Counter } from "./Counter";
import { ContainerContextProvider } from "./ContainerContext";

function TsComponent(props) {
    return (
        <Screen>
        <View>
         <ContainerContextProvider>
        <Counter />
      </ContainerContextProvider>
        </View>
        </Screen>
    );
}

export default TsComponent;
