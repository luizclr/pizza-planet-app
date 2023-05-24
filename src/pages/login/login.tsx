import { FC } from "react";

import { Title } from "~/components/title/title";
import { LoginContainer } from "~/pages/login/login.styles";

export const Login: FC = () => {
  return (
    <LoginContainer>
      <Title text="Pizza Planet" />
    </LoginContainer>
  );
};
