import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "../../components";

import Button from "../../components/Button";

const styles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    padding: 44,
    flex: 1,
  },
  subTitle: {
    textAlign: "center",
    marginBottom: 12,
  },
  description: {
    color: "#0C0D34",
    textAlign: "center",
    marginBottom: 40,
  },
});
interface SubslideProps {
  subTitle: string;
  description: string;
  last?: boolean;
  onPress: () => void;
}
const Subslide = ({ subTitle, description, last, onPress }: SubslideProps) => {
  return (
    <View style={styles.container}>
      <Text variant="title2" style={styles.subTitle}>
        {subTitle}
      </Text>
      <Text variant="body" style={styles.description}>
        {description}
      </Text>
      <Button
        label={last ? "Let's get started" : "Next"}
        variant={last ? "primary" : "default"}
        {...{ onPress }}
      />
    </View>
  );
};
export default Subslide;
