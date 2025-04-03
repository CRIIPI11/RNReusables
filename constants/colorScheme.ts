import { Platform } from "react-native";

export const LightTheme = Platform.select({
  ios: {
    colors: {
      primary: "#007AFF", // iOS Blue
      secondary: "#8E8E93", // iOS Gray
      background: "#FFFFFF", // System background
      surface: "#F2F2F7", // Grouped background
      text: "#000000", // Primary text
      subtext: "#3C3C43", // Secondary text
      accent: "#34C759", // Green for attention

      // Semantic Colors
      success: "#34C759", // Green (Success)
      warning: "#FFCC00", // Yellow (Warning)
      error: "#FF3B30", // Red (Error)
      info: "#5AC8FA", // Light Blue (Info)

      border: "#C6C6C8", // iOS Default Border Color
      shadow: "rgba(0, 0, 0, 0.2)", // Default shadow
      divider: "#C6C6C8", // Line separators
      placeholder: "#A0A0A0", // Placeholder text
      disabled: "#D1D1D6", // Disabled elements
      selection: "#D7E7FF", // Selected text
      highlight: "#D1E4FF", // Pressed button feedback
      overlay: "rgba(0, 0, 0, 0.4)", // Modals or dim backgrounds
      link: "#007AFF", // Hyperlinks
      focus: "#FFD60A", // Focus indicators
    },
  },
  android: {
    colors: {
      primary: "#6200EE", // Material 3 Primary Purple
      secondary: "#03DAC6", // Teal Accent
      background: "#FFFFFF",
      surface: "#F5F5F5",
      text: "#000000",
      subtext: "#5D5D5D",
      accent: "#03DAC5",

      // Semantic Colors
      success: "#4CAF50", // Green
      warning: "#FFC107", // Amber
      error: "#F44336", // Red
      info: "#2196F3", // Blue

      // Extra UI Colors
      border: "#C6C6C8", // Default Border Color
      shadow: "rgba(0, 0, 0, 0.2)", // Default shadow
      divider: "#E0E0E0",
      placeholder: "#9E9E9E",
      disabled: "#BDBDBD",
      selection: "#BB86FC", // Material You Selection
      highlight: "#B39DDB",
      overlay: "rgba(0, 0, 0, 0.2)",
      link: "#1E88E5",
      focus: "#FFDE03", // Material You Focus Yellow
    },
  },
  macos: {
    colors: {},
  },
  native: {
    colors: {},
  },
  web: {
    colors: {},
  },
  windows: {
    colors: {},
  },
});

export const DarkTheme = Platform.select({
  ios: {
    colors: {
      primary: "#0A84FF", // Dark mode iOS Blue
      secondary: "#636366", // Dark mode iOS Gray
      background: "#000000", // Dark system background
      surface: "#1C1C1E", // Dark grouped background
      text: "#FFFFFF", // Primary text
      subtext: "#EBEBF5", // Secondary text
      accent: "#30D158", // Dark mode Green

      // Semantic Colors
      success: "#30D158", // Dark mode Green (Success)
      warning: "#FFD60A", // Dark mode Yellow (Warning)
      error: "#FF453A", // Dark mode Red (Error)
      info: "#64D2FF", // Dark mode Light Blue (Info)

      border: "#3A3A3C", // Dark mode border
      shadow: "rgba(255, 255, 255, 0.1)", // Subtle light shadow
      divider: "#3A3A3C", // Line separators
      placeholder: "#636366", // Placeholder text
      disabled: "#48484A", // Disabled elements
      selection: "#2557B3", // Selected text
      highlight: "#2557B3", // Pressed button feedback
      overlay: "rgba(255, 255, 255, 0.15)", // Modals or dim backgrounds
      link: "#0A84FF", // Hyperlinks
      focus: "#FFD60A", // Focus indicators
    },
  },
  android: {
    colors: {
      primary: "#BB86FC", // Material You Purple
      secondary: "#03DAC5", // Teal Accent
      background: "#121212",
      surface: "#1E1E1E",
      text: "#FFFFFF",
      subtext: "#B0B0B0",
      accent: "#03DAC6",

      // Semantic Colors
      success: "#1B5E20", // Deep green
      warning: "#FF8F00", // Dark amber
      error: "#B71C1C", // Deep red
      info: "#1565C0", // Dark blue

      // Extra UI Colors
      border: "#3A3A3C", // Dark mode border
      shadow: "rgba(255, 255, 255, 0.1)", // Subtle light shadow
      divider: "#424242",
      placeholder: "#9E9E9E",
      disabled: "#757575",
      selection: "#3700B3",
      highlight: "#BB86FC",
      overlay: "rgba(255, 255, 255, 0.15)",
      link: "#64B5F6",
      focus: "#FFDE03", // Material You Focus Yellow
    },
  },
  macos: {
    colors: {},
  },
  native: {
    colors: {},
  },
  web: {
    colors: {},
  },
  windows: {
    colors: {},
  },
});
