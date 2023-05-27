import styled from "styled-components/native";

export const Container = styled.View`
  background-color: ${({ theme }) => theme.colors.neutral.lightest};
  margin-top: 50px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const NotificationContainer = styled.View`
  height: 40px;
  width: 40px;
  border-radius: 20px;
  background-color: #fff;
  position: absolute;
  right: 0;
  justify-content: center;
  align-items: center;
`;

export const NotificationBadge = styled.Text`
  height: 12px;
  width: 12px;
  font-size: 8px;
  border-radius: 6px;
  background-color: #ffa500;
  color: #fff;
  position: absolute;
  right: 5px;
  top: 5px;
  text-align: center;
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const LocationContainer = styled.TouchableOpacity`
  background-color: #fff;
  elevation: 1;
  border-radius: 50px;
  padding: 2px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 200px;
`;

export const LocationLabel = styled.Text`
  text-align: center;
  color: ${({ theme }) => theme.colors.neutral.light};
  font-size: ${({ theme }) => theme.fontSizes.xxs};
`;

export const LocationAddressContainer = styled.View`
  justify-content: center;
  flex-direction: row;
`;

export const LocationAddressText = styled.Text`
  margin-left: ${({ theme }) => theme.sizes.quark};
  font-weight: ${({ theme }) => theme.fontWeights.bold};
`;

export const ChangeLocationIconContainer = styled.View`
  justify-content: center;
  align-items: center;
  margin-left: ${({ theme }) => theme.sizes.nano};
`;
