import "./CheckoutStyle.css";
import { Link, useNavigate } from "react-router-dom";
const Checkout = () => {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/payments");
  }
  return (
    <>
      <div
        className="checkoutImg"
        style={{
          marginTop: "3%",
        }}
      >
        <img src="CheckOut.png" alt="" />
      </div>
      <nav className="checkoutNav">
        <div>
          <Link to="/contact">Contact information</Link>
          <Link to="/payments">Payments</Link>
        </div>
      </nav>
      <div className="form-container">
        <div className="section">
          <h3>Contact</h3>
          <div className="input-group">
            <input type="text" placeholder="Full Name" className="longInput" />
          </div>
          <div className="input-group-short">
            <input
              type="email"
              placeholder="Email Address"
              className="shortInput"
            />
            <input
              type="tel"
              placeholder="Phone Number"
              className="shortInput"
            />
          </div>
        </div>
        <div className="section">
          <h3>Delivery Address</h3>
          <div className="input-group">
            <input type="text" placeholder="Address" className="longInput" />
          </div>
          <div className="input-group-short">
            <input type="text" placeholder="Country" className="shortInput" />
            <input type="text" placeholder="State" className="shortInput" />
          </div>
          <div className="input-group-short">
            <input type="text" placeholder="City" className="shortInput" />
            <input type="text" placeholder="Post Code" className="shortInput" />
          </div>
        </div>
        <button className="coButton" onClick={handleNavigate}>
          Proceed to Payment
        </button>
      </div>
    </>
  );
};
export default Checkout;
