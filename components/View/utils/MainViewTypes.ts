import { ScrollView, View } from "react-native";

export type justifyPositionType =
  | "flex-start"
  | "center"
  | "flex-end"
  | "space-between"
  | "space-around"
  | "space-evenly";

export type alignPositionType =
  | "flex-start"
  | "center"
  | "flex-end"
  | "stretch"
  | "baseline";

export interface MainViewBaseProps extends React.ComponentProps<typeof View> {
  children?: React.ReactNode;
  backgroundColor?: string;
  padding?: number;
  safeArea?: boolean;
  scrollable?: boolean;
  scrollProps?: React.ComponentProps<typeof ScrollView>;
  gap?: number;
  justifyPosition?: justifyPositionType;
  alignPosition?: alignPositionType;
  flex?: number;
}
