import Text from "@/components/Text/UI/Text";
import { DarkTheme, LightTheme } from "@/constants/colorScheme";
import { Icon, MaterialIconName } from "@roninoss/icons";
import { router } from "expo-router";
import { FlatList, Pressable, useColorScheme, View } from "react-native";
import { StyleSheet } from "react-native-unistyles";

interface dataComponent {
  name: string;
  path: string;
  icon: MaterialIconName;
}

const data: dataComponent[] = [
  {
    name: "Countdown",
    path: "componentsPages/countdown/countdownIndex",
    icon: "timer-outline",
  },
  {
    name: "Unistyles",
    path: "componentsPages/unistyles/unistylesExample",
    icon: "palette-outline",
  },
  {
    name: "Text",
    path: "componentsPages/text/textExample",
    icon: "note-text-outline",
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
            />
            <Text>{item.name}</Text>
          </Pressable>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  outContainer: {
    flex: 1,
  },
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
