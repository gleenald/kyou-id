function Cart() {
  return (
    <div className="container-fluid border">
      {/* HEADER GROUP */}
      <div className="row">
        <div data-testid="header-container" className="col-sm-12 col-md-12 col-lg-12">
          Header
        </div>
      </div>

      <div className="row">
        {/* ORDER DETAIL GROUP */}
        <div data-testid="order-detail-container" className="col-sm-12 col-md-12 col-lg-8">
          Order Details
        </div>

        {/* TOTAL PRICE GROUP */}
        <div data-testid="total-price-container" className="col-sm-12 col-md-12 col-lg-4">
          Total Price
        </div>
      </div>

      {/* POPULAR ITEM GROUP */}
      <div className="row">
        <div data-testid="popular-item-container" className="col-sm-12 col-md-12 col-lg-12">
          Popular Item
        </div>
      </div>

      {/* DISCOUNT ITEM GROUP */}
      <div className="row">
        <div data-testid="discount-item-container" className="col-sm-12 col-md-12 col-lg-12">
          Discount Item
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

export default Cart;
