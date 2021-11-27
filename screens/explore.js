import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { getAuth, signOut } from "../config/firebase";

const Explore = () => {
  return (
    <View style={Styles.container}>
      <Text>Explore</Text>
      <TouchableOpacity onPress={() => signOut(getAuth())}>
        <Text>Logout</Text>
      </TouchableOpacity>
    </View>
  );
};

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Explore;
