import Text from "@/components/Text/UI/Text";
import { DarkTheme, LightTheme } from "@/constants/colorScheme";
import { Icon, SfSymbolIconName } from "@roninoss/icons";
import { router } from "expo-router";
import { FlatList, Pressable, useColorScheme, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

interface dataComponent {
  name: string;
  path: string;
  icon: SfSymbolIconName;
}

const data: dataComponent[] = [
  {
    name: "Countdown",
    path: "componentsPages/countdown/countdownIndex",
    icon: "timer",
  },
  {
    name: "Unistyles",
    path: "componentsPages/unistyles/unistylesExample",
    icon: "paintpalette",
  },
  {
    name: "Text",
    path: "componentsPages/text/textExample",
    icon: "bold",
  },
  {
    name: "View",
    path: "componentsPages/view/viewExample",
    icon: "display",
  },
  {
    name: "Button",
    path: "componentsPages/button/buttonExample",
    icon: "play",
  },
  {
    name: "Timer",
    path: "componentsPages/timer/timerExample",
    icon: "alarm",
  },
];

export default function Page() {
  const theme = useColorScheme();

  return (
    <View style={styles.container}>
      <Text fontVariant="title1" weight="bold">
        Components
      </Text>
      <FlatList
        data={data}
        renderItem={({ item }) => (
          <Pressable
            style={styles.itemContainer}
            onPress={() => router.push(item.path)}
          >
            <Icon
              name={item.icon}
              size={24}
              color={
                theme === "dark"
                  ? DarkTheme.colors.text
                  : LightTheme.colors.text
              }
              namingScheme="sfSymbol"
            />
            <Text>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: theme.colors.background,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    padding: 16,
    borderWidth: 2,
    borderRadius: 8,
    borderColor: theme.colors.border,
    gap: 8,
  },
  itemName: {
    fontSize: 18,
    marginLeft: 16,
    fontWeight: "bold",
  },
}));
