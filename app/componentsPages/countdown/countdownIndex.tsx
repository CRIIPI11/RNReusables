import { Pressable, StyleSheet, Text, View } from "react-native";
import React from "react";
import { router, Stack } from "expo-router";

export default function countdownIndex() {
  return (
    <View style={{ padding: 16 }}>
      <Pressable
        onPress={() =>
          router.push("componentsPages/countdown/ui/countdownUIExample")
        }
        style={styles.container}
      >
        <Text style={styles.text}>Countdown UI</Text>
      </Pressable>
      <Pressable
        onPress={() =>
          router.push("componentsPages/countdown/hook/countdownHookExample")
        }
        style={styles.container}
      >
        <Text style={styles.text}>Countdown Hook</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
    borderWidth: 2,
    marginVertical: 8,
    borderRadius: 8,
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
  },
});
