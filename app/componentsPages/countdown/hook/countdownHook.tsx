import { Button, StyleSheet, Text, View } from "react-native";
import { useCountdown } from "../../../../components/Countdown/hooks/useCountdown";

export default function countdownHook() {
  const { timeLeft, start, stop, reset } = useCountdown(10);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Time Left: {timeLeft}</Text>
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
  text: {
    fontSize: 24,
  },
});
