import { Theme } from "~/style/types";

const themeInstance: Theme = {
  colors: {
    primary: {
      darkest: "#00272e",
      darker: "#004e5c",
      dark: "#01768b",
      tinyDark: "#019db9",
      medium: "#01c4e7",
      tinyLight: "#34d0ec",
      light: "#67dcf1",
      lighter: "#99e7f5",
      lightest: "#ccf3fa",
    },
    secondary: {
      darkest: "#301405",
      darker: "#61280a",
      dark: "#913c0f",
      tinyDark: "#c25014",
      medium: "#ffa500",
      tinyLight: "#f58347",
      light: "#f7a275",
      lighter: "#fac1a3",
      lightest: "#fce0d1",
    },
    neutral: {
      darkest: "#1c1c1c",
      darker: "#383838",
      dark: "#545454",
      tinyDark: "#707070",
      medium: "#8c8c8c",
      tinyLight: "#a3a3a3",
      light: "#bababa",
      lighter: "#d1d1d1",
      lightest: "#e8e8e8",
    },
    success: {
      darkest: "#182c18",
      darker: "#305830",
      dark: "#478547",
      tinyDark: "#5fb15f",
      medium: "#77dd77",
      tinyLight: "#92e492",
      light: "#adebad",
      lighter: "#c9f1c9",
      lightest: "#e4f8e4",
    },
    error: {
      darkest: "#2d0000",
      darker: "#5a0000",
      dark: "#860000",
      tinyDark: "#b30000",
      medium: "#e00000",
      tinyLight: "#e63333",
      light: "#ec6666",
      lighter: "#f39999",
      lightest: "#f9cccc",
    },
    warning: {
      darkest: "#332602",
      darker: "#664b04",
      dark: "#997106",
      tinyDark: "#cc9608",
      medium: "#ffbc0a",
      tinyLight: "#ffc93b",
      light: "#ffd76c",
      lighter: "#ffe49d",
      lightest: "#fff2ce",
    },
  },
  fontSizes: {
    xxxl: "48px",
    xxl: "32px",
    xl: "24px",
    l: "20px",
    m: "18px",
    s: "16px",
    xs: "14px",
    xxs: "12px",
    xxxs: "10px",
  },
  fontWeights: {
    bold: 600,
    medium: 500,
    regular: 400,
    light: 300,
  },
  sizes: {
    giant: "200px",
    huge: "160px",
    xxxl: "120px",
    xxl: "80px",
    xl: "64px",
    l: "56px",
    m: "48px",
    s: "40px",
    xs: "32px",
    xxs: "24px",
    xxxs: "16px",
    nano: "8px",
    quark: "4px",
  },
};

export default themeInstance;
