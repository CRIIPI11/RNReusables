import { StatusBar } from 'expo-status-bar';
import { useFonts } from "expo-font";
import { Button, StyleSheet, View } from "react-native";
import Countdown from "./components/Countdown/CountDown";
import { useState } from "react";

export default function App() {
  const [visible, setVisible] = useState(false);

  const [loaded] = useFonts({
    SpaceMono: require("./assets/fonts/SpaceMono-Regular.ttf"),
    Roboto: require("./assets/fonts/RobotoMono-Bold.ttf"),
  });

  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <Button title="Show Countdown" onPress={() => setVisible(true)} />
      <Countdown
        visible={visible}
        onComplete={() => {
          console.log("Countdown completed");
          setVisible(false);
        }}
      />
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
