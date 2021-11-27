import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet, TextInput } from "react-native";

const TextBox = ({ placeholder, styles, secure, value, onChange }) => {
  const [isFocused, setisFocused] = React.useState(false);
  const [secureTextEntry, setSecureTextEntry] = React.useState(false);
  useEffect(() => {
    secure ? setSecureTextEntry(true) : false;
  }, [secure]);
  return (
    <TextInput
      value={value}
      onChangeText={onChange}
      secureTextEntry={secureTextEntry ? true : false}
      onFocus={() => setisFocused(true)}
      onBlur={() => setisFocused(false)}
      style={[
        Styles.Container,
        {
          borderColor: isFocused ? "#8134CF" : "#EFEFEF",
          backgroundColor: isFocused ? "#fff" : "#EFEFEF",
        },
        styles,
      ]}
      placeholder={placeholder}
    />
  );
};

const Styles = StyleSheet.create({
  Container: {
    width: "90%",
    height: 50,
    backgroundColor: "#fff",
    borderWidth: 1,
    padding: 10,
    borderRadius: 5,
  },
});

export default TextBox;
