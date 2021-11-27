import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Home from "../screens/home";
import Explore from "../screens/explore";
import About from "../screens/about";
import SignIn from "../screens/signin";
import SignUp from "../screens/signup";
import { View } from "react-native";

const Stack = createStackNavigator();
const Tabs = createBottomTabNavigator();

const MyTabs = () => {
  return (
    <Tabs.Navigator screenOptions={{ tabBarIcon: () => <View></View> }}>
      <Tabs.Screen component={Home} name="Home" />
      <Tabs.Screen component={Explore} name="Explore" />
      <Tabs.Screen component={About} name="About" />
    </Tabs.Navigator>
  );
};

const AuthStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="SignIn" component={SignIn} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export { MyTabs, AuthStack };
