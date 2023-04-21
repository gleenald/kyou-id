import { render, screen } from "@testing-library/react";
import Cart from "./Cart";

describe("Component render without error", () => {
  test("Render cart page without error", () => {
    render(<Cart />);
  });
});

describe("Component render correctly", () => {
  describe("Test responsive grid", () => {
    test("Header grid is already responsive", () => {
      render(<Cart />);

      const headerContainer = screen.getByTestId("header-container");
      expect(headerContainer).toHaveClass("col-sm-12 col-md-12 col-lg-12");
    });

    test("Order Detail grid is already responsive", () => {
      render(<Cart />);

      const orderDetailContainer = screen.getByTestId("order-detail-container");
      expect(orderDetailContainer).toHaveClass("col-sm-12 col-md-12 col-lg-8");
    });

    test("Total price grid is already responsive", () => {
      render(<Cart />);

      const totalPriceContainer = screen.getByTestId("total-price-container");
      expect(totalPriceContainer).toHaveClass("col-sm-12 col-md-12 col-lg-4");
    });

    test("Popular item grid is already responsive", () => {
      render(<Cart />);

      const popularItemContainer = screen.getByTestId("popular-item-container");
      expect(popularItemContainer).toHaveClass("col-sm-12 col-md-12 col-lg-12");
    });

    test("Discount item grid is already responsive", () => {
      render(<Cart />);

      const discountItemContainer = screen.getByTestId("discount-item-container");
      expect(discountItemContainer).toHaveClass("col-sm-12 col-md-12 col-lg-12");
    });

    test("Footer grid is already responsive", () => {
      render(<Cart />);

      const footerContainer = screen.getByTestId("footer-container");
      expect(footerContainer).toHaveClass("col-sm-12 col-md-12 col-lg-12");
    });
  });
});
