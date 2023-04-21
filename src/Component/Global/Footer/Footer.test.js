import { render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Component render without error", () => {
  test("Render footer component without error", () => {
    render(<Footer />);
  });
});

describe("Component render correctly", () => {
  describe("Test text content", () => {
    test("text content must match with design", () => {
      render(<Footer />);

      const text = screen.getByRole("heading");
      expect(text).toHaveTextContent("Thankyou for visit Kyou ID");
    });
  });

  describe("Test footer style", () => {
    test("Footer style must match with design", () => {
      render(<Footer />);

      const footer = screen.getByTestId("footer");
      expect(footer).toHaveClass("footer");
    });
  });

  describe("Test text style", () => {
    test("Text style must match with design", () => {
      render(<Footer />);

      const text = screen.getByRole("heading");
      expect(text).toHaveClass("title");
    });
  });
});
