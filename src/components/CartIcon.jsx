import { FaCartShopping } from "react-icons/fa6";

const Cart = () => {
  return (
    <div className="cart-icon">
      <FaCartShopping size={24} />
      <span>{0}</span>
    </div>
  );
};

export default Cart;
