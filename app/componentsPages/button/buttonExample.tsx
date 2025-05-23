import { StyleSheet, Text, View, Button as RNButton } from "react-native";
import React from "react";
import Button from "@/components/Button/UI/Button";
import {
  ContainerView,
  IconButton,
  MainView,
  AnimatedIconButton,
} from "@/components";

export default function ButtonExample() {
  return (
    <MainView gap={16}>
      <RNButton
        title="Native Button"
        onPress={() => {
          alert("Button Pressed");
        }}
      />
      <Button
        title="Disabled Button"
        onPress={() => {
          alert("Button Pressed");
        }}
        disabled
      />
      <Button
        title="Disabled Button"
        onPress={() => {
          alert("Button Pressed");
        }}
        loading
      />
      <Button
        title="Press Me"
        onPress={() => {
          alert("Second Button Pressed");
        }}
      />
      <Button
        title="Solid Button"
        onPress={() => {
          alert("Second Button Pressed");
        }}
        mode="solid"
      />
      <Button
        title="Text Button"
        onPress={() => {
          alert("Second Button Pressed");
        }}
        mode="text"
      />
      <ContainerView direction="row">
        <View style={{ flex: 1 }}>
          <Button
            title="Icon Button"
            onPress={() => {
              alert("Second Button Pressed");
            }}
            iconName="home-circle"
            iconColor="red"
            titleColor="red"
          />
        </View>
        <View style={{ flex: 1 }}>
          <Button
            title="Icon Button"
            onPress={() => {
              alert("Second Button Pressed");
            }}
            iconName="home"
            iconPosition="right"
          />
        </View>
      </ContainerView>
      <ContainerView direction="row">
        <IconButton iconName="folder.fill" onPress={() => alert("pressed")} />
        <IconButton
          iconName="trash"
          iconColor="orange"
          iconProps={{
            ios: {
              size: 32,
              symbolEffect: {
                type: "pulse",
                animateBy: "wholeSymbol",
                isActive: true,
                repeat: true,
              },
            },
          }}
          onPress={() => alert("pressed")}
        />
      </ContainerView>
      <ContainerView direction="row">
        <AnimatedIconButton
          iconName="calendar"
          onPress={() => alert("pressed")}
        />
        <AnimatedIconButton
          iconName="basket"
          onPress={() => alert("pressed")}
          iconColor="orange"
        />
      </ContainerView>
    </MainView>
  );
}

const styles = StyleSheet.create({});
