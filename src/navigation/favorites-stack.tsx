import { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { DefaultScreen } from "~/navigation/root-navigation";

const FavoritesStack = createStackNavigator();

const FavoritesStackScreen = (): ReactElement => {
  return (
    <FavoritesStack.Navigator>
      <FavoritesStack.Screen name="Favorites" component={DefaultScreen} />
    </FavoritesStack.Navigator>
  );
};

export default FavoritesStackScreen;
