import styled from "styled-components/native";

export const Container = styled.TouchableOpacity`
  flex-direction: row;
`;

export const Image = styled.Image`
  width: 100%;
  height: 100%;
`;

export const ImageWrapper = styled.View`
  width: ${({ theme }) => theme.sizes.xxxl};
  height: ${({ theme }) => theme.sizes.xxxl};
`;

export const TextWrapper = styled.View`
  flex: 1;
  padding-left: ${({ theme }) => theme.sizes.xxxs};
  justify-content: space-between;
`;

export const ProductName = styled.Text`
  font-weight: ${({ theme }) => theme.fontWeights.bold};
  font-size: ${({ theme }) => theme.fontSizes.xl};
  margin-bottom: ${({ theme }) => theme.sizes.nano};
`;

export const ProductPrice = styled.Text`
  font-weight: ${({ theme }) => theme.fontWeights.medium};
  font-size: ${({ theme }) => theme.fontSizes.m};
  color: ${({ theme }) => theme.colors.secondary.medium};
`;

export const AddToCardButton = styled.TouchableOpacity`
  position: absolute;
  right: 0;
  bottom: 0;
  border-bottom-right-radius: ${({ theme }) => theme.sizes.nano};
  border-top-left-radius: ${({ theme }) => theme.sizes.nano};
  background-color: ${({ theme }) => theme.colors.secondary.medium};
  color: ${({ theme }) => theme.colors.neutral.lightest};
  height: ${({ theme }) => theme.sizes.xs};
  width: ${({ theme }) => theme.sizes.xs};
  justify-content: center;
  align-items: center;
`;
