import "styled-components/native";
import { Theme } from "~/style/types";

declare module "styled-components/native" {
  export interface DefaultTheme extends Theme {}
}
