import { FC } from "react";
import { Text, View } from "react-native";
import FontAwesome5 from "@expo/vector-icons/FontAwesome5";

import { Card } from "~/style/shared.styles";
import { ProductCardType } from "~/components/product-card/types";
import {
  Container,
  ImageWrapper,
  Image,
  ProductName,
  ProductPrice,
  TextWrapper,
  AddToCardButton,
} from "~/components/product-card/product-card.styles";

export const ProductCard: FC<ProductCardType> = ({ product }) => {
  const { name, description, imageUrl, price } = product;

  return (
    <Card>
      <Container>
        <ImageWrapper>
          <Image source={{ uri: imageUrl }} />
        </ImageWrapper>
        <TextWrapper>
          <View>
            <ProductName>{name}</ProductName>
            <Text>{description}</Text>
          </View>
          <ProductPrice>${price.toFixed(2)}</ProductPrice>
        </TextWrapper>
      </Container>
      <AddToCardButton>
        <FontAwesome5 name="plus" size={16} color="#fff" />
      </AddToCardButton>
    </Card>
  );
};
