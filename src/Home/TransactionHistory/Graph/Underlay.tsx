import React from "react";
import { StyleSheet } from "react-native";
import { Box, Text, useTheme } from "../../../components";

// const formatter = Intl.DateTimeFormat("en", { month: "short" });

interface UnderlayProps {
  dates: number[];
  minY: number;
  maxY: number;
  step: number;
}

const Underlay = ({ dates, minY, maxY, step }: UnderlayProps) => {
  const theme = useTheme();
  return (
    <Box style={StyleSheet.absoluteFill}>
      <Box flex={1} />
      <Box marginLeft="l" height={theme.spacing.l} flexDirection="row">
        {dates.map((date, index) => (
          <Box key={index} width={step}>
            {/* <Text color="grey">{formatter.format(new Date(date))}</Text> */}
          </Box>
        ))}
      </Box>
    </Box>
  );
};

export default Underlay;
