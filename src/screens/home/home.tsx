import { FC } from "react";

import { ProductCard } from "~/components/product-card/product-card";
import { Product, ProductSize, Slices } from "~/entities/product/product";
import { FlatListWrapper, HorizontalFlatList, VerticalFlatList } from "~/screens/home/home.styles";
import { BaseScreen, Title } from "~/style/shared.styles";
import { HomeHeader } from "~/components/home-header/home-header";

export const Home: FC = () => {
  const items: Product[] = [
    {
      id: "87asf87as8bf1",
      name: "Mushrooms",
      description: "Tomato Sauce, special mozzarella, mushrooms and olives.",
      imageUrl:
        "https://img.freepik.com/fotos-premium/deliciosa-pizza-italiana-classica-com-mozzarella_79762-2653.jpg",
      price: 20.5,
      size: ProductSize.lg,
      slices: Slices.lg,
    },
    {
      id: "87asf87as8bf2",
      name: "Mozzarella",
      description: "Tomato Sauce and special mozzarella.",
      imageUrl:
        "https://img.freepik.com/fotos-premium/deliciosa-pizza-italiana-classica-com-mozzarella_79762-2653.jpg",
      price: 20.5,
      size: ProductSize.lg,
      slices: Slices.lg,
    },
    {
      id: "87asf87as8bf3",
      name: "Bacon",
      description: "Tomato Sauce, special mozzarella and bacon.",
      imageUrl:
        "https://img.freepik.com/fotos-premium/deliciosa-pizza-italiana-classica-com-mozzarella_79762-2653.jpg",
      price: 20.5,
      size: ProductSize.lg,
      slices: Slices.lg,
    },
    {
      id: "87asf87as8bf4",
      name: "Ham",
      description: "Tomato Sauce, special mozzarella and ham.",
      imageUrl:
        "https://img.freepik.com/fotos-premium/deliciosa-pizza-italiana-classica-com-mozzarella_79762-2653.jpg",
      price: 20.5,
      size: ProductSize.lg,
      slices: Slices.lg,
    },
    {
      id: "87asf87as8bf5",
      name: "Fresh Garlic",
      description: "Tomato Sauce, special mozzarella and fresh garlic.",
      imageUrl:
        "https://img.freepik.com/fotos-premium/deliciosa-pizza-italiana-classica-com-mozzarella_79762-2653.jpg",
      price: 20.5,
      size: ProductSize.lg,
      slices: Slices.lg,
    },
    {
      id: "87asf87as8bf6",
      name: "Onions",
      description: "Tomato Sauce, special mozzarella and onions.",
      imageUrl:
        "https://img.freepik.com/fotos-premium/deliciosa-pizza-italiana-classica-com-mozzarella_79762-2653.jpg",
      price: 20.5,
      size: ProductSize.lg,
      slices: Slices.lg,
    },
    {
      id: "87asf87as8bf7",
      name: "Olives",
      description: "Tomato Sauce, special mozzarella and olives.",
      imageUrl:
        "https://img.freepik.com/fotos-premium/deliciosa-pizza-italiana-classica-com-mozzarella_79762-2653.jpg",
      price: 20.5,
      size: ProductSize.lg,
      slices: Slices.lg,
    },
    {
      id: "87asf87as8bf8",
      name: "Peppers",
      description: "Tomato Sauce, special mozzarella, peppers and olives.",
      imageUrl:
        "https://img.freepik.com/fotos-premium/deliciosa-pizza-italiana-classica-com-mozzarella_79762-2653.jpg",
      price: 20.5,
      size: ProductSize.lg,
      slices: Slices.lg,
    },
    {
      id: "87asf87as8bf9",
      name: "Pepperoni",
      description: "Tomato Sauce, special mozzarella and pepperoni.",
      imageUrl:
        "https://img.freepik.com/fotos-premium/deliciosa-pizza-italiana-classica-com-mozzarella_79762-2653.jpg",
      price: 20.5,
      size: ProductSize.lg,
      slices: Slices.lg,
    },
  ];

  const compare =
    (order: boolean) =>
    (a: Product, b: Product): number => {
      if (a.name < b.name) return order ? -1 : 1;
      if (a.name > b.name) return order ? 1 : -1;
      return 0;
    };

  return (
    <BaseScreen>
      <HomeHeader />
      <HorizontalFlatList
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={items}
        renderItem={({ item }) => <ProductCard product={item as Product} />}
      />
      <Title>Pizzas:</Title>
      <FlatListWrapper>
        <VerticalFlatList
          showsVerticalScrollIndicator={false}
          data={items.sort(compare(true))}
          renderItem={({ item }) => <ProductCard product={item as Product} />}
        />
      </FlatListWrapper>
    </BaseScreen>
  );
};
