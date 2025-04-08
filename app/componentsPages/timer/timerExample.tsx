import { Button, StyleSheet, Text, View } from "react-native";
import React, { useRef } from "react";
import { MainView } from "@/components";
import Timer, { TimerMethods } from "@/components/Timer/UI/Timer";

export default function TimerExample() {
  const stopwatchTimerRef = useRef<TimerMethods>(null);
  const [time, setTime] = React.useState(600000);

  // Methods to control the stopwatch
  function play() {
    stopwatchTimerRef.current?.play();
  }

  function pause() {
    stopwatchTimerRef.current?.pause();
  }

  return (
    <MainView justifyPosition="center">
      <Button
        title="Incresae Time"
        onPress={() => setTime((prev) => prev + 60000)}
      />
      <Button
        title="Decrease Time"
        onPress={() => setTime((prev) => prev - 60000)}
      />
      <Timer
        ref={stopwatchTimerRef}
        onFinish={() => console.log("hola")}
        initialTimeInMs={time}
        mode="timer"
      />
      <Button title="Play" onPress={play} />
      <Button title="Pause" onPress={pause} />
    </MainView>
  );
}

const styles = StyleSheet.create({});
