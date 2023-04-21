function Checkout() {
  return (
    <div className="container-fluid border">
      {/* HEADER GROUP */}
      <div className="row">
        <div data-testid="header-container" className="col-sm-12 col-md-12 col-lg-12">
          Header
        </div>
      </div>

      <div className="row">
        {/* ADDRESS DETAIL GROUP */}
        <div data-testid="address-detail-container" className="col-sm-12 col-md-12 col-lg-8">
          Address Details
        </div>

        {/* PAYMENT DETAIL GROUP */}
        <div data-testid="payment-detail-container" className="col-sm-12 col-md-12 col-lg-4">
          Payment Details
        </div>
      </div>

      {/* ORDER DETAIL GROUP */}
      <div className="row">
        <div data-testid="order-detail-container" className="col-sm-12 col-md-12 col-lg-12">
          Order Details
        </div>
      </div>

      {/* FOOTER GROUP */}
      <div className="row">
        <div data-testid="footer-container" className="col-sm-12 col-md-12 col-lg-12">
          Footer
        </div>
      </div>
    </div>
  );
}

export default Checkout;
