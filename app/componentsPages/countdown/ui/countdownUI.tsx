import { Button, StyleSheet, Text, View } from "react-native";
import Countdown from "../../../../components/Countdown/UI/CountDown";
import { useState } from "react";

export default function countdownUI() {
  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState(5);

  return (
    <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "center",
          marginVertical: 16,
        }}
      >
        <Button
          title="Increase time +"
          onPress={() => setTime(time + 5 > 60 ? 60 : time + 5)}
        />
        <Text
          style={{
            fontSize: 20,
            textAlign: "center",
            fontWeight: "bold",
            marginBottom: 16,
          }}
        >
          Time: {time}
        </Text>
        <Button
          title="Decrease time -"
          onPress={() => setTime(time - 5 < 5 ? 5 : time - 5)}
        />
      </View>
      <Button title="Show Timer" onPress={() => setVisible(true)} />
      <Countdown
        visible={visible}
        onComplete={() => setVisible(false)}
        seconds={time}
        cancelable={true}
        onCancel={() => setVisible(false)}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
});
