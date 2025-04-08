import React, { ForwardedRef, forwardRef, useImperativeHandle } from "react";
import { StyleSheet, Text, View } from "react-native";
import useTimer from "../Utils/hooks/useTimer";
import { TimerMethods, TimerProps } from "../Utils/types";
export { TimerMethods } from "../Utils/types";

function Stopwatch(
  {
    containerStyle,
    mode = "stopwatch",
    digitStyle,
    initialTimeInMs,
    onFinish,
    separatorStyle,
    textCharStyle,
    trailingZeros = 0,
    decimalSeparator = ",",
    intervalMs = 16,
    hours = false,
  }: TimerProps,
  ref: ForwardedRef<TimerMethods>
) {
  const {
    tensOfMs,
    lastDigit,
    tens,
    seconds,
    minutesDigit1,
    minutesDigit2,
    hoursDigit1,
    hoursDigit2,
    play,
    reset,
    pause,
    getSnapshot,
  } = useTimer({
    initialTimeInMs,
    onFinish,
    mode,
    intervalMs,
  });

  useImperativeHandle(ref, () => ({
    play,
    pause,
    reset,
    getSnapshot,
  }));

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { width, ...textCharStyleWithoutWidth } = StyleSheet.flatten(
    textCharStyle || {}
  );

  return (
    <View style={[styles.container, containerStyle]}>
      {hours && (
        <>
          <Text
            key={`${hoursDigit2}-hoursDigit2`}
            style={[
              styles.defaultCharStyle,
              textCharStyleWithoutWidth,
              digitStyle,
            ]}
          >
            {hoursDigit2}
          </Text>
          <Text
            key={`${hoursDigit1}-hoursDigit1`}
            style={[
              styles.defaultCharStyle,
              textCharStyleWithoutWidth,
              digitStyle,
            ]}
          >
            {hoursDigit1}
          </Text>
          <Text
            style={[
              styles.defaultCharStyle,
              textCharStyleWithoutWidth,
              separatorStyle,
            ]}
          >
            :
          </Text>
        </>
      )}
      <Text
        key={`${minutesDigit2}-minutesDigit2`}
        style={[styles.defaultCharStyle, textCharStyleWithoutWidth, digitStyle]}
      >
        {minutesDigit2}
      </Text>
      <Text
        key={`${minutesDigit1}-minutesDigit1`}
        style={[styles.defaultCharStyle, textCharStyleWithoutWidth, digitStyle]}
      >
        {minutesDigit1}
      </Text>
      <Text
        style={[
          styles.defaultCharStyle,
          textCharStyleWithoutWidth,
          separatorStyle,
        ]}
      >
        :
      </Text>
      <Text
        key={`${seconds}-seconds`}
        style={[styles.defaultCharStyle, textCharStyleWithoutWidth, digitStyle]}
      >
        {tens}
      </Text>
      <Text
        key={`${lastDigit}-lastDigit`}
        style={[styles.defaultCharStyle, textCharStyleWithoutWidth, digitStyle]}
      >
        {lastDigit}
      </Text>
      {trailingZeros > 0 && (
        <>
          <Text
            style={[
              styles.defaultCharStyle,
              textCharStyleWithoutWidth,
              separatorStyle,
            ]}
          >
            {decimalSeparator}
          </Text>
          <Text
            style={[
              styles.defaultCharStyle,
              textCharStyleWithoutWidth,
              digitStyle,
            ]}
          >
            {tensOfMs >= 10 ? String(tensOfMs).charAt(0) : 0}
          </Text>
          {trailingZeros === 2 && (
            <Text
              style={[
                styles.defaultCharStyle,
                textCharStyleWithoutWidth,
                digitStyle,
              ]}
            >
              {tensOfMs >= 10
                ? String(tensOfMs).charAt(1)
                : String(tensOfMs).charAt(0)}
            </Text>
          )}
        </>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    overflow: "hidden",
  },
  defaultCharStyle: {
    fontSize: 18,
    fontWeight: "600",
    textAlign: "center",
  },
});

const Timer = forwardRef<TimerMethods, TimerProps>(Stopwatch);

export default Timer;
