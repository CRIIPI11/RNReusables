import { Icon, MaterialIconName } from "@roninoss/icons";
import { router } from "expo-router";
import {
  FlatList,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from "react-native";

interface dataComponent {
  name: string;
  path: string;
  icon: MaterialIconName;
}

const data: dataComponent[] = [
  {
    name: "Countdown",
    path: "componentsPages/countdown/countdownIndex",
    icon: "timer",
  },
];

export default function Page() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <Text style={styles.title}>Components</Text>
        <FlatList
          data={data}
          renderItem={({ item }) => (
            <Pressable
              style={styles.itemContainer}
              onPress={() => router.push(item.path)}
            >
              <Icon name={item.icon} size={24} color="black" />
              <Text style={styles.itemName}>{item.name}</Text>
            </Pressable>
          )}
        />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 32,
    textAlign: "center",
    fontWeight: "bold",
    marginBottom: 16,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 8,
    padding: 16,
    borderWidth: 2,
    borderRadius: 8,
  },
  itemName: {
    fontSize: 18,
    marginLeft: 16,
    fontWeight: "bold",
  },
});
