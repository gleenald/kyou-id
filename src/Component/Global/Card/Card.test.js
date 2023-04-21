import { render, screen, fireEvent } from "@testing-library/react";
import Card from "./Card";
import inazuma from "./../../../Utility/img/inazuma.jpg";

describe("Component render without error", () => {
  test("Render card component without error", () => {
    render(<Card />);
  });
});

describe("Component render correctly", () => {
  describe("Test image source", () => {
    test("Images src must match with developer input", () => {
      render(<Card img={inazuma} />);

      const image = screen.getByRole("img");
      expect(image.src).toContain(inazuma);
    });
  });

  describe("Test text content", () => {
    test("Item name text must match with developer input", () => {
      render(<Card name="[REVIVE] Taromaru Thoma Inazuma Plush - Genshin Impact" />);

      const name = screen.getByTestId("name");
      expect(name).toHaveTextContent("[REVIVE] Taromaru Thoma Inazuma Plush - Genshin Impact");
    });

    test("Item status text must match with developer input", () => {
      render(<Card status="Ready-Stock" />);

      const status = screen.getByTestId("status");
      expect(status).toHaveTextContent("Ready-Stock");
    });

    test("Item price text must match with developer input", () => {
      render(<Card price="500,000" />);

      const price = screen.getByTestId("price");
      expect(price).toHaveTextContent("IDR 500,000");
    });
  });

  describe("Test image style", () => {
    test("Images style is match with design", () => {
      render(<Card img={inazuma} />);

      const image = screen.getByRole("img");
      expect(image).toHaveClass("img");
    });
  });

  describe("Test text style", () => {
    test("Item name style is match with design", () => {
      render(<Card name="[REVIVE] Taromaru Thoma Inazuma Plush - Genshin Impact" />);

      const name = screen.getByTestId("name");
      expect(name).toHaveClass("name");
    });

    test("Item status style is match with design", () => {
      render(<Card status="Ready-Stock" />);

      const status = screen.getByTestId("status");
      expect(status).toHaveClass("status");
    });

    test("Item price style is match with design", () => {
      render(<Card price="500,000" />);

      const price = screen.getByTestId("price");
      expect(price).toHaveClass("price");
    });
  });
});

describe("Event run correctly", () => {
  test("Test on click card event", () => {
    const mockFunc = jest.fn();

    render(<Card onClick={mockFunc} />);

    const card = screen.getByTestId("card-parent");
    fireEvent.click(card);
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });
});
