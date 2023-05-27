export enum ProductSize {
  ps = "personal",
  md = "medium",
  lg = "large",
  gt = "giant",
}

export enum Slices {
  ps = 4,
  md = 6,
  lg = 8,
  gt = 10,
}

export type Product = {
  id: string;
  name: string;
  description: string;
  imageUrl: string;
  price: number;
  size: ProductSize;
  slices: Slices;
};
