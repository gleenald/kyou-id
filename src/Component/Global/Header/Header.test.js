import { render, screen, fireEvent } from "@testing-library/react";
import Header from "./Header";
import cart_icon from "./../../../Utility/img/cart.png";
import user_icon from "./../../../Utility/img/user.png";
import logo_img from "./../../../Utility/img/kyou.id_logo.png";

describe("Component render without error", () => {
  test("Render header component without error", () => {
    render(<Header />);
  });
});

describe("Component render correctly", () => {
  describe("Test image source", () => {
    test("logo image src must match", () => {
      render(<Header />);

      const logo = screen.getByTestId("logo");
      expect(logo.src).toContain(logo_img);
    });

    test("cart image src must match", () => {
      render(<Header />);

      const cart = screen.getByTestId("cart");
      expect(cart.src).toContain(cart_icon);
    });

    test("user image src must match", () => {
      render(<Header />);

      const user = screen.getByTestId("user");
      expect(user.src).toContain(user_icon);
    });
  });

  describe("Test text content", () => {
    test("text must match with developer input", () => {
      render(<Header userText={"Hi, Glee"} />);

      const userText = screen.getByTestId("user-text");
      expect(userText).toHaveTextContent("Hi, Glee");
    });
  });

  describe("Test image style", () => {
    test("logo image style must match with design", () => {
      render(<Header />);

      const logo = screen.getByTestId("logo");
      expect(logo).toHaveClass("logo");
    });

    test("cart image style must match with design", () => {
      render(<Header />);

      const cart = screen.getByTestId("cart");
      expect(cart).toHaveClass("cart");
    });

    test("user image style must match with design", () => {
      render(<Header />);

      const user = screen.getByTestId("user");
      expect(user).toHaveClass("user-img");
    });
  });

  describe("Test text style", () => {
    test("user text style must match with design", () => {
      render(<Header />);

      const userText = screen.getByTestId("user-text");
      expect(userText).toHaveClass("user-text");
    });
  });

  describe("Test search input", () => {
    test("Search input style must match with design", () => {
      render(<Header />);

      const input = screen.getByTestId("search-input");
      expect(input).toHaveClass("form-control");
    });

    test("Search input placeholder must match", () => {
      render(<Header placeholder="Mau khilaf apa hari ini?" />);

      const input = screen.getByTestId("search-input");
      expect(input).toHaveAttribute("placeholder", "Mau khilaf apa hari ini?");
    });
  });
});

describe("Event run correctly", () => {
  test("Test cart icon onClick event", () => {
    const mockFunc = jest.fn();

    render(<Header cartIconOnClick={mockFunc} />);

    const cart = screen.getByTestId("cart");
    fireEvent.click(cart);
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });

  test("Test user icon onClick event", () => {
    const mockFunc = jest.fn();

    render(<Header userIconOnClick={mockFunc} />);

    const user = screen.getByTestId("user");
    fireEvent.click(user);
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });

  test("Test input onChange event", () => {
    const mockFunc = jest.fn();

    render(<Header placeholder={"Mau Khilaf Apa Hari Ini?"} onKeyDown={mockFunc} />);
    const input = screen.getByPlaceholderText("Mau Khilaf Apa Hari Ini?");
    fireEvent.keyDown(input, { key: "Enter", code: "Enter", charCode: 13 });
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });
});
