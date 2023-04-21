import "./css/Card.css";

function Card({ img, name, status, price, onClick }) {
  return (
    <div data-testid="card-parent" className="card-parent" onClick={onClick}>
      {/* ITEM IMAGE  */}
      <div>
        <img className="img" src={img} alt="item image" />
      </div>

      {/* ITEM STATUS */}
      {(() => {
        if (status == "Pre-Order") {
          return (
            <div className="status-box pre-order">
              <p className="status" data-testid="status">
                {status}
              </p>
            </div>
          );
        } else if (status == "Late-Pre-Order") {
          return (
            <div className="status-box late-pre-order">
              <p className="status" data-testid="status">
                {status}
              </p>
            </div>
          );
        } else if (status == "Ready-Stock") {
          return (
            <div className="status-box ready-stock">
              <p className="status" data-testid="status">
                {status}
              </p>
            </div>
          );
        }
      })()}

      {/* ITEM NAME */}
      <div>
        <h6 className="name" data-testid="name">
          {name}
        </h6>
      </div>

      {/* ITEM PRICE */}
      <div>
        <p className="price" data-testid="price">
          IDR {price}
        </p>
      </div>
    </div>
  );
}

export default Card;
