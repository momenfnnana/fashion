import React from "react";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";

import { HomeNavigator, assets as homeAssets } from "./src/Home";
import {
  assets as authenticationAssets,
  AuthenticationNavigator,
} from "./src/Authentication";
import { theme } from "./src/components/Theme";
import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import { createStackNavigator } from "@react-navigation/stack";
import { AppRoutes } from "./src/components/Navigation";
// import * as Font from "expo-font";
// import { AppLoading } from "expo";

const assets = [...authenticationAssets, ...homeAssets];

export default function App() {
  // const [dataLoaded, setDataLoaded] = useState(false);

  // const fonts = () => {
  //   return Font.loadAsync({
  //     "SFProText-Bold": require("./assets/fonts/SF-Pro-Text-Bold.otf"),
  //     "SFProText-Semibold": require("./assets/fonts/SF-Pro-Text-Semibold.otf"),
  //     "SFProText-Regular": require("./assets/fonts/SF-Pro-Text-Regular.otf"),
  //   });
  // };

  // if (!dataLoaded) {
  //   return (
  //     <AppLoading
  //       startAsync={fonts}
  //       onFinish={() => setDataLoaded(true)}
  //       onError={(err) => console.log(err)}
  //     />
  //   );
  // }

  const AppStack = createStackNavigator<AppRoutes>();

  return (
    <ThemeProvider {...{ theme, assets }}>
      <SafeAreaProvider>
        <StatusBar style="light" />
        <NavigationContainer>
          <AppStack.Navigator
            initialRouteName="Authentication"
            headerMode="none"
          >
            <AppStack.Screen
              name="Authentication"
              component={AuthenticationNavigator}
            />
            <AppStack.Screen name="Home" component={HomeNavigator} />
          </AppStack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
