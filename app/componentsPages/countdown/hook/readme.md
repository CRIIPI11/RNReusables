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
| `start`    | `(onComplete: () => void, seconds?: number) => void` | Starts the countdown. Optionally accepts a different start time and a completion callback. |
| `stop`     | `() => void`                                | Stops the countdown immediately. |
| `reset`    | `(newSeconds: number) => void`             | Resets the countdown to a new specified duration. |

---
