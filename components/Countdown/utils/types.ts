import { ComponentPropsWithoutRef } from "react";
import { Modal, PressableProps, TextStyle, ViewStyle } from "react-native";

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
export type CountdownProps =
  | (BaseCountdownProps & { cancelable?: false; onCancel?: never })
  | (BaseCountdownProps & { cancelable: true; onCancel: () => void });
