import { Switch } from "react-native";
import { Slider } from "react-native-elements";
import { CheckBox } from "react-native-elements";
import React from "react";
import { View, StyleSheet } from "react-native";

const Untitled1 = () => {
  return <View style={_styles.xQDWGfrd}>
      <CheckBox style={_styles.DEwAegKA} title="Checkbox Title"></CheckBox><Slider style={_styles.sIHPLFeN} thumbStyle={{
      height: 20,
      width: 20
    }} thumbTintColor="#0000FF" maximumValue={1} minimumValue={0}></Slider><Switch style={_styles.fwWTTanA} thumbColor="#d74d4d"></Switch></View>;
};

export default Untitled1;

const _styles = StyleSheet.create({
  xQDWGfrd: {
    backgroundColor: "#f0f0f1",
    padding: 10,
    position: "relative",
    height: "100%"
  },
  DEwAegKA: {
    left: 95,
    top: 77,
    position: "absolute",
    width: 183,
    height: 69
  },
  sIHPLFeN: {
    left: 70.71067811865474,
    top: 229.10259710444134,
    position: "absolute",
    width: 150,
    height: 40
  },
  fwWTTanA: {
    left: 154.14927829866733,
    top: 370.5239533417508,
    position: "absolute",
    width: 50,
    height: 25,
    transform: "rotate(90deg)"
  }
});