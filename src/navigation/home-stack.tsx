import { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { DefaultScreen } from "~/navigation/root-navigation";

type HomeStackParamList = {
  Home: undefined;
};

const HomeStack = createStackNavigator<HomeStackParamList>();

// const routes: Array<ComponentProps<typeof HomeStack.Screen>> = [
//   {
//     name: "Home",
//     component: DefaultScreen,
//   },
// ];

// const HomeStackScreen = (): ReactElement => {
//   return (
//     <HomeStack.Navigator initialRouteName="Home">
//       {routes.map((routeConfig) => (
//         <HomeStack.Screen key={routeConfig.name} {...routeConfig} />
//       ))}
//     </HomeStack.Navigator>
//   );
// };

const HomeStackScreen = (): ReactElement => {
  return (
    <HomeStack.Navigator initialRouteName="Home">
      <HomeStack.Screen name="Home" component={DefaultScreen} />
    </HomeStack.Navigator>
  );
};

export default HomeStackScreen;
