import React from "react";
import { Dimensions, Image } from "react-native";
import { Button } from "../../components";
import theme, { Box, Text } from "../../components/Theme";

const picture = {
  src: require("../../../assets/5.png"),
  width: 3383,
  height: 5074,
};
const { width } = Dimensions.get("window");
export const assets = [picture.src];
const Welcome = () => {
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
            <Button variant="primary" label="Have an account? Login"/>
            <Button label="Join us,it's Free"/>
            <Button variant="transparent" label="Forgot password?"/>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
