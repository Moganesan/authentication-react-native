import React, { useEffect, useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { MyTabs, AuthStack } from "./navigationStack";
import { getAuth } from "../config/firebase";

export default function Navigators() {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    getAuth().onAuthStateChanged(async (user) => {
      if (user) {
        setAuth(true);
      }
      if (!user) {
        setAuth(false);
      }
    });
  }, []);

  return (
    <NavigationContainer>
      {auth ? <MyTabs /> : <AuthStack />}
    </NavigationContainer>
  );
}
