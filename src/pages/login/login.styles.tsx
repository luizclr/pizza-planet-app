import { Platform } from "react-native";
import styled from "styled-components/native";

export const LoginContainer = styled.KeyboardAvoidingView.attrs({
  behavior: Platform.OS === "ios" ? "padding" : "height",
})`
  flex: 1;
  background-color: ${({ theme }) => theme.colors.secondary.medium};
  align-items: center;
  justify-content: center;
  padding: ${({ theme }) => theme.sizes.xxs};
`;

export const Logo = styled.Image`
  width: 200px;
  height: 97px;
  margin-bottom: ${({ theme }) => theme.sizes.s};
`;

export const Input = styled.TextInput`
  background-color: ${({ theme }) => theme.colors.neutral.lightest};
  width: 100%;
  height: ${({ theme }) => theme.sizes.m};
  margin-bottom: ${({ theme }) => theme.sizes.xs};
  border-radius: ${({ theme }) => theme.sizes.quark};
  padding: ${({ theme }) => theme.sizes.nano};
`;

export const ButtonContainer = styled.TouchableOpacity`
  width: 100%;
  height: ${({ theme }) => theme.sizes.m};
  border-radius: ${({ theme }) => theme.sizes.quark};
  background-color: ${({ theme }) => theme.colors.success.tinyDark};
  align-items: center;
  justify-content: center;
`;

export const ButtonText = styled.Text`
  color: ${({ theme }) => theme.colors.success.darker};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.m};
`;
