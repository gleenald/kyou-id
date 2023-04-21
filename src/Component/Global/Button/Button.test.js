import { render, screen, fireEvent } from "@testing-library/react";
import Button from "./Button";

describe("Component render without error", () => {
  test("Render button component without error", () => {
    render(<Button />);
  });
});

describe("Component render correctly", () => {
  describe("Test button color", () => {
    test("Button color must main", () => {
      render(<Button variant="bton-main" title="empty title" />);

      const button = screen.getByRole("button");
      expect(button).toHaveClass("bton-main");
    });

    test("Button color must success", () => {
      render(<Button variant="bton-success" title="empty title" />);

      const button = screen.getByRole("button");
      expect(button).toHaveClass("bton-success");
    });

    test("Button color must warning", () => {
      render(<Button variant="bton-warning" title="empty title" />);

      const button = screen.getByRole("button");
      expect(button).toHaveClass("bton-warning");
    });

    test("Button color must danger", () => {
      render(<Button variant="bton-danger" title="empty title" />);

      const button = screen.getByRole("button");
      expect(button).toHaveClass("bton-danger");
    });
  });

  describe("Test button shape", () => {
    test("Button shape is no outline", () => {
      render(<Button variant="bton" title="empty title" />);

      const button = screen.getByRole("button");
      expect(button).toHaveClass("bton");
    });

    test("Button shape is outline", () => {
      render(<Button variant="bton-outline" title="empty title" />);

      const button = screen.getByRole("button");
      expect(button).toHaveClass("bton-outline");
    });
  });

  describe("Test button size", () => {
    test("Button size is large", () => {
      render(<Button variant="bton-lg" title="empty title" />);

      const button = screen.getByRole("button");
      expect(button).toHaveClass("bton-lg");
    });

    test("Button size is medium", () => {
      render(<Button variant="bton-md" title="empty title" />);

      const button = screen.getByRole("button");
      expect(button).toHaveClass("bton-md");
    });

    test("Button size is small", () => {
      render(<Button variant="bton-sm" title="empty title" />);

      const button = screen.getByRole("button");
      expect(button).toHaveClass("bton-sm");
    });
  });

  describe("Test several advance combination button", () => {
    test("Button must non outline, color's main & large", () => {
      render(<Button variant="bton-main-lg" title="empty title" />);

      const button = screen.getByRole("button");
      expect(button).toHaveClass("bton-main-lg");
    });

    test("Button must non outline, color's success & medium", () => {
      render(<Button variant="bton-success-md" title="empty title" />);

      const button = screen.getByRole("button");
      expect(button).toHaveClass("bton-success-md");
    });

    test("Button must outline, color's main & small", () => {
      render(<Button variant="bton-outl-main-sm" title="empty title" />);

      const button = screen.getByRole("button");
      expect(button).toHaveClass("bton-outl-main-sm");
    });

    test("Button must outline, color's danger & small", () => {
      render(<Button variant="bton-outl-danger-sm" title="empty title" />);

      const button = screen.getByRole("button");
      expect(button).toHaveClass("bton-outl-danger-sm");
    });
  });

  describe("Test button title", () => {
    test("Button title is 'login'", () => {
      render(<Button variant="bton-main-md" title="Login" />);

      const button = screen.getByRole("button");
      expect(button).toHaveTextContent("Login");
    });
  });
});

describe("Event run correctly", () => {
  test("Test on click button event", () => {
    const mockFunc = jest.fn();

    render(<Button variant="bton-main-md" title="Login" onClick={mockFunc} />);

    const button = screen.getByRole("button");
    fireEvent.click(button);
    expect(mockFunc).toHaveBeenCalledTimes(1);
  });
});
