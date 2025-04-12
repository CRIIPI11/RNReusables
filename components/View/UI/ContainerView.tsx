import { View } from "react-native";
import React from "react";
import { StyleSheet } from "react-native-unistyles";
import { ContainerViewProps } from "../utils/ContainerViewTypes";

export default function ContainerView({
  children,
  direction = "column",
  justifyContent = "space-evenly",
  alignItems,
  gap,
  padding,
  margin,
  backgroundColor,
  style,
  ...rest
}: ContainerViewProps) {
  return (
    <View
      style={[
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
      ]}
      {...rest}
    >
      {children}
    </View>
  );
}

const styles = StyleSheet.create({
  container: (direction) => ({
    flexDirection: direction,
  }),
});
