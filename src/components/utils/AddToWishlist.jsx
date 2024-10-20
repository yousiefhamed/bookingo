import { FaHeart } from "react-icons/fa";

import "./../../styles/add-to-wishlist-btn.css";

const AddToWishlist = ({ isActive = false }) => {
  return (
    <button className={`add-to-wishlist-btn ${isActive ? "active" : ""}`}>
      <FaHeart />
    </button>
  );
};

export default AddToWishlist;
