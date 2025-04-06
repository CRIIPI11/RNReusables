import { StyleSheet } from "react-native";
import React from "react";
import MainView from "@/components/View/UI/MainView";
import Text from "@/components/Text/UI/Text";

export default function ViewExample() {
  return (
    <MainView>
      <Text>Hello World!</Text>
    </MainView>
  );
}

const styles = StyleSheet.create({});
