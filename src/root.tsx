import { FC } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { ThemeProvider } from "styled-components/native";

import themeInstance from "~/style/style-guide";
import PublicStackScreen from "~/navigation/public-stack";
import RootNavigation from "~/navigation/root-navigation";

export const Root: FC = () => {
  const isLogged = true;

  return (
    <ThemeProvider theme={themeInstance}>
      <NavigationContainer>
        {isLogged ? <RootNavigation /> : <PublicStackScreen />}
      </NavigationContainer>
    </ThemeProvider>
  );
};
