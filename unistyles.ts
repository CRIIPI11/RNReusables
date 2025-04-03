import { StyleSheet } from "react-native-unistyles";
import { DarkTheme, LightTheme } from "./constants/colorScheme";

const appThemes = {
  light: LightTheme,
  dark: DarkTheme,
};

const breakpoints = {
  xs: 0,
  phone: 300,
  tablet: 600,
};

type AppBreakpoints = typeof breakpoints;
type AppThemes = typeof appThemes;

declare module "react-native-unistyles" {
  export interface UnistylesThemes extends AppThemes {}
  export interface UnistylesBreakpoints extends AppBreakpoints {}
}

StyleSheet.configure({
  settings: {
    adaptiveThemes: true,
  },
  breakpoints,
  themes: appThemes,
});
