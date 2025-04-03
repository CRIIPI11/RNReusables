import { Text } from "react-native";

type TextVariant =
  | "largeTitle"
  | "title1"
  | "title2"
  | "title3"
  | "headline"
  | "body"
  | "callout"
  | "subheadline"
  | "footnote"
  | "caption1"
  | "caption2";

type TextWeight = "light" | "medium" | "bold";

type Lightness = "light" | "medium" | "extraLight";

type textAlign = "left" | "center" | "right";

export type PredefinedColors =
  | "primary"
  | "secondary"
  | "accent"
  | "error"
  | "warning"
  | "info";

type TextColor = PredefinedColors | (string & {});

export interface TextProps extends React.ComponentPropsWithoutRef<typeof Text> {
  children: React.ReactNode;
  fontVariant?: TextVariant;
  weight?: TextWeight;
  color?: TextColor;
  lightness?: Lightness;
  isLink?: boolean;
  textAlign?: textAlign;
}
