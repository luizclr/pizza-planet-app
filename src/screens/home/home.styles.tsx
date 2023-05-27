import styled from "styled-components/native";

export const FlatListWrapper = styled.View`
  margin-bottom: ${({ theme }) => theme.sizes.xxl};
`;

export const HorizontalFlatList = styled.FlatList`
  height: 300px;
`;

export const VerticalFlatList = styled.FlatList.attrs({
  contentContainerStyle: { paddingBottom: 140 },
})``;
