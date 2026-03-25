import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">

        <div>
          <h3>MAISON</h3>
          <p>
            Thoughtfully curated goods for modern living.<br />
            Quality craftsmanship, timeless design.
          </p>
        </div>

        <div>
          <h4>SHOP</h4>
          <Link to="/shop">New Arrivals</Link>
          <Link to="/shop">Best Sellers</Link>
          <Link to="/shop">Clothing</Link>
          <Link to="/shop">Accessories</Link>
          <Link to="/shop">Home</Link>
        </div>

        <div>
          <h4>HELP</h4>
          <Link to="/help">Shipping & Returns</Link>
          <Link to="/help">FAQ</Link>
          <Link to="/help">Size Guide</Link>
          <Link to="/contact">Contact Us</Link>
        </div>

        <div>
          <h4>ABOUT</h4>
          <Link to="/about">Our Story</Link>
          <Link to="/about">Sustainability</Link>
          <Link to="/careers">Careers</Link>
          <Link to="/press">Press</Link>
        </div>

      </div>

      <div className="copyright">
        © 2026 Maison. All rights reserved.
      </div>
    </footer>
  );
}