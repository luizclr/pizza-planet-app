import { ReactElement } from "react";
import { StackNavigationOptions, createStackNavigator } from "@react-navigation/stack";

import { Login } from "~/screens/login/login";

const navigatorOptions: StackNavigationOptions = {
  headerShown: false,
};

const PublicStack = createStackNavigator();

const PublicStackScreen = (): ReactElement => {
  return (
    <PublicStack.Navigator screenOptions={navigatorOptions}>
      <PublicStack.Screen name="Login" component={Login} />
    </PublicStack.Navigator>
  );
};

export default PublicStackScreen;
