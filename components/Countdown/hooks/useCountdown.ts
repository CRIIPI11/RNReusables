import { useState, useEffect, useRef, useCallback } from "react";

/**
 * Hook to create a countdown timer
 * @param initialSeconds - Initial time in seconds
 */
export function useCountdown(initialSeconds: number) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const lastTimeLeft = useRef(initialSeconds);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isRunning = useRef(false);
  const onCompleteRef = useRef<(() => void) | null>(null); // Store callback reference

  /**
   * Start the countdown
   * @param onComplete - Callback to execute when the countdown finishes
   * @param seconds - Optional: Start the countdown with a different time
   */
  const start = useCallback(
    (onComplete: () => void, seconds?: number) => {
      if (isRunning.current) return;
      if (
        timeLeft === 0 &&
        seconds === undefined &&
        lastTimeLeft.current !== null &&
        lastTimeLeft.current !== 0
      ) {
        setTimeLeft(lastTimeLeft.current);
      }

      if (seconds !== undefined) {
        setTimeLeft(seconds);
      }

      onCompleteRef.current = onComplete; // Store callback
      isRunning.current = true;

      intervalRef.current = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            stop();
            onCompleteRef.current?.(); // Execute the stored callback
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    },
    [timeLeft]
  );

  /**
   * Pause the countdown
   */
  const pause = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      isRunning.current = false;
    }
  }, []);

  /**
   * Stop the countdown
   */
  const stop = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      isRunning.current = false;
    }
    setTimeLeft(lastTimeLeft.current);
  }, []);

  /**
   * Reset the countdown
   * @param newSeconds - New time in seconds
   */
  const reset = useCallback(
    (newSeconds?: number) => {
      if (newSeconds) {
        setTimeLeft(newSeconds);
        lastTimeLeft.current = newSeconds;
      } else {
        setTimeLeft(lastTimeLeft.current);
      }
    },
    [stop]
  );

  useEffect(() => {
    return () => stop();
  }, [stop]);

  return {
    // state
    timeLeft,
    // methods
    start,
    pause,
    stop,
    reset,
  };
}
