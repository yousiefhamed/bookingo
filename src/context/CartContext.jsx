import { createContext, useContext, useEffect, useState } from "react";
import { addToCart, decreaseCart, getCart } from "../hooks/useApi";
import { useAppContext } from "./AppContext";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [cartItems, setCartItems] = useState([]);
  const [errorCart, setErrorCart] = useState(null);
  const [cartLength, setCartLength] = useState(0);
  const [cartTotalPrice, setCartTotalPrice] = useState(0);

  const { user, books } = useAppContext();

  useEffect(() => {
    const fetchCart = async () => {
      if (!user) {
        setErrorCart("User not logged in");
        return;
      }
      setErrorCart(null);
      try {
        const cart = await getCart(user.userId);
        if (cart.products) {
          setCart(
            cart.products.map((product) => ({
              _id: product._id,
              productId: product.productId._id,
              quantity: product.quantity,
            }))
          );
          setCartLength(cart.products.length);
          setErrorCart(null);
          return;
        }
        setErrorCart("Error fetching cart:", cart);
      } catch (error) {
        setErrorCart("Error fetching cart:", error);
      } finally {
        setCartLength(cart.length);
      }
    };
    if (user) {
      fetchCart();
    }
  }, [cart.length, user]);

  useEffect(() => {
    if (books && cart) {
      setCartItems(
        cart.map((cartItem) => {
          const book = books.find((book) => book._id === cartItem.productId);
          return {
            ...cartItem,
            book,
          };
        })
      );
    }
  }, [cart, books]);

  const addAndUpdateCart = async (productId) => {
    if (!user) {
      setErrorCart("User not logged in");
      return;
    }
    try {
      const response = await addToCart(user.userId, {
        productId: productId,
        quantity: 1,
      });
      if (response.cart.products) {
        setCart(response.cart.products);
        setErrorCart(null);
        return "Product added successfully";
      }
      setErrorCart("Error adding to cart:", response);
    } catch (error) {
      setErrorCart("Error adding to cart:", error);
      return;
    }
  };

  const decreaseQuantity = async (productId) => {
    if (!user) {
      setErrorCart("User not logged in");
      return;
    }
    try {
      const response = await decreaseCart(user.userId, {
        productId: productId,
      });
      if (response.cart.products) {
        setCart(response.cart.products);
        setErrorCart(null);
        return;
      }
      setErrorCart("Error removing from cart:", response);
    } catch (error) {
      setErrorCart("Error removing from cart:", error);
      return;
    }
  };

  useEffect(() => {
    const calculateTotalPrice = () => {
      let totalPrice = 0;
      cartItems.forEach((item) => {
        totalPrice += item.book.price * item.quantity;
      });
      setCartTotalPrice(Math.round(totalPrice * 100) / 100);
    };

    calculateTotalPrice();
  }, [cartItems]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        errorCart,
        cartLength,
        addAndUpdateCart,
        decreaseQuantity,
        cartTotalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCartContext = () => {
  return useContext(CartContext);
};
