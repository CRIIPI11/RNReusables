import { View } from "react-native";

export interface ContainerViewProps extends React.ComponentProps<typeof View> {
  children?: React.ReactNode;
  direction?: "row" | "column";
  justifyContent?:
    | "flex-start"
    | "center"
    | "flex-end"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "flex-start" | "center" | "flex-end" | "stretch";
  gap?: number;
  padding?: number;
  margin?: number;
  backgroundColor?: string;
}
