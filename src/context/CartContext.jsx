import { createContext, useContext, useEffect, useState } from "react";

import {
  getCartItems,
  addToCart as addToCartApi,
  updateCartItem as updateCartItemApi,
  removeCartItem as removeCartItemApi,
} from "@/api/cartApi";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  const [loading, setLoading] = useState(false);

  /*
  |--------------------------------------------------------------------------
  | LOAD CART
  |--------------------------------------------------------------------------
  */

  const fetchCart = async () => {
    try {
      setLoading(true);

      const response = await getCartItems();

      setCartItems(
        Array.isArray(response) ? response : response?.results || [],
      );
    } catch (error) {
      console.error("Cart fetch error:", error);
    } finally {
      setLoading(false);
    }
  };

  /*
  |--------------------------------------------------------------------------
  | ADD TO CART
  |--------------------------------------------------------------------------
  */

  const addToCart = async (productId, quantity = 1) => {
    try {
      await addToCartApi({
        productId,
        quantity,
      });

      await fetchCart();

      return {
        success: true,
      };
    } catch (error) {
      console.error(error);

      return {
        success: false,
        message: error?.response?.data?.error || "Failed to add item",
      };
    }
  };

  /*
  |--------------------------------------------------------------------------
  | UPDATE QUANTITY
  |--------------------------------------------------------------------------
  */

  const updateQuantity = async (itemId, quantity) => {
    try {
      await updateCartItemApi({
        itemId,
        quantity,
      });

      await fetchCart();

      return true;
    } catch (error) {
      console.error(error);

      return false;
    }
  };

  /*
  |--------------------------------------------------------------------------
  | REMOVE ITEM
  |--------------------------------------------------------------------------
  */

  const removeItem = async (itemId) => {
    try {
      await removeCartItemApi(itemId);

      await fetchCart();

      return true;
    } catch (error) {
      console.error(error);

      return false;
    }
  };

  /*
  |--------------------------------------------------------------------------
  | TOTAL COUNT
  |--------------------------------------------------------------------------
  */

  const cartCount = cartItems.reduce((total, item) => total + item.quantity, 0);

  /*
  |--------------------------------------------------------------------------
  | TOTAL PRICE
  |--------------------------------------------------------------------------
  */

  const cartTotal = cartItems.reduce(
    (total, item) => total + Number(item.total_price),
    0,
  );

  /*
  |--------------------------------------------------------------------------
  | INITIAL LOAD
  |--------------------------------------------------------------------------
  */

  useEffect(() => {
    fetchCart();
  }, []);

  return (
        <CartContext.Provider
          value={{
            loading,
            cartItems,
            setCartItems,   // 👈 add this
            cartCount,
            cartTotal,
            fetchCart,
            addToCart,
            updateQuantity,
            removeItem,
          }}
        >
      {children}
    </CartContext.Provider>
  );
};

/*
|--------------------------------------------------------------------------
| CUSTOM HOOK
|--------------------------------------------------------------------------
*/

export const useCart = () => useContext(CartContext);
