import { useState, useEffect, ComponentPropsWithoutRef } from "react";
import {
  View,
  Text,
  Modal,
  Button,
  ViewStyle,
  TextStyle,
  PressableProps,
} from "react-native";
import { StyleSheet } from "react-native-unistyles";

interface BaseCountdownProps extends ComponentPropsWithoutRef<typeof Modal> {
  /**
   * The visibility state of the countdown modal.
   */
  visible: boolean;
  /**
   * The number of seconds for the countdown.
   * Ideally, this should be less than 60.
   * @default 5
   */
  seconds?: number;
  /**
   * A callback function to be executed when the countdown completes.
   */
  onComplete: () => void;
  /**
   * Whether the Countdown should include a cancel button.
   */
  cancelable?: boolean;
  /**
   * A callback function when the countdown is manually canceled.
   */
  onCancel?: () => void;
  /**
   * A custom component to be rendered as the cancel button.
   */
  cancelableComponent?: React.ComponentType<PressableProps>;
  /**
   * The text color of the countdown.
   * @default "black"
   */
  textColor?: string;
  /**
   * The background color of the countdown.
   * @default "white"
   */
  backgroundColor?: string;
  /**
   * Custom container style.
   */
  countdownContainerStyle?: ViewStyle; // Allows custom container styling
  /**
   * Custom overlay style.
   */
  overlayStyle?: ViewStyle; // Allows custom overlay styling
  /**
   * Custom text style.
   */
  textStyle?: TextStyle; // Allows custom text styling
}

/**
 * Enforce `onCancel` when `cancelable` is `true`.
 */
type CountdownProps =
  | (BaseCountdownProps & { cancelable?: false; onCancel?: never })
  | (BaseCountdownProps & { cancelable: true; onCancel: () => void });

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
