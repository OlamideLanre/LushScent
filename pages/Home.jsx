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
          className="headerImage"
        />
      </div>
      <div className="headerImageTexts">
        <img src="Our Products.png" alt="" />
        <p>all our products are handmade with love and tenderness</p>
      </div>
      <div className="headerImage2">
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
            backgroundColor: "#EFEEF1",
            width: "35px",
            textAlign: "center",
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
    </>
  );
};
export default Home;
