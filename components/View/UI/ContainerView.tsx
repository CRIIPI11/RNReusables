import { View } from "react-native";
import React from "react";
import { StyleSheet } from "react-native-unistyles";
import { ContainerViewProps } from "../utils/ContainerViewTypes";

export default function ContainerView({
  children,
  direction = "column",
  justifyContent,
  alignItems,
  gap,
  padding,
  margin,
  backgroundColor,
  style,
  ...rest
}: ContainerViewProps) {
  const viewStyle = StyleSheet.flatten([
    styles.container(direction),
    {
      justifyContent,
      alignItems,
      gap,
      padding,
      margin,
      backgroundColor,
    },
    style,
  ]);

  return (
    <View style={viewStyle} {...rest}>
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: (direction) => ({
    flexDirection: direction,
  }),
});
