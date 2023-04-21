import { render, screen } from "@testing-library/react";
import Checkout from "./Checkout";

describe("Component render without error", () => {
  test("Render checkout page without error", () => {
    render(<Checkout />);
  });
});

describe("Component render correctly", () => {
  describe("Test responsive grid", () => {
    test("Header grid is already responsive", () => {
      render(<Checkout />);

      const headerContainer = screen.getByTestId("header-container");
      expect(headerContainer).toHaveClass("col-sm-12 col-md-12 col-lg-12");
    });

    test("Address Details grid is already responsive", () => {
      render(<Checkout />);

      const addressDetailContainer = screen.getByTestId("address-detail-container");
      expect(addressDetailContainer).toHaveClass("col-sm-12 col-md-12 col-lg-8");
    });

    test("Payment Details grid is already responsive", () => {
      render(<Checkout />);

      const paymentDetailContainer = screen.getByTestId("payment-detail-container");
      expect(paymentDetailContainer).toHaveClass("col-sm-12 col-md-12 col-lg-4");
    });

    test("Order Details grid is already responsive", () => {
      render(<Checkout />);

      const orderDetailContainer = screen.getByTestId("order-detail-container");
      expect(orderDetailContainer).toHaveClass("col-sm-12 col-md-12 col-lg-12");
    });

    test("Footer grid is already responsive", () => {
      render(<Checkout />);

      const footerContainer = screen.getByTestId("footer-container");
      expect(footerContainer).toHaveClass("col-sm-12 col-md-12 col-lg-12");
    });
  });
});
