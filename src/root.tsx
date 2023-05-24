import { FC } from "react";
import { StyledGuideProvider } from "react-styled-guide";

import initialStyleGuide from "~/style/style-guide";
import { Login } from "~/pages/login/login";

export const Root: FC = () => (
  <StyledGuideProvider value={initialStyleGuide}>
    <Login />
  </StyledGuideProvider>
);
