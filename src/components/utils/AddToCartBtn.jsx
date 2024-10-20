import { FaCartShopping } from "react-icons/fa6";

import "./../../styles/add-to-cart-btn.css";

const AddToCartBtn = ({ handleClick, disabled }) => {
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
