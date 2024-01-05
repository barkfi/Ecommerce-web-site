import React, { createContext, useState, useEffect } from 'react';
import CartItem from '../components/CartItem';

export const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [Cart, setCart] = useState([]);

  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    const CartItem = Cart.find((item) => {
      return item.id === id;
    });
    if (CartItem) {
      const newCart = [...Cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: CartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...Cart, newItem]);
    }
  };

  const removeFromcart = (id) => {
    const newCart = Cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  const clearCart = () => {
    setCart([]);
  };

  const IncreaseAmount = (id) => {
    const CartItem = Cart.find((item) => item.id === id);
    addToCart(CartItem, id);
  };

  const decreaseAmount = (id) => {
    const CartItem = Cart.find((item) => {
      return item.id === id;
    });
    if (CartItem) {
      const newCart = Cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: CartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
      if (CartItem.amount < 2) {
        removeFromcart(id);
      
    }
  };

  return (
    <CartContext.Provider
      value={{ Cart, addToCart, removeFromcart, clearCart, IncreaseAmount, decreaseAmount }}
    >
      {children}
    </CartContext.Provider>
  );
};

export default CartProvider;
