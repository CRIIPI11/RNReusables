import { Text as RNText } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { PredefinedColors, TextProps } from "../utils/types";

export default function Text({
  children,
  fontVariant = "body",
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
    fontVariant: fontVariant,
    weight: weight,
    color: color as PredefinedColors,
    lightness: lightness,
    link: isLink,
    textAlign: textAlign,
  });

  const textStyle = StyleSheet.flatten([
    styles.text,
    isCustomColor && { color },
    style,
  ]);

  return (
    <RNText style={textStyle} {...rest}>
      {children}
    </RNText>
  );
}

const styles = StyleSheet.create((theme) => ({
  text: {
    variants: {
      fontVariant: {
        largeTitle: {
          fontSize: {
            phone: 34,
            tablet: 44,
          },
          fontWeight: {
            phone: 700,
            tablet: 800,
          },
          lineHeight: {
            phone: 41,
            tablet: 52,
          },
          letterSpacing: {
            phone: 0.37,
            tablet: 0.46,
          },
        },
        title1: {
          fontSize: {
            phone: 28,
            tablet: 34,
          },
          lineHeight: {
            phone: 34,
            tablet: 41,
          },
          letterSpacing: {
            phone: 0.36,
            tablet: 0.43,
          },
        },
        title2: {
          fontSize: {
            phone: 22,
            tablet: 28,
          },
          lineHeight: {
            phone: 28,
            tablet: 34,
          },
          letterSpacing: {
            phone: 0.35,
            tablet: 0.42,
          },
        },
        title3: {
          fontSize: {
            phone: 20,
            tablet: 24,
          },
          lineHeight: {
            phone: 24,
            tablet: 28,
          },
          letterSpacing: {
            phone: 0.34,
            tablet: 0.41,
          },
        },
        headline: {
          fontSize: {
            phone: 17,
            tablet: 20,
          },
          fontWeight: {
            phone: 600,
            tablet: 700,
          },
          lineHeight: {
            phone: 22,
            tablet: 28,
          },
          letterSpacing: {
            phone: 0.15,
            tablet: 0.18,
          },
        },
        body: {
          fontSize: {
            phone: 17,
            tablet: 20,
          },
          lineHeight: {
            phone: 22,
            tablet: 26,
          },
          letterSpacing: 0.15,
        },
        callout: {
          fontSize: {
            phone: 16,
            tablet: 19,
          },
          lineHeight: {
            phone: 22,
            tablet: 24,
          },
          letterSpacing: {
            phone: 0.15,
            tablet: 0.18,
          },
        },
        subheadline: {
          fontSize: {
            phone: 15,
            tablet: 17,
          },
          lineHeight: {
            phone: 20,
            tablet: 24,
          },
          letterSpacing: 0.15,
        },
        footnote: {
          fontSize: {
            phone: 13,
            tablet: 15,
          },
          lineHeight: {
            phone: 18,
            tablet: 20,
          },
          letterSpacing: 0.1,
        },
        caption1: {
          fontSize: {
            phone: 12,
            tablet: 13,
          },
          lineHeight: {
            phone: 16,
            tablet: 18,
          },
          letterSpacing: 0.1,
        },
        caption2: {
          fontSize: {
            phone: 11,
            tablet: 12,
          },
          lineHeight: {
            phone: 16,
            tablet: 18,
          },
          letterSpacing: 0.1,
        },
      },
      weight: {
        light: {
          fontWeight: 200,
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
