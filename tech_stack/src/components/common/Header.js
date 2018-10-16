import React from "react";
import { Text, View, SafeAreaView } from "react-native";

const Header = props => {
  const { textStyle, viewStyle } = styles;
  return (
    <SafeAreaView style={{ backgroundColor: "#fff" }}>
      <View style={viewStyle}>
        <Text style={textStyle}>{props.headerText}</Text>
      </View>
    </SafeAreaView>
  );
};

const styles = {
  viewStyle: {
    backgroundColor: "#FEFeFe",
    justifyContent: "center",
    alignItems: "center",
    height: 60,
    elevation: 8,
    paddingTop: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.2,
    position: "relative"
  },
  textStyle: {
    fontSize: 20,
    color: "#000"
  }
};

export { Header };
