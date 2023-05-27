import styled from "styled-components/native";

export const BaseScreen = styled.View`
  flex: 1;
  padding: 0 ${({ theme }) => theme.sizes.xxxs};
  padding-right: 20px;
  padding-bottom: 0;
  background-color: ${({ theme }) => theme.colors.neutral.lightest};
`;

export const Card = styled.View`
  border-radius: ${({ theme }) => theme.sizes.nano};
  elevation: 1;
  background-color: #fff;
  margin-bottom: ${({ theme }) => theme.sizes.xxxs};
  padding: ${({ theme }) => theme.sizes.xxxs};
`;

export const Title = styled.Text`
  font-size: ${({ theme }) => theme.fontSizes.xl};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  margin: ${({ theme }) => theme.sizes.nano} 0;
  color: ${({ theme }) => theme.colors.neutral.dark};
`;
