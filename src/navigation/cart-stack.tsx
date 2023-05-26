import { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { DefaultScreen } from "~/navigation/root-navigation";

const CartStack = createStackNavigator();

const CartStackScreen = (): ReactElement => {
  return (
    <CartStack.Navigator initialRouteName="Cart">
      <CartStack.Screen name="Cart" component={DefaultScreen} />
    </CartStack.Navigator>
  );
};

export default CartStackScreen;
