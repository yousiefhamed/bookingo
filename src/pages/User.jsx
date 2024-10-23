import React, { useEffect, useState } from "react";
import { useAppContext } from "../context/AppContext";
import { logout } from "../hooks/useApi";
import { useNavigate } from "react-router-dom";
import Heading from "./../components/utils/Headeing";
import { useWishlistContext } from "../context/WishlistContext";

import "../styles/user.css";
import Book from "../components/BookCard";

const User = () => {
  const navigate = useNavigate();
  const { setLoggedIn, setError } = useAppContext();
  const [logoutStat, setLogoutStat] = useState(false);

  const { wishlistItems } = useWishlistContext();

  useEffect(() => {
    const handleLogout = async () => {
      try {
        const response = await logout();
        if (response) {
          setLoggedIn(false);
          navigate("/");
        }
      } catch (error) {
        setError(error);
      }
    };

    if (logoutStat) {
      handleLogout();
    }
  }, [logoutStat, navigate, setError, setLoggedIn]);

  return (
    <>
      <section className="user-container">
        <Heading text="User Profile" />
        <button className="logout-button" onClick={() => setLogoutStat(true)}>
          Logout
        </button>
      </section>
      <section className="wishlist-container">
        <Heading text="Wishlist" />
        <div className="books">
          {wishlistItems.map(({ book }) => (
            <Book key={book._id} book={book} />
          ))}
        </div>
      </section>
    </>
  );
};

export default User;
