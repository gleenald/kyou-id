import { render, screen } from "@testing-library/react";
import Home from "./Home";

describe("Component render without error", () => {
  test("Render home page without error", () => {
    render(<Home />);
  });
});

describe("Component render correctly", () => {
  describe("Test responsive grid", () => {
    test("Header grid is already responsive", () => {
      render(<Home />);

      const headerContainer = screen.getByTestId("header-container");
      expect(headerContainer).toHaveClass("col-sm-12 col-md-12 col-lg-12");
    });

    test("Carousel grid is already responsive", () => {
      render(<Home />);

      const carouselContainer = screen.getByTestId("carousel-container");
      expect(carouselContainer).toHaveClass("col-sm-12 col-md-12 col-lg-12");
    });

    test("New item grid is already responsive", () => {
      render(<Home />);

      const newItemContainer = screen.getByTestId("new-item-container");
      expect(newItemContainer).toHaveClass("col-sm-12 col-md-12 col-lg-12");
    });

    test("Popular item grid is already responsive", () => {
      render(<Home />);

      const popularItemContainer = screen.getByTestId("popular-item-container");
      expect(popularItemContainer).toHaveClass("col-sm-12 col-md-12 col-lg-12");
    });

    test("Discount item grid is already responsive", () => {
      render(<Home />);

      const discountItemContainer = screen.getByTestId("discount-item-container");
      expect(discountItemContainer).toHaveClass("col-sm-12 col-md-12 col-lg-12");
    });

    test("Footer grid is already responsive", () => {
      render(<Home />);

      const footerContainer = screen.getByTestId("footer-container");
      expect(footerContainer).toHaveClass("col-sm-12 col-md-12 col-lg-12");
    });
  });
});
