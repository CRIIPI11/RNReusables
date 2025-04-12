import { Pressable, StyleSheet } from "react-native";
import React from "react";
import { Icon, SfSymbolIconName } from "@roninoss/icons";

interface IconButtonProps
  extends React.ComponentPropsWithoutRef<typeof Pressable> {
  iconName: SfSymbolIconName;
  iconColor?: string;
  iconSize?: number;
  iconProps?: Omit<
    React.ComponentProps<typeof Icon>,
    "name" | "color" | "size" | "namingScheme"
  >;
}

export default function IconButton({
  iconName,
  iconColor,
  iconSize,
  iconProps,
  onPress,
  ...rest
}: IconButtonProps) {
  return (
    <Pressable
      onPress={onPress}
      {...rest}
      style={{
        justifyContent: "center",
        alignItems: "center",
        alignSelf: "flex-start",
        minHeight: 48,
        minWidth: 48,
      }}
    >
      <Icon
        name={iconName}
        color={iconColor}
        size={iconSize || 32}
        namingScheme="sfSymbol"
        {...iconProps}
      />
    </Pressable>
  );
}

const styles = StyleSheet.create({});
