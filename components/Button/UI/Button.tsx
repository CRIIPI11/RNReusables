import { ActivityIndicator, Pressable, View } from "react-native";
import React from "react";
import Text from "../../Text/UI/Text";
import { StyleSheet, withUnistyles } from "react-native-unistyles";
import { Icon, MaterialIconName } from "@roninoss/icons";

interface ButtonProps extends React.ComponentProps<typeof Pressable> {
  title: string;
  titleColor?: string;
  titleProps?: React.ComponentProps<typeof Text>;
  titleStyle?: React.ComponentProps<typeof Text>["style"];
  backgroundColor?: string;
  onPress?: () => void;
  disabled?: boolean;
  loading?: boolean;
  mode?: "solid" | "outlined" | "text";
  iconName?: MaterialIconName;
  iconColor?: string;
  iconPosition?: "left" | "right";
}

export default function Button({
  title,
  titleColor,
  titleProps,
  titleStyle,
  backgroundColor,
  onPress,
  disabled,
  loading,
  mode = "outlined",
  iconName,
  iconColor,
  iconPosition = "left",
  ...rest
}: ButtonProps) {
  styles.useVariants({
    mode: mode,
  });

  // ✨ Some magic happens under the hood
  const UniIcon = withUnistyles(Icon, (theme, rt) => ({
    color: iconColor || theme.colors.text,
  }));

  return (
    <Pressable
      onPress={onPress}
      style={({ pressed }) => [
        styles.button,
        {
          opacity: pressed ? 0.7 : disabled ? 0.5 : 1,
          backgroundColor: backgroundColor || styles.button.backgroundColor,
          flexDirection: iconName ? "row" : "column",
          gap: iconName ? 8 : 0,
        },
        iconName ? { paddingLeft: 0 } : {},
      ]}
      disabled={disabled || loading}
      {...rest}
    >
      <View
        style={{
          paddingLeft: 16,
        }}
      >
        {iconName && iconPosition === "left" && (
          <UniIcon name={iconName} size={20} />
        )}
      </View>
      <Text
        weight="medium"
        style={[
          styles.buttonText,
          titleStyle,
          titleColor ? { color: titleColor } : {},
        ]}
        {...titleProps}
      >
        {loading ? <ActivityIndicator /> : title}
      </Text>
      {iconName && iconPosition === "right" && (
        <UniIcon name={iconName} size={20} />
      )}
    </Pressable>
  );
}

const styles = StyleSheet.create((theme) => ({
  button: {
    minWidth: 48,
    minHeight: 48,
    variants: {
      mode: {
        solid: {
          backgroundColor: theme.colors.primary,
          borderRadius: 8,
          paddingHorizontal: 24,
          paddingVertical: 14,
          margin: 4,
          alignItems: "center",
          justifyContent: "center",
        },
        outlined: {
          backgroundColor: "transparent",
          borderRadius: 8,
          paddingHorizontal: 24,
          paddingVertical: 14,
          margin: 4,
          alignItems: "center",
          justifyContent: "center",
          borderWidth: 1,
          borderColor: theme.colors.border,
        },
        text: {
          backgroundColor: "transparent",
          padding: 10,
          justifyContent: "flex-end",
          alignItems: "center",
        },
      },
    },
  },
  buttonText: {
    variants: {
      mode: {
        solid: {
          color: "#fafafa",
        },
        outlined: {
          // color: theme.colors.text,
        },
        text: {
          // color: theme.colors.text,
        },
      },
    },
  },
}));
