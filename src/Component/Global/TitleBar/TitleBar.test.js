import { render, screen } from "@testing-library/react";
import TitleBar from "./TitleBar";

describe("Component render without error", () => {
  test("Render title bar component without error", () => {
    render(<TitleBar />);
  });
});

describe("Component render correctly", () => {
  describe("Test text content", () => {
    test("Text must match with developer input", () => {
      render(<TitleBar title={"Item Details"} />);

      const titleBar = screen.getByRole("heading");
      expect(titleBar).toHaveTextContent("Item Details");
    });
  });

  describe("Test text style", () => {
    test("Div style must match with design", () => {
      render(<TitleBar title={"Item Details"} />);

      const bar = screen.getByTestId("parent-container");
      expect(bar).toHaveClass("parent-container");
    });

    test("Text style must match with design", () => {
      render(<TitleBar title={"Item Details"} />);

      const titleBar = screen.getByRole("heading");
      expect(titleBar).toHaveClass("title");
    });
  });
});
