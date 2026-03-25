import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.cart);

  return (
    <header className="navbar">
      <nav className="nav-left">
        <Link to="/">HOME</Link>
        <a onClick={() => alert("Shop coming soon")}>SHOP</a>
      </nav>

      <div className="logo">MAISON</div>

      <div className="nav-right">
        <Link to="/cart">👜 ({cart.length})</Link>
      </div>
    </header>
  );
}

export default Navbar;