import "./footerStyle.css";
import { FaFacebook, FaInstagram, FaPhone, FaWhatsapp } from "react-icons/fa";
import { IconContext } from "react-icons";
import { useNavigate } from "react-router-dom";
const Footer = () => {
  const navigate = useNavigate();
  function handleHome() {
    navigate("/");
  }
  function handleCart() {
    navigate("/cart");
  }
  function handleCheckout() {
    navigate("/checkout");
  }
  return (
    <>
      <div className="benefits">
        <div className="freeReturn benefit-item">
          <img
            src="f7_shippingbox.png"
            alt=""
            style={{ marginRight: "20px" }}
          />
          <div className="benefit-text ">
            <h3>Free Return</h3>
            <p>
              Enjoy peace of mind with free <br /> returns on all purchases.
            </p>
          </div>
        </div>
        <div className="freeShipping benefit-item">
          <img
            src="hugeicons_shipping-truck-02.png"
            alt=""
            style={{ marginRight: "20px" }}
          />
          <div className="benefit-text">
            <h3>Free Shipping</h3>
            <p>
              Enjoy free shipping on <br />
              order more than $4000.
            </p>
          </div>
        </div>
        <div className="online benefit-item">
          <img
            src="fluent_person-support-24-regular.png"
            alt=""
            style={{ marginRight: "20px" }}
          />
          <div className="benefit-text  ">
            <h3>Online</h3>
            <p>
              8am-6pm online support,
              <br /> 7 days a week.
            </p>
          </div>
        </div>
      </div>
      <footer>
        <div className="footerDiv">
          <div>
            <img src="Logo.png" alt="LushScent logo" />
          </div>
          <div>
            <h4>Products</h4>
            <ul>
              <li>Scented Candles</li>
              <li>Diffussers</li>
              <li>Fragrance Oil</li>
              <li>Air-Freshners</li>
            </ul>
          </div>
          <div>
            <h4>Links</h4>
            <a href="">Home</a>
            <a href="">Products</a>
            <a href="">About</a>
            <a href="">Contact</a>
            <a href="">FAQs</a>
          </div>
          <div>
            <h4>Get in touch</h4>
            <p>
              Got a question or needs an assistance? <br /> We are here to help.
              Our dedicated <br /> support team is ready to assist you and{" "}
              <br />
              answer any of your questions.
            </p>
            <div
              className="iconsMainDiv"
              style={{
                display: "flex",
                justifyContent: "space-between",
                width: "230px",
              }}
            >
              <button>
                <IconContext.Provider
                  value={{ style: { verticalAlign: "middle" } }}
                >
                  <FaInstagram />
                </IconContext.Provider>
              </button>
              <button>
                <IconContext.Provider
                  value={{ style: { verticalAlign: "middle" } }}
                >
                  <FaWhatsapp />
                </IconContext.Provider>
              </button>
              <button>
                <IconContext.Provider
                  value={{ style: { verticalAlign: "middle" } }}
                >
                  <FaFacebook />
                </IconContext.Provider>
              </button>
              <button>
                <IconContext.Provider
                  value={{ style: { verticalAlign: "middle" } }}
                >
                  <FaPhone />
                </IconContext.Provider>
              </button>
            </div>
          </div>
        </div>
        <hr
          style={{
            width: "90%",
            marginLeft: "auto",
            marginRight: "auto",
            marginTop: "15px",
          }}
        />
        <p
          style={{
            textAlign: "center",
            marginTop: "15px",
          }}
        >
          Copyright 2024. All right reserved.
        </p>
      </footer>

      {/* Mobile footer */}
      <div className="hidden">
        <div className="mobileFooterDiv">
          <div className="iconHolder">
            <div onClick={handleHome}>
              <img src="Home.png" alt="icon" />
            </div>
            <div onClick={handleCart}>
              <img src="Cart.png" alt="cart" />
            </div>
            <div onClick={handleCheckout}>
              <img src="Notification.png" alt="bell" />
            </div>
            <div>
              <img src="Settings.png" alt="setting" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footer;
