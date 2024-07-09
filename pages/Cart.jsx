const Cart = () => {
  const products = [
    {
      id: 1,
      name: "Scented Candle",
      flavor: "Cherry and Cake",
      price: 59.99,
      quantity: 2,
      image: "Candle.png",
      checked: true,
    },
    {
      id: 2,
      name: "Fragrance Oil",
      flavor: "Cherry Flavour",
      price: 59.99,
      quantity: 1,
      image: "FragranceOil.png",
      checked: true,
    },
    {
      id: 3,
      name: "Air Freshner",
      flavor: "Car Air Freshner",
      price: 59.99,
      quantity: 4,
      image: "AirFreshner.png",
      checked: true,
    },
    {
      id: 4,
      name: "Diffuser",
      flavor: "Mint Flavour",
      price: 39.99,
      quantity: 1,
      image: "diffuser.png",
      checked: true,
    },
  ];
  return (
    <>
      {/* CART */}
      <div className="checkoutContainer">
        <img
          src="ShoppingCart.png"
          alt=""
          style={{
            width: "200px",
            marginLeft: "6%",
            marginBottom: "5px",
          }}
        />
        <div className="product-list">
          {products.map((product) => (
            <div className="product-item" key={product.id}>
              <div className="product-checkbox">
                <input type="checkbox" checked={product.checked} />
                <span></span>
              </div>
              <img
                src={product.image}
                alt={product.name}
                className="product-image"
              />
              <div className="product-info">
                <h3>{product.name}</h3>
                <p>{product.flavor}</p>
                <div className="quantity-control">
                  <button>-</button>
                  <span style={{ fontSize: "0.8em", padding: "0px 5px" }}>
                    {product.quantity}
                  </span>
                  <button>+</button>
                </div>
              </div>
              <div className="product-price">${product.price.toFixed(2)}</div>
            </div>
          ))}
        </div>
        {/* CHECKOUT */}
        <div className="summary-container">
          <div
            style={{
              borderBottom: "solid 1px #D9D9D9",
              padding: "0px",
            }}
          >
            <img src="Summary.png" alt="" />
          </div>

          <div className="summary-item">
            <span>Items (8)</span>
            <span>$219.96</span>
          </div>
          <div className="summary-item">
            <span>Discount</span>
            <span>$0</span>
          </div>
          <div className="summary-item">
            <span>Delivery fee</span>
            <span>$30</span>
          </div>
          <div className="summary-item total">
            <span>Total</span>
            <span style={{ color: "#DC82B5" }}>$249.96</span>
          </div>
          <button className="checkout-button">Check Out</button>
        </div>
      </div>
    </>
  );
};
export default Cart;
