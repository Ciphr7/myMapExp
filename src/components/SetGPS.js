import React, { Component } from "react";

import { StyleSheet, View, Button, Platform, Text } from "react-native";

import Location from "./Location";
//import useLocation from "../hooks/useLocation";

export default class setGPS extends Component {
  constructor() {
    super();

    this.state = {
      TextHolder: "gil ",
    };
  }

  ChangeTextFunction = () => {
    this.setState({
      TextHolder: <Location />,
    });
  };

  render() {
    //  const Location = useLocation();
    return <Text>{this.state.TextHolder}</Text>;
  }
}

const styles = StyleSheet.create({});
