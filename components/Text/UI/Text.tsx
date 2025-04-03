import { Text as RNText } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { PredefinedColors, TextProps } from "../utils/types";

export default function Text({
  children,
  fontVariant,
  weight,
  color,
  lightness,
  isLink,
  style,
  textAlign,
  ...rest
}: TextProps) {
  const isCustomColor =
    color &&
    !["primary", "secondary", "accent", "error", "warning", "info"].includes(
      color
    );

  styles.useVariants({
    fontVariant: fontVariant ?? "body",
    weight: weight,
    color: isCustomColor ? undefined : (color as PredefinedColors),
    lightness: lightness,
    link: isLink,
    textAlign: textAlign,
  });

  const text = StyleSheet.flatten([
    styles.text,
    isCustomColor ? { color } : {},
    style,
  ]);

  return (
    <RNText style={text} {...rest}>
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create((theme) => ({
  text: {
    variants: {
      fontVariant: {
        largeTitle: {
          fontSize: 34,
          fontWeight: 700,
          lineHeight: 41,
          letterSpacing: 0.37,
        },
        title1: {
          fontSize: 28,
          lineHeight: 34,
          letterSpacing: 0.36,
        },
        title2: {
          fontSize: 22,
          lineHeight: 28,
          letterSpacing: 0.35,
        },
        title3: {
          fontSize: 20,
          lineHeight: 24,
          letterSpacing: 0.34,
        },
        headline: {
          fontSize: 17,
          fontWeight: 600,
          lineHeight: 22,
          letterSpacing: 0.15,
        },
        body: {
          fontSize: 17,
          lineHeight: 22,
          letterSpacing: 0.15,
        },
        callout: {
          fontSize: 16,
          lineHeight: 20,
          letterSpacing: 0.15,
        },
        subheadline: {
          fontSize: 15,
          lineHeight: 20,
          letterSpacing: 0.15,
        },
        footnote: {
          fontSize: 13,
          lineHeight: 18,
          letterSpacing: 0.1,
        },
        caption1: {
          fontSize: 12,
          lineHeight: 16,
          letterSpacing: 0.1,
        },
        caption2: {
          fontSize: 11,
          lineHeight: 16,
          letterSpacing: 0.1,
        },
      },
      weight: {
        light: {
          fontWeight: 300,
        },
        medium: {
          fontWeight: 500,
        },
        bold: {
          fontWeight: 700,
        },
      },
      color: {
        primary: {
          color: theme.colors.primary,
        },
        secondary: {
          color: theme.colors.secondary,
        },
        accent: {
          color: theme.colors.accent,
        },
        error: {
          color: theme.colors.error,
        },
        warning: {
          color: theme.colors.warning,
        },
        info: {
          color: theme.colors.info,
        },
        default: {
          color: theme.colors.text,
        },
      },
      lightness: {
        extraLight: { opacity: 0.3 },
        light: { opacity: 0.5 },
        medium: { opacity: 0.7 },
      },
      link: {
        true: {},
      },
      textAlign: {
        left: {
          textAlign: "left",
        },
        center: {
          textAlign: "center",
        },
        right: {
          textAlign: "right",
        },
      },
    },
    compoundVariants: [
      {
        link: true,
        styles: {
          color: "#0A84FF",
          fontWeight: 600,
          textDecorationLine: "underline",
        },
      },
    ],
  },
}));
