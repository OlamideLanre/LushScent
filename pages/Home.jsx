import ProductsDisplay from "./ProductsDisplay";

const Home = () => {
  return (
    <>
      <div>
        <img
          src="headerimage.jpg"
          alt="image"
          width={"100%"}
          height={"400px"}
          style={{
            objectFit: "cover",
            filter: "brightness(35%)",
          }}
        />
      </div>
      <div className="headerImageTexts">
        <img src="Our Products.png" alt="" />
        <p>all our products are handmade with love and tenderness</p>
      </div>
      <div
        style={{
          marginLeft: "40%",
          marginTop: "50px",
        }}
      >
        <img src="ourProduct.png" alt="image" />
      </div>

      <div className="navtwo">
        <span
          style={{
            fontWeight: "bold",
          }}
        >
          Categories
        </span>
        <span
          style={{
            fontWeight: "bold",
          }}
        >
          All
        </span>
        <a href="">Scented candles</a>
        <a href="">Diffusers</a>
        <a href="">Fragrance Oil</a>
        <a href="">Air-Freshner</a>
      </div>
      <ProductsDisplay />
      <div className="extra">
        <div className="containers">
          <div className="freeReturn">
            <div className="HomeImgDiv">
              <img src="f7_shippingbox.png" alt="" />
            </div>
            <div className="benefits ">
              <h3>Free Return</h3>
              <p>
                Enjoy peace of mind with free <br /> returns on all purchases.
              </p>
            </div>
          </div>
          <div className="freeShipping">
            <div className="HomeImgDiv">
              <img src="hugeicons_shipping-truck-02.png" alt="" />
            </div>
            <div className="benefits">
              <h3>Free Shipping</h3>
              <p>
                Enjoy free shipping on <br />
                order more than $4000.
              </p>
            </div>
          </div>
          <div className="online">
            <div className="HomeImgDiv">
              <img src="fluent_person-support-24-regular.png" alt="" />
            </div>

            <div className="benefits">
              <h3>Online</h3>
              <p>
                8am-6pm online support,
                <br /> 7 days a week.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Home;
