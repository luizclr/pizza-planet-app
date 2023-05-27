import { ReactElement } from "react";
import { StyleSheet, Text, View } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { getTabBarButton, getTabBarIcon } from "~/navigation/buttons/buttons";
import ProfileStackScreen from "~/navigation/profile-stack";
import HomeStackScreen from "~/navigation/home-stack";
import OrdersStackScreen from "~/navigation/orders-stack";
import CartStackScreen from "~/navigation/cart-stack";
import FavoritesStackScreen from "~/navigation/favorites-stack";

export const DefaultScreen = (): ReactElement => {
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: "#efefef",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text style={{ fontSize: 20 }}>Empty page</Text>
    </View>
  );
};

const tabData = [
  {
    name: "HOME",
    iconName: "home",
    component: HomeStackScreen,
  },
  {
    name: "ORDERS",
    iconName: "ticket-alt",
    component: OrdersStackScreen,
  },
  {
    name: "CART",
    iconName: "shopping-cart",
    component: CartStackScreen,
  },
  {
    name: "FAVORITES",
    iconName: "heart",
    component: FavoritesStackScreen,
  },
  {
    name: "PROFILE",
    iconName: "user-alt",
    component: ProfileStackScreen,
  },
];

const Tab = createBottomTabNavigator();

const RootNavigation = (): ReactElement => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabNavigator,
      }}
    >
      {tabData.map((tabItem) => (
        <Tab.Screen
          key={tabItem.name}
          name={tabItem.name}
          component={tabItem.component}
          options={{
            tabBarShowLabel: false,
            tabBarIcon: ({ focused }) => getTabBarIcon(tabItem.name, tabItem.iconName, focused),
            tabBarButton: (props) => getTabBarButton({ name: tabItem.name, ...props }),
          }}
        />
      ))}
    </Tab.Navigator>
  );
};

const styles = StyleSheet.create({
  tabNavigator: {
    position: "absolute",
    bottom: 8,
    left: 8,
    right: 8,
    elevation: 2,
    borderRadius: 10,
    height: 50,
  },
});

export default RootNavigation;
