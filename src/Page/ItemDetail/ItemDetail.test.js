import { render, screen } from "@testing-library/react";
import ItemDetail from "./ItemDetail";

describe("Component render without error", () => {
  test("Render item detail page without error", () => {
    render(<ItemDetail />);
  });
});

describe("Component render correctly", () => {
  describe("Test responsive grid", () => {
    test("Header grid is already responsive", () => {
      render(<ItemDetail />);

      const headerContainer = screen.getByTestId("header-container");
      expect(headerContainer).toHaveClass("col-sm-12 col-md-12 col-lg-12");
    });

    test("Item detail grid is already responsive", () => {
      render(<ItemDetail />);

      const itemDetailContainer = screen.getByTestId("item-detail-container");
      expect(itemDetailContainer).toHaveClass("col-sm-12 col-md-12 col-lg-12");
    });

    test("Popular item grid is already responsive", () => {
      render(<ItemDetail />);

      const popularItemContainer = screen.getByTestId("popular-item-container");
      expect(popularItemContainer).toHaveClass("col-sm-12 col-md-12 col-lg-12");
    });

    test("Discount item grid is already responsive", () => {
      render(<ItemDetail />);

      const discountItemContainer = screen.getByTestId("discount-item-container");
      expect(discountItemContainer).toHaveClass("col-sm-12 col-md-12 col-lg-12");
    });

    test("Footer grid is already responsive", () => {
      render(<ItemDetail />);

      const footerContainer = screen.getByTestId("footer-container");
      expect(footerContainer).toHaveClass("col-sm-12 col-md-12 col-lg-12");
    });
  });
});
