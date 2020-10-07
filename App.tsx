import React from "react";
import { ThemeProvider } from "@shopify/restyle";
import { SafeAreaProvider } from "react-native-safe-area-context";

import {
  assets as authenticationAssets,
  AuthenticationNavigator,
} from "./src/Authentication";
import { theme } from "./src/components/Theme";
import { NavigationContainer } from "@react-navigation/native";
// import * as Font from "expo-font";
// import { AppLoading } from "expo";

const assets = [...authenticationAssets];

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
  return (
    <ThemeProvider {...{ theme, assets }}>
      <SafeAreaProvider>
        <NavigationContainer>
          <AuthenticationNavigator />
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}
