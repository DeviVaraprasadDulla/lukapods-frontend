import api from "./axios";

/*
|--------------------------------------------------------------------------
| GUEST ID
|--------------------------------------------------------------------------
*/

const getGuestId = () => {
  let guestId = localStorage.getItem("guest_id");

  if (!guestId) {
    guestId = crypto.randomUUID();

    localStorage.setItem("guest_id", guestId);
  }

  return guestId;
};

/*
|--------------------------------------------------------------------------
| COMMON HEADERS
|--------------------------------------------------------------------------
*/

const getHeaders = () => ({
  "X-GUEST-ID": getGuestId(),
});

/*
|--------------------------------------------------------------------------
| ADD TO CART
|--------------------------------------------------------------------------
*/

export const addToCart = async ({ productId, quantity = 1 }) => {
  const response = await api.post(
    "/cart/add/",
    {
      product: productId,
      quantity,
    },
    {
      headers: getHeaders(),
    },
  );

  return response.data;
};

/*
|--------------------------------------------------------------------------
| GET CART ITEMS
|--------------------------------------------------------------------------
*/

export const getCartItems = async () => {
  const response = await api.get("/cart/items/", {
    headers: getHeaders(),
  });

  return response.data;
};

/*
|--------------------------------------------------------------------------
| UPDATE CART ITEM
|--------------------------------------------------------------------------
*/

export const updateCartItem = async ({ itemId, quantity }) => {
  const response = await api.patch(
    `/cart/update/${itemId}/`,
    {
      quantity,
    },
    {
      headers: getHeaders(),
    },
  );

  return response.data;
};

/*
|--------------------------------------------------------------------------
| REMOVE CART ITEM
|--------------------------------------------------------------------------
*/

export const removeCartItem = async (itemId) => {
  const response = await api.delete(`/cart/remove/${itemId}/`, {
    headers: getHeaders(),
  });

  return response.data;
};

/*
|--------------------------------------------------------------------------
| CHECKOUT
|--------------------------------------------------------------------------
*/

export const getCheckout = async () => {
  const response = await api.get("/cart/checkout/", {
    headers: getHeaders(),
  });

  return response.data;
};

/*
|--------------------------------------------------------------------------
| CART COUNT
|--------------------------------------------------------------------------
*/

export const getCartCount = async () => {
  const data = await getCartItems();

  const items = data?.results || [];

  return items.reduce((total, item) => total + item.quantity, 0);
};

/*
|--------------------------------------------------------------------------
| CART TOTAL
|--------------------------------------------------------------------------
*/

export const getCartTotal = async () => {
  const data = await getCartItems();

  const items = data?.results || [];

  return items.reduce((total, item) => total + Number(item.total_price), 0);
};
