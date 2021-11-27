import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { signOut, getAuth } from "../config/firebase";

const About = () => {
  return (
    <View style={Styles.Container}>
      <Text>About</Text>
      <TouchableOpacity onPress={() => signOut(getAuth())}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  Container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default About;
