import api from "./axios";

/*
|--------------------------------------------------------------------------
| GET CHECKOUT SUMMARY
|--------------------------------------------------------------------------
*/

export const getCheckoutSummary = async () => {
  const response = await api.get("/cart/checkout/");

  return response.data;
};

/*
|--------------------------------------------------------------------------
| GET ADDRESSES
|--------------------------------------------------------------------------
*/

export const getAddresses = async () => {
  const response = await api.get("/orders/address/");

  return response.data;
};

/*
|--------------------------------------------------------------------------
| SAVE ADDRESS
|--------------------------------------------------------------------------
*/

export const saveAddress = async (addressData) => {
  const response = await api.post("/orders/address/save/", addressData);

  return response.data;
};

/*
|--------------------------------------------------------------------------
| UPDATE ADDRESS
|--------------------------------------------------------------------------
*/

export const updateAddress = async (addressId, addressData) => {
  const response = await api.put(`/orders/address/${addressId}/`, addressData);

  return response.data;
};

/*
|--------------------------------------------------------------------------
| DELETE ADDRESS
|--------------------------------------------------------------------------
*/

export const deleteAddress = async (addressId) => {
  const response = await api.delete(`/orders/address/${addressId}/`);

  return response.data;
};

/*
|--------------------------------------------------------------------------
| CREATE ORDER
|--------------------------------------------------------------------------
*/

export const createOrder = async (addressId) => {
  const response = await api.post("/orders/create/", {
    address_id: addressId,
  });

  return response.data;
};

/*
|--------------------------------------------------------------------------
| PAYMENT SUCCESS
|--------------------------------------------------------------------------
*/

export const markOrderPaid = async (orderToken) => {
  const response = await api.post("/orders/payment/success/", {
    order_token: orderToken,
  });

  return response.data;
};

/*
|--------------------------------------------------------------------------
| ORDER DETAILS
|--------------------------------------------------------------------------
*/

export const getOrderDetails = async (orderToken) => {
  const response = await api.get(`/orders/${orderToken}/`);

  return response.data;
};

/*
|--------------------------------------------------------------------------
| MY ORDERS
|--------------------------------------------------------------------------
*/

export const getMyOrders = async () => {
  const response = await api.get("/orders/my-orders/");

  return response.data;
};

/*
|--------------------------------------------------------------------------
| TRACK ORDER
|--------------------------------------------------------------------------
*/

export const trackOrder = async (orderToken) => {
  const response = await api.get(`/orders/track/${orderToken}/`);

  return response.data;
};

/*
|--------------------------------------------------------------------------
| CANCEL ORDER
|--------------------------------------------------------------------------
*/

export const cancelOrder = async (orderToken) => {
  const response = await api.post(`/orders/cancel/${orderToken}/`);

  return response.data;
};
