import React from "react";
import { Dimensions, Image } from "react-native";
import { Button } from "../../components";
import { Routes, StackNavigationProps } from "../../components/Navigation";
import { Box, Text, useTheme } from "../../components";

const picture = {
  src: require("../../../assets/5.png"),
  width: 3383,
  height: 5074,
};
const { width } = Dimensions.get("window");
export const assets = [picture.src];
const Welcome = ({ navigation }: StackNavigationProps<Routes, "Welcome">) => {
  const theme = useTheme();
  return (
    <Box flex={1} backgroundColor="white">
      <Box
        flex={1}
        borderBottomRightRadius="xl"
        backgroundColor="grey"
        alignItems="center"
        justifyContent="flex-end"
      >
        <Image
          source={picture.src}
          style={{
            width: width - theme.borderRadii.xl,
            height:
              ((width - theme.borderRadii.xl) * picture.height) / picture.width,
          }}
        />
      </Box>
      <Box flex={1} borderTopLeftRadius="xl">
        <Box
          backgroundColor="grey"
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
        >
          <Box
            backgroundColor="white"
            borderTopLeftRadius="xl"
            justifyContent="space-evenly"
            alignItems="center"
            flex={1}
            padding="xl"
          >
            <Text variant="title2">Let's get started</Text>
            <Text variant="body" textAlign="center">
              Login tp ypur account below or signup for an amazing experience
            </Text>
            <Button
              variant="primary"
              label="Have an account? Login"
              onPress={() => navigation.navigate("Login")}
            />
            <Button
              variant="default"
              label="Join us,it's Free"
              onPress={() => navigation.navigate("SignUp")}
            />
            <Button
              variant="transparent"
              label="Forgot password?"
              onPress={() => true}
            />
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
