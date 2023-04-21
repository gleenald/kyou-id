import { render, screen } from "@testing-library/react";
import Login from "./Login";

describe("Component Render Without Error", () => {
  test("Render login page without error", () => {
    render(<Login />);
  });
});

describe("Component Render Correctly", () => {
  describe("Test Responsive Grid", () => {
    test("Login grid is already responsive", () => {
      render(<Login />);

      const loginContainer = screen.getByTestId("login-container");
      expect(loginContainer).toHaveClass("col-sm-12 col-md-12 col-lg-7");
    });

    test("Register grid is already responsive", () => {
      render(<Login />);

      const registerContainer = screen.getByTestId("register-container");
      expect(registerContainer).toHaveClass("col-sm-12 col-md-12 col-lg-5");
    });
  });
});
