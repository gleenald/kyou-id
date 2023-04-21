import { render, screen } from "@testing-library/react";
import Register from "./Register";

describe("Component Render Without Error", () => {
  test("Render register page without error", () => {
    render(<Register />);
  });
});

describe("Component render correctly", () => {
  describe("Test responsive grid", () => {
    test("Header grid is already responsive", () => {
      render(<Register />);

      const titleContainer = screen.getByTestId("title-container");
      expect(titleContainer).toHaveClass("col-sm-12 col-md-12 col-lg-12");
    });

    test("Register form is already responsive", () => {
      render(<Register />);

      const registerFormContainer = screen.getByTestId("register-form-container");
      expect(registerFormContainer).toHaveClass("col-sm-12 col-md-12 col-lg-12");
    });
  });
});
