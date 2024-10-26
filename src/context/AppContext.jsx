import { createContext, useContext, useEffect, useState } from "react";
import { getBooks } from "../hooks/useApi";

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [loggedIn, setLoggedIn] = useState(false);

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [books, setBooks] = useState([]);
  const [loadingBooks, setLoadingBooks] = useState(true);
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
    setError(null);
    return;
  }, [loggedIn]);

  useEffect(() => {
    const fetchBooks = async () => {
      try {
        const response = await getBooks();
        if (response) {
          setBooks(response);
          setErrorBooks(null);
          return response;
        }
        setErrorBooks("Something went wrong");
        return;
      } catch (err) {
        setErrorBooks(`${err}`);
        return;
      } finally {
        setLoadingBooks(false);
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
        loadingBooks,
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
