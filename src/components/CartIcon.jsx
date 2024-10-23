import { FaCartShopping } from "react-icons/fa6";
import { useCartContext } from "../context/CartContext";
import { Link } from "react-router-dom";

const Cart = () => {
  const { cartLength } = useCartContext();
  return (
    <Link to="/cart" className="cart-icon">
      <FaCartShopping size={24} />
      <span>{cartLength}</span>
    </Link>
  );
};

export default Cart;
