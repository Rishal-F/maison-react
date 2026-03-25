import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartActions";

function Products() {
  const dispatch = useDispatch();

  const products = [
  {
    name: "Bag",
    price: 800,
    img: "https://www.rijac.com/cdn/shop/files/FQSY0922.jpg?v=1755538703&width=533"
  },
  {
    name: "Vase",
    price: 2000,
    img: "https://www.ellementry.com/cdn/shop/files/SWDEA3919_00_1200x.webp?v=1759821762"
  },
  {
    name: "Wallet",
    price: 450,
    img: "https://tohl.in/cdn/shop/files/NORTHMEN_SWALLET-FORESTGREEN.jpg?v=1759000898"
  }
];

  return (
    <section className="featured">
      <h2>Featured Pieces</h2>

      <div className="product-grid">
        {products.map((p, index) => (
          <div className="product" key={index}>
            <img src={p.img} alt="" />
            <h3>{p.name}</h3>
            <p>₹{p.price}</p>

            <button onClick={() => dispatch(addToCart(p))}>
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Products;