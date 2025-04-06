import { StyleSheet } from "react-native";
import React from "react";
import MainView from "@/components/View/UI/MainView";
import Text from "@/components/Text/UI/Text";
import { ContainerView } from "@/components";

export default function ViewExample() {
  return (
    <MainView gap={16}>
      <ContainerView>
        <Text weight="bold">ContainerView</Text>
        <Text weight="bold">This is it</Text>
        <Text weight="bold">This </Text>
      </ContainerView>
      <ContainerView direction="row" gap={16}>
        <Text weight="bold">ContainerView Row</Text>
        <Text weight="bold">This is it</Text>
        <Text weight="bold">This </Text>
      </ContainerView>
      <ContainerView
        gap={16}
        backgroundColor="lightblue"
        padding={16}
        margin={16}
      >
        <Text weight="bold">ContainerView with extra props</Text>
        <Text weight="bold">This is it</Text>
        <Text weight="bold">This </Text>
      </ContainerView>
    </MainView>
  );
}

const styles = StyleSheet.create({});
