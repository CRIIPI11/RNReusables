# Countdown Component ⏳

## Overview 🌟

`Countdown` is a flexible and customizable React Native modal countdown timer. It allows you to set a countdown duration, apply custom styles, and optionally include a cancel button for user control.

## Usage 📄💡

```tsx
import Countdown from "./Countdown";

<Countdown
  visible={true}
  seconds={10}
  cancelable={true}
  onComplete={() => console.log("Done!")}
  onCancel={() => console.log("Canceled!")}
  textColor="red"
  backgroundColor="black"
  countdownContainerStyle={{ padding: 15, borderRadius: 12 }}
  overlayStyle={{ backgroundColor: "rgba(0, 0, 0, 0.6)" }}
  textStyle={{ fontSize: 24 }}
/>
```

## Props 📌

| Prop                      | Type          | Required | Default | Description                                                                    |
| ------------------------- | ------------- | -------- | ------- | ------------------------------------------------------------------------------ |
| `visible`                 | `boolean`     | ✅        | -       | Controls the visibility of the countdown modal.                                |
| `seconds`                 | `number`      | ❌        | `5`     | Sets the countdown duration, ideally under 60 seconds.                         |
| `onComplete`              | `() => void`  | ✅        | -       | Function triggered when the countdown completes.                               |
| `cancelable`              | `boolean`     | ❌        | `false` | Enables a cancel button for user interruption.                                 |
| `onCancel`                | `() => void`  | ❌\*      | -       | Callback function executed when canceled (required if `cancelable` is `true`). |
| `cancelableComponent`     | `JSX.Element` | ❌        | -       | Custom component for the cancel button.                                        |
| `textColor`               | `string`      | ❌        | `black` | Defines the countdown text color.                                              |
| `backgroundColor`         | `string`      | ❌        | `white` | Sets the background color of the countdown modal.                              |
| `countdownContainerStyle` | `ViewStyle`   | ❌        | -       | Custom styles for the countdown container.                                     |
| `overlayStyle`            | `ViewStyle`   | ❌        | -       | Styles for the modal background overlay.                                       |
| `textStyle`               | `TextStyle`   | ❌        | -       | Custom styling for countdown text.                                             |

## Additional Notes ⚠️

- If `cancelable` is set to `true`, the `onCancel` function must be provided.
- The countdown resets whenever `visible` changes.
- Inherits all available `Modal` props from React Native, ensuring seamless integration.

## Advanced Customization Example 🎨

```tsx
<Countdown
  visible={true}
  seconds={20}
  cancelable={true}
  onComplete={() => alert("Countdown Finished!")}
  onCancel={() => alert("Countdown Canceled!")}
  textColor="white"
  backgroundColor="darkblue"
  countdownContainerStyle={{ padding: 25, borderRadius: 15, alignItems: "center" }}
  overlayStyle={{ backgroundColor: "rgba(0, 0, 0, 0.7)" }}
  textStyle={{ fontSize: 32, fontWeight: "bold" }}
  cancelableComponent={<CustomCancelButton />}
/>
```

## License 🆓

Released under the MIT License. Use freely in your projects! 🚀

