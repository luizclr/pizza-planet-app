import { FC } from "react";

import {
  ButtonContainer,
  ButtonText,
  Input,
  LoginContainer,
  Logo,
} from "~/pages/login/login.styles";
import LogoImage from "~/assets/img/logo.png";

export const Login: FC = () => {
  const login = (): void => {};

  return (
    <LoginContainer>
      <Logo source={LogoImage} />
      <Input placeholder="E-mail" keyboardType="email-address" />
      <Input placeholder="Password" secureTextEntry={true} />
      <ButtonContainer onPress={login}>
        <ButtonText>LOGIN</ButtonText>
      </ButtonContainer>
    </LoginContainer>
  );
};
