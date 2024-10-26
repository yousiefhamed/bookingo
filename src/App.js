import React, { useEffect } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { useLocation } from "react-router-dom";

import ProtectedRoutes from "./components/auth/ProtectedRoutes";
import IsLoggedIn from "./components/auth/IsLoggedIn";

import Nav from "./components/Nav";
import Header from "./components/Header";
import Home from "./pages/Home";
import AllBooks from "./pages/AllBooks";
import SingleBook from "./pages/SingleBook";
import Author from "./pages/Author";
import User from "./pages/User";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Footer from "./components/Footer";

import { AppProvider } from "./context/AppContext";
import { FilterProvider } from "./context/FilterContext";
import { CartProvider } from "./context/CartContext";
import { WishlistProvider } from "./context/WishlistContext";
import { ErrorProvider } from "./context/ErrorContext";

import "./App.css";
import ErrorDisplayer from "./components/utils/ErrorDisplayer";

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    document.getElementById("topPage").scrollIntoView({
      behavior: "smooth",
    });
  }, [pathname]);
  return <div id="topPage"></div>;
};

function App() {
  return (
    <AppProvider>
      <FilterProvider>
        <CartProvider>
          <WishlistProvider>
            <ErrorProvider>
              <Router>
                <ScrollToTop />
                <ErrorDisplayer />
                <div className="App">
                  <div className="grid-container">
                    <Nav />
                    <main>
                      <Header />
                      <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/books" element={<AllBooks />} />
                        <Route path="/book/:id" element={<SingleBook />} />
                        <Route path="/author/:id" element={<Author />} />
                        <Route
                          path="/account"
                          element={
                            <ProtectedRoutes>
                              <User />
                            </ProtectedRoutes>
                          }
                        />
                        <Route
                          path="/cart"
                          element={
                            <ProtectedRoutes>
                              <Cart />
                            </ProtectedRoutes>
                          }
                        />
                        <Route
                          path="/login"
                          element={
                            <IsLoggedIn>
                              <Login />
                            </IsLoggedIn>
                          }
                        />
                        <Route
                          path="/signup"
                          element={
                            <IsLoggedIn>
                              <Signup />
                            </IsLoggedIn>
                          }
                        />
                      </Routes>
                    </main>
                    <Footer />
                  </div>
                </div>
              </Router>
            </ErrorProvider>
          </WishlistProvider>
        </CartProvider>
      </FilterProvider>
    </AppProvider>
  );
}

export default App;
