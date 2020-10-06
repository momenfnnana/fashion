import React, { useState } from "react";
import { createStackNavigator } from "@react-navigation/stack";
import {
  Onboarding,
  Welcome,
  assets as authenticationAssets,
} from "./src/Authentication";
// import Welcome from "./src/Authentication/Welcome/Welcome";
// import assets from "./src/Authentication/assets/assets";
import { theme } from "./src/components";
import { NavigationContainer } from "@react-navigation/native";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import { ThemeProvider } from "@shopify/restyle";
import { Routes } from "./src/components/Navigation";

const assets = [...authenticationAssets];
const AuthenticationStack = createStackNavigator<Routes>();
const AuthenticationNavigator = () => {
  return (
    <AuthenticationStack.Navigator headerMode="none">
      <AuthenticationStack.Screen name="Onboarding" component={Onboarding} />
      <AuthenticationStack.Screen name="Welcome" component={Welcome} />
    </AuthenticationStack.Navigator>
  );
};

export default function App() {
  const [dataLoaded, setDataLoaded] = useState(false);

  const fonts = () => {
    return Font.loadAsync({
      "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
      "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
      "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
    });
  };

  if (!dataLoaded) {
    return (
      <AppLoading
        startAsync={fonts}
        onFinish={() => setDataLoaded(true)}
        onError={(err) => console.log(err)}
      />
    );
  }
  return (
    <ThemeProvider {...{ theme, assets }}>
      <NavigationContainer>
        <AuthenticationNavigator />
      </NavigationContainer>
    </ThemeProvider>
  );
}
