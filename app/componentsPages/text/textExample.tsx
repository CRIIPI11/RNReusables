import { View } from "react-native";
import React from "react";
import { StyleSheet } from "react-native-unistyles";
import Text from "@/components/Text/UI/Text";

export default function TextExample() {
  return (
    <View style={styles.container}>
      <Text fontVariant="largeTitle">Large Title</Text>
      <Text fontVariant="title1">Title 1</Text>
      <Text fontVariant="title2">Title 2</Text>
      <Text fontVariant="title3">Title 3</Text>
      <Text fontVariant="headline">Headline</Text>
      <Text fontVariant="body">Body</Text>
      <Text fontVariant="callout">Callout</Text>
      <Text fontVariant="subheadline">Subheadline</Text>
      <Text fontVariant="footnote">Footnote</Text>
      <Text fontVariant="caption1">Caption 1</Text>
      <Text fontVariant="caption2">Caption 2</Text>
      <View style={{ height: 20 }} />
      <Text weight="light">Body Ligth</Text>
      <Text>Body Regular (default)</Text>
      <Text weight="medium">Body Medium</Text>
      <Text weight="bold">Body Bold</Text>
      <View style={{ height: 20 }} />
      <Text color="primary">Primary Color Vairant</Text>
      <Text color="secondary">Secondary Color Vairant</Text>
      <Text color="accent">Accent Color Vairant</Text>
      <Text color="error">Error Color Vairant</Text>
      <Text color="warning">Warning Color Vairant</Text>
      <Text color="info">Info Color Vairant</Text>
      <Text color="blue">Custom Color (blue)</Text>
      <Text color="#a18b35">Custom Color (#a18b35)</Text>
      <View style={{ height: 20 }} />
      <Text lightness="extraLight">Extra Light</Text>
      <Text lightness="light">Light</Text>
      <Text lightness="medium">Medium</Text>
      <Text>Regular</Text>
      <View style={{ height: 20 }} />
      <Text isLink onPress={() => console.log("Text Press")}>
        Link Text
      </Text>
      <View style={{ height: 20 }} />
      <Text textAlign="left">Text Align Left</Text>
      <Text textAlign="center">Text Align Center</Text>
      <Text textAlign="right">Text Align Right</Text>
    </View>
  );
}

const styles = StyleSheet.create((theme) => ({
  container: {
    flex: 1,
    // alignItems: "center",
    backgroundColor: theme.colors.background,
  },
}));
