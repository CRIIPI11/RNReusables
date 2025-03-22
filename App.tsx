import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font";
import { Button, StyleSheet, Text, View } from "react-native";
import Countdown from "./components/Countdown/UI/CountDown";
import { useState } from "react";
import { useCountdown } from "./components/Countdown/hooks/useCountdown";

export default function App() {
  const { timeLeft, start, stop, reset } = useCountdown(10);

  return (
    <View style={styles.container}>
      <Text>Time Left: {timeLeft}</Text>
      <View style={{ height: 20 }} />
      <Button
        title="Start Countdown"
        onPress={() => start(() => console.log("Countdown finished!"))}
      />
      <View style={{ height: 20 }} />
      <Button title="Stop Countdown" onPress={stop} />
      <View style={{ height: 20 }} />
      <Button title="Reset to 15s" onPress={() => reset(15)} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
