import { FaCartShopping } from "react-icons/fa6";

import "./../../styles/add-to-cart-btn.css";
import { useCartContext } from "../../context/CartContext";

const AddToCartBtn = ({ id, disabled }) => {
  const { addAndUpdateCart } = useCartContext();

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addAndUpdateCart(id);
  };

  return (
    <button
      onClick={handleClick}
      className="add-to-cart-btn"
      disabled={disabled}
    >
      Add to Cart <FaCartShopping />
    </button>
  );
};

export default AddToCartBtn;
