import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const cart = useSelector((state) => state.cart);

  const handleShopClick = () => {
    alert("Shop coming soon");
  };

  return (
    <header className="navbar">
      <nav className="nav-left">
        <Link to="/">HOME</Link>

        {/* Use button instead of broken anchor */}
        <button className="nav-btn" onClick={handleShopClick}>
          SHOP
        </button>
      </nav>

      <div className="logo">MAISON</div>

      <div className="nav-right">
        <Link to="/cart">👜 ({cart.length})</Link>
      </div>
    </header>
  );
}

export default Navbar;