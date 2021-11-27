import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";

const Button = ({ text, styles, textStyle, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[Styles.Container, styles]}>
      <View>
        <Text style={[Styles.Text, textStyle]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

const Styles = StyleSheet.create({
  Container: {
    width: "90%",
    height: 50,
    backgroundColor: "black",
    alignItems: "center",
    borderRadius: 5,
    justifyContent: "center",
  },
  Text: {
    color: "white",
    fontWeight: "bold",
    fontSize: 15,
  },
});

export default Button;
