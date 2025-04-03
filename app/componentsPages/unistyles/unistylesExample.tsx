import { Pressable, Text, View } from "react-native";
import {
  Display,
  Hide,
  mq,
  StyleSheet,
  UnistylesRuntime,
} from "react-native-unistyles";
import React from "react";

export default function UnistylesExample() {
  const [isSelect, setIsSelect] = React.useState(true);

  // Variants
  styles.useVariants({
    color: false,
    borderColor: isSelect,
    // you can also use strings
    // color: "true" | "false"
  });

  return (
    <View style={styles.container}>
      {/* Dynamic Functions to pass values to stylesheet */}
      <Text style={styles.text(true)}>
        Selected theme is {JSON.stringify(UnistylesRuntime.breakpoint)}
      </Text>
      <Text style={styles.text()}>
        Selected theme is {UnistylesRuntime.themeName}
      </Text>
      {/* Display or Hide Components based on screen width (Media Queries)  */}
      <Display mq={mq.only.width(0, 400)}>
        <Text>This text is visible on small devices</Text>
      </Display>
      <Display mq={mq.only.width(400)}>
        <Text>This text is visible on big devices</Text>
      </Display>
      <Hide mq={mq.only.width("tablet")}>
        <Text>This text is hidden on big devices</Text>
      </Hide>
      {/* Variants */}
      <Pressable
        onPress={() => setIsSelect((prev) => !prev)}
        style={styles.variantView}
      />
    </View>
  );
}

const styles = StyleSheet.create((theme, rt) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    // Dynamic Background Color based on breakpoint
    backgroundColor: {
      phone: theme.colors.background,
      tablet: theme.colors.surface,
    },
    rowGap: 8,
  },
  // Dynamic Functions to pass values to stylesheet
  text: (link?) => ({
    color: link ? theme.colors.link : theme.colors.text,
    fontSize: 16,
  }),
  // Variants
  variantView: {
    width: 100,
    height: 100,
    // otter styles
    variants: {
      color: {
        true: {
          backgroundColor: theme.colors.primary,
        },
        false: {
          backgroundColor: theme.colors.disabled,
        },
        // you can still specify a default variant
        default: {
          backgroundColor: theme.colors.accent,
        },
        // or other variants
        special: {
          backgroundColor: theme.colors.highlight,
        },
      },
      borderColor: {
        true: {
          borderWidth: 1,
          borderColor: theme.colors.primary,
          borderRadius: 8,
        },
        // you can also skip "false" here
      },
    },
  },
}));
