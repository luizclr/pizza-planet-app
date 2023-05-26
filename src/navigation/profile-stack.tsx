import { ReactElement } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { DefaultScreen } from "~/navigation/root-navigation";

export const ProfileStack = createStackNavigator();

const ProfileStackScreen = (): ReactElement => {
  return (
    <ProfileStack.Navigator>
      <ProfileStack.Screen name="Profile" component={DefaultScreen} />
    </ProfileStack.Navigator>
  );
};

export default ProfileStackScreen;
