import { FaCartShopping } from "react-icons/fa6";

import "./../../styles/add-to-cart-btn.css";
import { useCartContext } from "../../context/CartContext";
import { useAppContext } from "../../context/AppContext";
import { useErrorContext } from "../../context/ErrorContext";
import { TbLoader2 } from "react-icons/tb";
import { useState } from "react";

const AddToCartBtn = ({ id, disabled }) => {
  const { user } = useAppContext();
  const { addAndUpdateCart, errorCart } = useCartContext();
  const { setMessages } = useErrorContext();

  const [loading, setLoading] = useState(false);

  const handleClick = async (e) => {
    setLoading(true);
    e.preventDefault();
    e.stopPropagation();
    if (!user) {
      setMessages((prev) => [
        ...prev,
        {
          message: "Please login first before adding to cart",
          type: "warning",
          time: Date.now(),
        },
      ]);

      return;
    }
    const response = await addAndUpdateCart(id);
    if (response && !errorCart) {
      setMessages((prev) => [
        ...prev,
        { message: response, type: "success", time: Date.now() },
      ]);
    } else {
      setMessages((prev) => [
        ...prev,
        { message: errorCart, type: "error", time: Date.now() },
      ]);
    }
    setLoading(false);
  };

  return (
    <button
      onClick={handleClick}
      className="add-to-cart-btn"
      disabled={disabled || loading}
    >
      Add to Cart{" "}
      {loading ? <TbLoader2 className="loader" /> : <FaCartShopping />}
    </button>
  );
};

export default AddToCartBtn;
