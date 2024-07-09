import "./navStyle.css";
const NavBar = () => {
  return (
    <>
      <nav>
        <div style={{ display: "inline-block", marginTop: "9px" }}>
          <img src="Logo.png" alt="LushScent logo" />
        </div>

        <a href="">Home</a>
        <a href="">Products</a>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">FAQs</a>

        <div className="inputContainer">
          <input type="text" placeholder="search here" />
          <img src="SearchIcon.png" alt="" id="icon" />
          <div>
            <img src="Cart.png" alt="" />
          </div>
          <div>
            <img src="Notification.png" alt="" />
          </div>
        </div>
      </nav>
    </>
  );
};
export default NavBar;
