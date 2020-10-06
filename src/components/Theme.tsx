import { createBox, createText } from "@shopify/restyle";

const theme = {
  colors: {
    primary: "#2CB9B0",
    title: "#0C0D34",
    text: "rgba(12,13,52,0.7)",
    button: "#0C0D34",
    white: "#fff",
    grey: "rgba(12,13,52,0.05)",
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
      color: "title",
    },
    title2: {
      fontSize: 24,
      lineHeight: 30,
      // fontFamily: "SFProText-Semibold",
      color: "title",
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
    },
  },
  breakpoints: {},
};

export type Theme = typeof theme;
export const Box = createBox<Theme>();
export const Text = createText<Theme>();
export default theme;
