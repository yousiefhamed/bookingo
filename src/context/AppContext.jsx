import { createContext, useContext, useEffect, useState } from "react";
import { getBooks } from "../hooks/useApi";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [books, setBooks] = useState([]);
  const [cart, setCart] = useState([]);
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("userId");
    if (storedToken && storedUserId) {
      setUser({ token: storedToken, userId: storedUserId });
      setLoading(false);
      setError(null);
      return;
    }
    setUser(null);
    setLoading(false);
    return;
  }, [loggedIn]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getBooks();
        setBooks(response);
      } catch (error) {
        setError(error);
      }
    };
    fetchBooks();
  }, []);

  return (
    <AppContext.Provider
      value={{
        loggedIn,
        setLoggedIn,
        user,
        loading,
        error,
        setError,
        books,
        cart,
        setCart,
        wishlist,
        setWishlist,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
