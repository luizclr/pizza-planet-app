import { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { DefaultScreen } from "~/navigation/root-navigation";

const OrdersStack = createStackNavigator();

const OrdersStackScreen = (): ReactElement => {
  return (
    <OrdersStack.Navigator>
      <OrdersStack.Screen name="Order" component={DefaultScreen} />
    </OrdersStack.Navigator>
  );
};

export default OrdersStackScreen;
