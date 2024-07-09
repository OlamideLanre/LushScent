import Footer from "../component/Footer";
import NavBar from "../component/NavBar";
import Cart from "../pages/Cart";
import Checkout from "../pages/Checkout";
import Home from "../pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// import "./MediaQuery.css";
import Payments from "../pages/Payments";

function App() {
  return (
    <>
      <Router>
        <div>
          <NavBar />
          <Routes>
            <Route index element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/payments" element={<Payments />} />
            <Route path="/contact" element={<Checkout />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </>
  );
}

export default App;
