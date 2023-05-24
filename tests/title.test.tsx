import { render, screen } from "@testing-library/react-native";

import { Title } from "~/components/title/title";

describe("Hello", () => {
  it("renders the correct message", () => {
    render(<Title text="hello" />);
    expect(screen.getByText("hello")).toBeVisible();
  });
});
