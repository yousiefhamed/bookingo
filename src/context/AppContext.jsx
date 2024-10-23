import { createContext, useContext, useEffect, useState } from "react";
import { getBooks } from "../hooks/useApi";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [books, setBooks] = useState([]);
  const [errorBooks, setErrorBooks] = useState(null);

  useEffect(() => {
    const storedToken = localStorage.getItem("token");
    const storedUserId = localStorage.getItem("userId");
    if (storedToken && storedUserId) {
      setUser({ token: storedToken, userId: storedUserId });
      setLoading(false);
      setError(null);
      setLoggedIn(true);
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
        setErrorBooks(error);
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
        errorBooks,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
