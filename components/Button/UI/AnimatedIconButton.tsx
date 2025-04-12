import { Icon, SfSymbolIconName } from "@roninoss/icons";
import { Pressable, ViewStyle } from "react-native";
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withSpring,
} from "react-native-reanimated";

interface AnimatedIconButtonProps
  extends React.ComponentPropsWithoutRef<typeof Pressable> {
  iconName: SfSymbolIconName;
  containerStyle?: ViewStyle;
  iconColor?: string;
  iconSize?: number;
  iconProps?: Omit<
    React.ComponentProps<typeof Icon>,
    "name" | "color" | "size" | "namingScheme"
  >;
  disabled?: boolean;
}

export default function AnimatedIconButton({
  onPress,
  iconName,
  iconColor,
  iconSize,
  iconProps,
  containerStyle,
  disabled,
  ...rest
}: AnimatedIconButtonProps) {
  // TODO: Add More Animations
  const scale = useSharedValue(1);

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [{ scale: scale.value }],
  }));

  const handlePressIn = () => {
    scale.value = withSpring(1.5);
  };

  const handlePressOut = () => {
    scale.value = withSpring(1);
  };

  return (
    <Animated.View style={[animatedStyle, containerStyle]}>
      <Pressable
        onPressIn={handlePressIn}
        onPressOut={handlePressOut}
        onPress={onPress}
        disabled={disabled}
        style={{
          opacity: disabled ? 0.6 : 1,
          justifyContent: "center",
          alignItems: "center",
          minHeight: 48,
          minWidth: 48,
        }}
        {...rest}
      >
        <Icon
          name={iconName}
          color={iconColor}
          size={iconSize || 32}
          namingScheme="sfSymbol"
          {...iconProps}
        />
      </Pressable>
    </Animated.View>
  );
}
