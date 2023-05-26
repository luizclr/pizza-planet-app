import { BottomTabBarButtonProps } from "@react-navigation/bottom-tabs";
import { ReactElement } from "react";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import {
  DefaultButtonView,
  FloatButtonView,
  FloatTouchableOpacity,
  TouchableOpacity,
} from "~/navigation/buttons/buttons.styles";
import { TabBarButtonProps } from "~/navigation/buttons/types";

const FloatButton = ({ children, onPress }: BottomTabBarButtonProps): ReactElement => (
  <FloatTouchableOpacity onPress={onPress}>
    <FloatButtonView>{children}</FloatButtonView>
  </FloatTouchableOpacity>
);

const DefaultButton = ({ children, onPress }: BottomTabBarButtonProps): ReactElement => (
  <TouchableOpacity onPress={onPress}>
    <DefaultButtonView>{children}</DefaultButtonView>
  </TouchableOpacity>
);

export const getTabBarButton = ({ name, ...rest }: TabBarButtonProps): ReactElement =>
  name === "CART" ? <FloatButton {...rest} /> : <DefaultButton {...rest} />;

export const getTabBarIcon = (name: string, iconName: string, focused: boolean): ReactElement => {
  const getColor = (): string => {
    if (name === "CART") return "white";
    if (focused) return "orange";
    return "gray";
  };

  return <FontAwesome5 name={iconName} size={24} color={getColor()} />;
};
