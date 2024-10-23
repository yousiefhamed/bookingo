import { FaMinus, FaPlus } from "react-icons/fa6";
import { useCartContext } from "../context/CartContext";

import "./../styles/cart.css";

const Cart = () => {
  const {
    cartItems,
    cartLength,
    errorCart,
    cartTotalPrice,
    addAndUpdateCart,
    decreaseQuantity,
  } = useCartContext();

  return (
    <section>
      <h1>Cart</h1>
      {cartLength === 0 ? (
        <p>Your cart is empty</p>
      ) : errorCart ? (
        <p>{`${errorCart}`}</p>
      ) : (
        <div className="cart-container">
          <ul className="cart-list">
            {cartItems.map((item) => (
              <li key={item.book._id} className="cart-item">
                <div className="cart-item-image">
                  <img src={item.book.coverImage} alt={item.book.title} />
                </div>
                <div className="cart-item-details">
                  <div className="cart-info">
                    <h3>{item.book.title}</h3>
                    <p>Price: ${item.book.price}</p>
                    <p>
                      Total: $
                      {Math.round(item.book.price * item.quantity * 100) / 100}
                    </p>
                  </div>
                  <div className="cart-quantity">
                    <button onClick={() => addAndUpdateCart(item.book._id)}>
                      <FaPlus />
                    </button>
                    <p>{item.quantity}</p>
                    <button onClick={() => decreaseQuantity(item.book._id)}>
                      <FaMinus />
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
          <div className="cart-total">
            <p>
              Total: <span>${cartTotalPrice}</span>
            </p>
          </div>
        </div>
      )}
    </section>
  );
};

export default Cart;
