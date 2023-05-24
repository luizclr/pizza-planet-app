import { render, screen } from "@testing-library/react-native";
import { ThemeProvider } from "styled-components/native";

import { Title } from "~/components/title/title";
import themeInstance from "~/style/style-guide";

describe("<Title />", () => {
  it("renders with correct text", () => {
    render(
      <ThemeProvider theme={themeInstance}>
        <Title text="hello" />
      </ThemeProvider>
    );

    expect(screen.getByText("hello")).toBeVisible();
  });
});
