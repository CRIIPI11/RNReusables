import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { DarkTheme, LightTheme } from "../constants/colorScheme";
import { useFonts } from "expo-font";
import * as SystemUI from "expo-system-ui";
import { useEffect } from "react";
export default function RootLayout() {
  const theme = useColorScheme();

  const [loaded] = useFonts({
    Roboto: require("../assets/fonts/RobotoMono-Bold.ttf"),
  });

  // Set root background color using expo-system-ui
  useEffect(() => {
    if (theme === "dark") {
      SystemUI.setBackgroundColorAsync(DarkTheme.colors.background ?? null);
    } else {
      SystemUI.setBackgroundColorAsync(LightTheme.colors.background ?? null);
    }
  }, [theme]);

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor:
            theme === "dark"
              ? DarkTheme.colors.primary
              : LightTheme.colors.primary,
        },
        headerTintColor: "#fff",
        headerTitleAlign: "center",
        title: "",
      }}
    >
      <Stack.Screen name="index" />
      {/* Countdown */}
      <Stack.Screen
        name="componentsPages/countdown/countdownIndex"
        options={{
          title: "Countdown",
        }}
      />
      <Stack.Screen name="componentsPages/countdown/ui/countdownUIExample" />
      <Stack.Screen name="componentsPages/countdown/hook/countdownHookExample" />
      <Stack.Screen name="componentsPages/unistyles/unistylesExample" />
      <Stack.Screen name="componentsPages/text/textExample" />
      <Stack.Screen name="componentsPages/view/viewExample" />
      <Stack.Screen name="componentsPages/button/buttonExample" />
      <Stack.Screen name="componentsPages/timer/timerExample" />
    </Stack>
  );
}
