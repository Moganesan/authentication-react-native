import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  StatusBar,
  Platform,
  TouchableOpacity,
} from "react-native";
import TextBox from "../components/TextBox";
import Button from "../components/Button";
import { getAuth, createUserWithEmailAndPassword } from "../config/firebase";

const SignUp = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignUp = () => {
    createUserWithEmailAndPassword(getAuth(), email, password).catch((err) =>
      alert(err)
    );
  };
  return (
    <View style={Styles.container}>
      <Text style={Styles.Title}>Sign Up</Text>
      <TextBox
        value={email}
        onChange={(email) => setEmail(email)}
        styles={{ marginBottom: 30 }}
        placeholder="Email"
      />
      <TextBox
        value={password}
        onChange={(password) => setPassword(password)}
        secure={true}
        placeholder="Password"
      />
      <Button onPress={SignUp} styles={{ marginTop: 50 }} text={"Sign Up"} />
      <Button
        onPress={() => navigation.navigate("SignIn")}
        textStyle={{ color: "black" }}
        styles={{ marginTop: 20, backgroundColor: "white", borderWidth: 1 }}
        text={"Sign In"}
      />
    </View>
  );
};

const Styles = StyleSheet.create({
  Title: {
    fontWeight: "bold",
    fontSize: 30,
    marginTop: 50,
    marginBottom: 50,
  },
  container: {
    flex: 1,
    paddingTop: Platform.OS == "android" ? StatusBar.currentHeight : 0,
    alignItems: "center",
    backgroundColor: "#fff",
  },
  ButtonText: {
    fontWeight: "bold",
    fontSize: 15,
    color: "#8134CF",
  },
});

export default SignUp;
