import { Pressable, View } from "react-native";
import React from "react";
import { router } from "expo-router";
import { StyleSheet } from "react-native-unistyles";
import Text from "@/components/Text/UI/Text";

export default function CountdownIndex() {
  return (
    <View style={styles.container}>
      <Pressable
        onPress={() =>
          router.push("componentsPages/countdown/ui/countdownUIExample")
        }
        style={styles.itemContainer}
      >
        <Text weight="bold">Countdown UI</Text>
      </Pressable>
      <Pressable
        onPress={() =>
          router.push("componentsPages/countdown/hook/countdownHookExample")
        }
        style={styles.itemContainer}
      >
        <Text weight="bold">Countdown Hook</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    padding: 16,
    flex: 1,
    gap: 16,
    backgroundColor: theme.colors.background,
  },
  itemContainer: {
    padding: 16,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: theme.colors.border,
  },
}));
