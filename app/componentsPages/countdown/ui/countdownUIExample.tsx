import { Button, Pressable, PressableProps, View } from "react-native";
import Countdown from "@/components/Countdown/UI/CountDown";
import { useState } from "react";
import Text from "@/components/Text/UI/Text";
import { StyleSheet } from "react-native-unistyles";

export default function CountdownUI() {
  const [visible, setVisible] = useState(false);
  const [time, setTime] = useState(5);

  return (
    <View style={styles.container}>
      <Text fontVariant="title2" weight="bold">
        Time: {time}
      </Text>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-evenly",
          gap: 16,
        }}
      >
        <Button
          title="Increase time +"
          onPress={() => setTime(time + 5 > 60 ? 60 : time + 5)}
        />
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
        // cancelableComponent={MyCustomCancelButton}
      />
    </View>
  );
}

const MyCustomCancelButton: React.FC<PressableProps> = (props) => (
  <Pressable {...props}>
    <Text style={{ color: "red" }}>Cancel Button</Text>
  </Pressable>
);

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 16,
    backgroundColor: theme.colors.background,
  },
}));
