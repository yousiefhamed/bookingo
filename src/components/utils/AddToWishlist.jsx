import { FaHeart } from "react-icons/fa";

import "./../../styles/add-to-wishlist-btn.css";
import { useAppContext } from "../../context/AppContext";
import { useWishlistContext } from "../../context/WishlistContext";
import { useErrorContext } from "../../context/ErrorContext";
import { useState } from "react";
import { TbLoader2 } from "react-icons/tb";

const AddToWishlist = ({ id, isActive = false }) => {
  const { user } = useAppContext();
  const { addAndUpdateWishlist, removeItemFromWishlist } = useWishlistContext();
  const { setMessages } = useErrorContext();

  const [loading, setLoading] = useState(false);

  const handleClick = async (e) => {
    e.preventDefault();
    e.stopPropagation();
    setLoading(true);

    if (!user) {
      setMessages((prev) => [
        ...prev,
        {
          message: "Please login first before adding to Wishlist",
          type: "warning",
          time: Date.now(),
        },
      ]);

      return;
    }
    let response;
    if (isActive) {
      response = await removeItemFromWishlist(id);
    } else {
      response = await addAndUpdateWishlist(id);
    }
    if (response) {
      setMessages((prev) => [
        ...prev,
        { message: `${response.message}`, type: "success", time: Date.now() },
      ]);
    } else {
      setMessages((prev) => [
        ...prev,
        { message: `${response.message}`, type: "error", time: Date.now() },
      ]);
    }
    setLoading(false);
  };

  return (
    <button
      onClick={handleClick}
      className={`add-to-wishlist-btn ${isActive ? "active" : ""}`}
      disabled={loading}
    >
      {loading ? <TbLoader2 className="loader" /> : <FaHeart />}
    </button>
  );
};

export default AddToWishlist;
