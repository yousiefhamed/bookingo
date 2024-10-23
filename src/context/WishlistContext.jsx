import { createContext, useContext, useEffect, useState } from "react";
import { useAppContext } from "./AppContext";
import {
  addToWishlist,
  getWishllist,
  removeFromWishlist,
} from "../hooks/useApi";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);
  const [wishlistItems, setWishlistItems] = useState([]);
  const [errorWishlist, setErrorWishlist] = useState(null);

  const { user, books } = useAppContext();

  useEffect(() => {
    const fetchWishlist = async () => {
      if (!user) {
        setErrorWishlist("User not logged in");
        return;
      }
      setErrorWishlist(null);
      try {
        const wishlist = await getWishllist(user.userId);
        if (wishlist.products) {
          setWishlist(
            wishlist.products.map((product) => product.productId._id)
          );
          setErrorWishlist(null);
          return;
        }

        setErrorWishlist("Error fetching wishlist:", wishlist);
        return;
      } catch (error) {
        setErrorWishlist("Error fetching wishlist:", error);
      }
    };
    if (user) {
      fetchWishlist();
    }
  }, [user]);

  useEffect(() => {
    if (books && wishlist) {
      setWishlistItems(
        wishlist.map((productId) => {
          const book = books.find((book) => book._id === productId);
          return {
            productId,
            book,
          };
        })
      );
    }
  }, [wishlist, books]);

  const addAndUpdateWishlist = async (productId) => {
    if (!user) {
      setErrorWishlist("User not logged in");
      return;
    }
    setErrorWishlist(null);
    try {
      const response = await addToWishlist(user.userId, {
        productId: productId,
      });
      setWishlist((prev) => [...prev, productId]);
      return response;
    } catch (error) {
      setErrorWishlist("Error adding to wishlist:", error);
    }
  };

  const removeItemFromWishlist = async (productId) => {
    if (!user) {
      setErrorWishlist("User not logged in");
      return;
    }
    setErrorWishlist(null);
    try {
      const response = await removeFromWishlist(user.userId, productId);
      setWishlist((prev) => prev.filter((id) => id !== productId));
      return response.message;
    } catch (err) {
      setErrorWishlist("Error removing from wishlist:", err);
    }
  };

  return (
    <WishlistContext.Provider
      value={{
        wishlist,
        wishlistItems,
        errorWishlist,
        addAndUpdateWishlist,
        removeItemFromWishlist,
      }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

export const useWishlistContext = () => {
  return useContext(WishlistContext);
};
