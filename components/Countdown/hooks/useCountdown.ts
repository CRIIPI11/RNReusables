import { useState, useEffect, useRef, useCallback } from "react";

export function useCountdown(initialSeconds: number) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);
  const isRunning = useRef(false);
  const onCompleteRef = useRef<(() => void) | null>(null); // Store callback reference

  console.log(timeLeft);
  const start = useCallback(
    (onComplete: () => void, seconds?: number) => {
      if (isRunning.current) return;
      if (timeLeft === 0 && seconds === undefined) {
        setTimeLeft(initialSeconds);
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

  const stop = useCallback(() => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
      isRunning.current = false;
    }
  }, []);

  const reset = useCallback(
    (newSeconds: number) => {
      stop();
      setTimeLeft(newSeconds);
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
    stop,
    reset,
  };
}
