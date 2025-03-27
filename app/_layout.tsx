import { Stack } from "expo-router";
import { useColorScheme } from "react-native";
import { DarkTheme, LightTheme } from "../constants/colorScheme";
import { useFonts } from "expo-font";

export default function RootLayout() {
  const theme = useColorScheme();

  const [loaded] = useFonts({
    Roboto: require("../assets/fonts/RobotoMono-Bold.ttf"),
  });

  return (
    <Stack
      screenOptions={{
        headerStyle: {
          backgroundColor:
            theme === "dark" ? DarkTheme?.primary : LightTheme?.primary,
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
      <Stack.Screen name="componentsPages/countdown/ui/countdownUI" />
      <Stack.Screen name="componentsPages/countdown/hook/countdownHook" />
    </Stack>
  );
}
