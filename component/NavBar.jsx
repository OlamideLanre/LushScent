import "./navStyle.css";
import { useNavigate, Link, useLocation } from "react-router-dom";
const NavBar = () => {
  const navigate = useNavigate();
  function handleNavigate() {
    navigate("/cart");
  }
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  return (
    <>
      <nav className="navBar">
        <div style={{ display: "inline-block", marginTop: "9px" }}>
          <img src="Logo.png" alt="LushScent logo" className="logo" />
          <img src="profile.png" alt="profile" className="profile" />
        </div>

        <a href="">Home</a>
        <Link to="/">Products</Link>
        <a href="">About</a>
        <a href="">Contact</a>
        <a href="">FAQs</a>

        <div className="inputContainer">
          <input
            type="text"
            placeholder="search here"
            className={`search-input ${isHomePage ? "" : "mobile-hidden"}`}
          />
          <img
            src="SearchIcon.png"
            alt=""
            id="icon"
            className={`search-input ${isHomePage ? "" : "mobile-hidden"}`}
          />
          <div onClick={handleNavigate} style={{ cursor: "pointer" }}>
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
