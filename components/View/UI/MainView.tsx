import React from "react";
import { ScrollView, View } from "react-native";
import { StyleSheet, withUnistyles } from "react-native-unistyles";
import {
  alignPositionType,
  justifyPositionType,
  MainViewBaseProps,
} from "../utils/MainViewTypes";

export default function MainView({
  children,
  backgroundColor,
  padding = 8,
  safeArea,
  scrollable,
  scrollProps,
  gap,
  justifyPosition,
  alignPosition,
  flex,
  ...rest
}: MainViewBaseProps) {
  const viewStyle = StyleSheet.flatten([
    styles.container(
      padding,
      safeArea,
      scrollable,
      gap,
      backgroundColor,
      justifyPosition,
      alignPosition
    ),
  ]);

  const UniScrollview = withUnistyles(ScrollView);

  return (
    <View style={styles.outerContainer(backgroundColor)}>
      {scrollable ? (
        <UniScrollview
          contentContainerStyle={viewStyle}
          {...scrollProps}
          {...rest}
        >
          {children}
        </UniScrollview>
      ) : (
        <View style={viewStyle} {...rest}>
          {children}
        </View>
      )}
    </View>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  outerContainer: (backgroundColor?: string) => ({
    flex: 1,
    backgroundColor: backgroundColor || theme.colors.background,
  }),
  container: (
    padding: number,
    safeArea?: boolean,
    scrollable?: boolean,
    gap?: number,
    backgroundColor?: string,
    justifyPosition?: justifyPositionType,
    alignPosition?: alignPositionType
  ) => ({
    flex: scrollable ? undefined : 1,
    backgroundColor: backgroundColor
      ? backgroundColor
      : theme.colors.background,
    paddingTop: safeArea ? rt.insets.top : padding,
    paddingBottom: safeArea ? rt.insets.bottom : padding,
    gap: gap,
    justifyContent: justifyPosition,
    alignItems: alignPosition,
    padding: padding,
  }),
}));
