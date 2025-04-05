import { useState, useEffect } from "react";
import { View, Text, Modal, Button } from "react-native";
import { StyleSheet } from "react-native-unistyles";
import { CountdownProps } from "../utils/types";

/**
 * A countdown timer modal component.
 * This component uses a `Modal` to display a countdown timer and inherits all the props from `Modal`.
 * Uses Roboto font for the countdown text. Make sure to include the font in your project.
 */
const Countdown: React.FC<CountdownProps> = ({
  visible,
  seconds = 5,
  cancelable,
  textColor = "black",
  backgroundColor = "#e0e0e0",
  cancelableComponent,
  countdownContainerStyle,
  textStyle,
  overlayStyle,
  onComplete,
  onCancel,
  ...props
}) => {
  const [timeLeft, setTimeLeft] = useState(seconds);
  const CancelableComponent = cancelableComponent;

  /**
   * Update the countdown timer.
   */
  useEffect(() => {
    if (!visible) return;

    setTimeLeft(seconds); // Reset timer when visible changes

    const interval = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(interval);
          setTimeout(onComplete, 0); // Prevent React warning by calling onComplete asynchronously
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [visible, seconds, onComplete]);

  /**
   * Handle the cancel button press.
   */
  const handleCancel = () => {
    if (onCancel) {
      onCancel(); // Call onCancel if provided
    } else {
      throw new Error(
        "Countdown: onCancel is required when cancelable is true."
      );
    }
  };

  return (
    <Modal
      visible={visible}
      presentationStyle="overFullScreen"
      animationType="fade"
      transparent={true}
      {...props}
    >
      <View style={[styles.overlay, overlayStyle]}>
        <View
          style={[
            styles.countdownContainer,
            { backgroundColor },
            countdownContainerStyle,
          ]}
        >
          <Text style={[styles.countdownText, { color: textColor }, textStyle]}>
            {timeLeft}
          </Text>
          {cancelable &&
            (cancelableComponent && CancelableComponent ? (
              <CancelableComponent onPress={handleCancel} />
            ) : (
              <Button
                title="Cancel"
                onPress={handleCancel}
                accessibilityLabel="Cancel Countdown"
              />
            ))}
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create((theme) => ({
  overlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: theme.colors.overlay,
  },
  countdownContainer: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    minWidth: "40%",
    maxWidth: "80%",
    minHeight: "15%",
    maxHeight: "30%",
    borderRadius: 16,
    paddingVertical: 16,
  },
  countdownText: {
    fontSize: 48,
    textAlign: "center",
    fontFamily: "Roboto",
    marginVertical: 16,
  },
}));

export default Countdown;
