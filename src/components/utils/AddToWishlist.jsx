import { FaHeart } from "react-icons/fa";

import "./../../styles/add-to-wishlist-btn.css";
import { useWishlistContext } from "../../context/WishlistContext";

const AddToWishlist = ({ id, isActive = false }) => {
  const { addAndUpdateWishlist, removeItemFromWishlist } = useWishlistContext();

  const handleClick = (e) => {
    e.preventDefault();
    e.stopPropagation();
    isActive ? removeItemFromWishlist(id) : addAndUpdateWishlist(id);
  };

  return (
    <button
      onClick={handleClick}
      className={`add-to-wishlist-btn ${isActive ? "active" : ""}`}
    >
      <FaHeart />
    </button>
  );
};

export default AddToWishlist;
