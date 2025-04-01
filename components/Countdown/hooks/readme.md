# `useCountdown` Hook ⏳  

## Overview 📌  
The `useCountdown` hook provides a simple countdown timer with start, stop, and reset functionality. It allows an optional completion callback when the countdown finishes.  

## Installation 🛠  
No installation required. Just import the hook in your React project.  

## Usage 🚀  
```tsx
import { useCountdown } from "./useCountdown";

function TimerComponent() {
  const { timeLeft, start, stop, reset } = useCountdown(10);

  return (
    <div>
      <p>Time Left: {timeLeft}</p>
      <button onClick={() => start(() => alert("Countdown Complete!"))}>
        Start
      </button>
      <button onClick={stop}>Stop</button>
      <button onClick={() => reset(10)}>Reset</button>
    </div>
  );
}
```

# API Reference 📖  

## `useCountdown(initialSeconds: number) => CountdownInstance`  
Creates a countdown timer instance with an initial duration in seconds.  

### **Returned Object**  

| Property   | Type                                         | Description |
|------------|----------------------------------------------|-------------|
| `timeLeft` | `number`                                    | The remaining time in seconds. |
| `start`    | `(onComplete: () => void, seconds?: number) => void` | Starts the timer at the current timeLeft value. Requires a callback function that will be called when timeLeft reaches 0. Accepts an optional parameter "seconds" that sets the timeLeft to that value and starts the timer. |
| `pause`    | `() => void`                                | Pauses the countdown immediately. |
| `stop`     | `() => void`                                | Stops the countdown immediately and resets the timeLeft value to its last used state. |
| `reset`    | `(newSeconds: number) => void`             | Resets the countdown to a new specified duration. If no new duration is provided, it resets to the last used timeLeft value. (Note: Calling the reset() function doesn't stop the timer if is currently tunning) |

---
