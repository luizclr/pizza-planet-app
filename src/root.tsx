import { FC } from "react";
import { ThemeProvider } from "styled-components/native";

import { Login } from "~/pages/login/login";
import themeInstance from "~/style/style-guide";

export const Root: FC = () => (
  <ThemeProvider theme={themeInstance}>
    <Login />
  </ThemeProvider>
);
