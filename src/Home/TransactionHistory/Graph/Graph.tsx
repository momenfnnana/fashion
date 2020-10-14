import React from "react";
import { Dimensions } from "react-native";
import { Box, useTheme } from "../../../components";
import { Theme } from "../../../components/Theme";

import Underlay from "./Underlay";

const { width: wWidth } = Dimensions.get("window");
const aspectRatio = 195 / 305;
const lerp = (v0: number, v1: number, t: number) => {
  return (1 - t) * v0 + t * v1;
};
export interface DataPoint {
  date: number;
  value: number;
  color: keyof Theme["colors"];
}

interface GraphProps {
  data: DataPoint[];
}

const Graph = ({ data }: GraphProps) => {
  const theme = useTheme();
  const canavasWidth = wWidth - theme.spacing.m * 2;
  const canavasHeight = canavasWidth * aspectRatio;
  const width = canavasWidth - theme.spacing.l;
  const height = canavasHeight - theme.spacing.l;
  const step = width / data.length;
  const values = data.map((p) => p.value);
  const dates = data.map((p) => p.date);
  const minY = Math.min(...values);
  const maxY = Math.max(...values);
  return (
    <Box marginTop="xl" paddingBottom="l" paddingLeft="l">
      <Underlay minY={minY} maxY={maxY} dates={dates} step={step}/>
      <Box {...{ width, height }}>
        {data.map((point, i) => {
          if (point.value === 0) {
            return null;
          }
          console.log({
            height,
            t: point.value / height,
            r: lerp(0, height, maxY / point.value),
          });
          return (
            <Box
              key={point.date}
              position="absolute"
              left={i * step}
              bottom={0}
              width={step}
              height={lerp(0, height, point.value / maxY)}
            >
              <Box
                backgroundColor={point.color}
                position="absolute"
                opacity={0.1}
                top={0}
                bottom={0}
                borderTopRightRadius="m"
                borderTopLeftRadius="m"
                left={theme.spacing.m}
                right={theme.spacing.m}
              />
              <Box
                backgroundColor={point.color}
                position="absolute"
                top={0}
                height={32}
                left={theme.spacing.m}
                right={theme.spacing.m}
                borderRadius="m"
              />
            </Box>
          );
        })}
      </Box>
    </Box>
  );
};

export default Graph;
