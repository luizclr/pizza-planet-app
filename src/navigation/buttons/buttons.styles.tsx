import styled from "styled-components/native";

export const TouchableOpacity = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  flex: 1;
`;

export const FloatTouchableOpacity = styled(TouchableOpacity)`
  top: -25px;
`;

export const FloatButtonView = styled.View`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: ${({ theme }) => theme.colors.secondary.medium};
  elevation: 3;
`;

export const DefaultButtonView = styled.View`
  width: 50px;
  height: 50px;
`;
