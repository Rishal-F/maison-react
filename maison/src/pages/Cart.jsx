import { useSelector, useDispatch } from "react-redux";
import { removeFromCart } from "../redux/cartActions";

function Cart() {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div style={{ padding: "40px" }}>
      <h2>Your Cart</h2>

      {cart.length === 0 ? (
        <p>Cart is empty</p>
      ) : (
        <>
          {cart.map((item, index) => (
            <div key={index}>
              <p>{item.name} - ₹{item.price}</p>
              <button onClick={() => dispatch(removeFromCart(index))}>
                Remove
              </button>
            </div>
          ))}

          <h3>Total: ₹{total}</h3>
        </>
      )}
    </div>
  );
}

export default Cart;