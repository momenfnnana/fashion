import { ViewStyle, TextStyle, ImageStyle } from "react-native";
import {
  createBox,
  createText,
  useTheme as useReTheme,
} from "@shopify/restyle";

export const theme = {
  colors: {
    primary: "#2CB9B0",
    secondary: "#0C0D34",
    danger: "#FF0058",
    text: "rgba(12,13,52,0.7)",
    white: "#fff",
    grey: "#F4F0EF",
  },
  spacing: {
    s: 8,
    m: 16,
    l: 24,
    xl: 40,
  },
  borderRadii: {
    s: 4,
    m: 10,
    l: 25,
    xl: 75,
  },
  textVariants: {
    hero: {
      fontSize: 80,
      // fontFamily: "SFProText-Semibold",
      color: "white",
      alignSelf: "center",
      lineHeight: 80,
    },
    title1: {
      fontSize: 28,
      // fontFamily: "SFProText-Semibold",
      color: "secondary",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      // fontFamily: "SFProText-Semibold",
      color: "secondary",
    },
    body: {
      fontSize: 16,
      lineHeight: 24,
      // fontFamily: "SFProText-Semibold",
      color: "text",
    },
    button: {
      fontSize: 15,
      // fontFamily: "SFProText-Semibold",
      color: "text",
      textAlign: "center",
    },
  },
  breakpoints: {},
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export const useTheme = () => useReTheme<Theme>();

type NamedStyles<T> = { [P in keyof T]: ViewStyle | TextStyle | ImageStyle };

export const makeStyles = <T extends NamedStyles<T>>(
  styles: (theme: Theme) => T
) => () => {
  const currentTheme = useTheme();
  return styles(currentTheme);
};
// export default theme;
