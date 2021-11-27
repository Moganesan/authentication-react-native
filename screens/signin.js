import React, { useState } from "react";
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
import { getAuth, signInWithEmailAndPassword } from "../config/firebase";

const SignIn = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const SignIn = () => {
    signInWithEmailAndPassword(getAuth(), email, password).catch((err) =>
      alert(err)
    );
  };
  return (
    <View style={Styles.container}>
      <Text style={Styles.Title}>Sign In</Text>
      <TextBox
        onChange={(email) => setEmail(email)}
        value={email}
        styles={{ marginBottom: 30 }}
        placeholder="Email"
      />
      <TextBox
        onChange={(password) => setPassword(password)}
        value={password}
        secure={true}
        placeholder="Password"
      />
      <Button onPress={SignIn} styles={{ marginTop: 50 }} text={"Sign In"} />
      <Button
        onPress={() => navigation.navigate("SignUp")}
        textStyle={{ color: "black" }}
        styles={{ marginTop: 20, backgroundColor: "white", borderWidth: 1 }}
        text={"Sign Up"}
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

export default SignIn;
