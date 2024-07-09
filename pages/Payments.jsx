import { Link } from "react-router-dom";
import { FaPaypal } from "react-icons/fa";
import "./CheckoutStyle.css";
const Payments = () => {
  return (
    <>
      <div
        style={{
          marginTop: "3%",
        }}
        className="checkoutImg"
      >
        <img src="CheckOut.png" alt="" />
      </div>
      <nav className="checkoutNav">
        <div>
          <Link to="/contact">Contact information</Link>
          <Link to="/payments">Payments</Link>
        </div>
      </nav>
      {/* Payment method */}
      <div className="paymentMethod">
        <p
          style={{
            marginTop: "10px",
            marginBottom: "10px",
          }}
        >
          Select payment method
        </p>
        <div>
          <input type="radio" />
          <img src="logos_mastercard.png" alt="mastercard" width={"26px"} />
        </div>
        <div>
          <input type="radio" />
          <img src="logos_visa.png" alt="visa" width={"36px"} />
        </div>
        <div>
          <input type="radio" />
          <img src="logos_paypal.png" alt="paypal" width={"60px"} />
        </div>
      </div>
      {/*  */}
      <form className="card-form">
        <div className="form-group">
          <label htmlFor="cardNumber">Card Number</label>
          <input type="text" id="cardNumber" name="cardNumber" />
        </div>
        <div className="form-group">
          <div className="form-row">
            <div className="form-column ">
              <label htmlFor="expiringDate">Expiring Date</label>
              <input
                type="text"
                id="expiringDate"
                name="expiringDate"
                placeholder="MM/YY"
              />
            </div>
            <div className="form-column">
              <label htmlFor="cvv">CVV</label>
              <input type="text" id="cvv" name="cvv" />
            </div>
          </div>
        </div>
        <div className="form-group">
          <label htmlFor="cardPin">Card Pin</label>
          <input type="text" id="cardPin" name="cardPin" />
        </div>
        <button className="coButton payBtn">Pay $249.96</button>
      </form>
    </>
  );
};
export default Payments;
